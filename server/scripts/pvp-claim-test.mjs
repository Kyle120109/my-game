#!/usr/bin/env node
/* eslint-disable no-console */
import WebSocket from 'ws';

const API = process.env.API_URL || 'http://127.0.0.1:3000';

const j = (r) => r.json();

async function register(email, nickname, password = '12345678') {
  const res = await fetch(`${API}/auth/register`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ email, nickname, password }),
  });
  const data = await j(res);
  if (!res.ok) throw new Error(`register failed: ${JSON.stringify(data)}`);
  return data;
}

function openWS(url) {
  return new Promise((resolve, reject) => {
    const ws = new WebSocket(url);
    ws.on('open', () => resolve(ws));
    ws.on('error', reject);
  });
}

function waitMatchFound(ws, timeoutMs = 15000) {
  return new Promise((resolve, reject) => {
    const t = setTimeout(() => reject(new Error('ws timeout waiting match_found')), timeoutMs);
    ws.on('message', (buf) => {
      const msg = JSON.parse(buf.toString());
      if (msg.type === 'match_found') {
        clearTimeout(t);
        resolve(msg);
      }
    });
  });
}

async function main() {
  const ts = Date.now();
  const a = await register(`a_${ts}@pvz.local`, `a_${ts.toString().slice(-5)}`);
  const b = await register(`b_${ts}@pvz.local`, `b_${ts.toString().slice(-5)}`);

  const wsBase = API.replace('http://', 'ws://').replace('https://', 'wss://');
  const wa = await openWS(`${wsBase}/pvp/queue?token=${encodeURIComponent(a.token)}`);
  const wb = await openWS(`${wsBase}/pvp/queue?token=${encodeURIComponent(b.token)}`);

  const m1 = await waitMatchFound(wa);
  const m2 = await waitMatchFound(wb);

  const matchId = m1.matchId || m2.matchId;

  const claimA = await fetch(`${API}/pvp/result/claim`, {
    method: 'POST',
    headers: { 'content-type': 'application/json', authorization: `Bearer ${a.token}` },
    body: JSON.stringify({ matchId, winnerId: a.user.id }),
  }).then(j);

  const claimB = await fetch(`${API}/pvp/result/claim`, {
    method: 'POST',
    headers: { 'content-type': 'application/json', authorization: `Bearer ${b.token}` },
    body: JSON.stringify({ matchId, winnerId: a.user.id }),
  }).then(j);

  const status = await fetch(`${API}/pvp/result/status/${matchId}`, {
    headers: { authorization: `Bearer ${a.token}` },
  }).then(j);

  wa.close();
  wb.close();

  console.log(JSON.stringify({ ok: true, matchId, claimA, claimB, status }, null, 2));
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
