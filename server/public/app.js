const $ = (id) => document.getElementById(id);
let token = localStorage.getItem('pvz_token') || '';

function setStatus(id, text) { $(id).textContent = text; }

for (const btn of document.querySelectorAll('.menu-btn')) {
  btn.addEventListener('click', () => {
    const tab = btn.dataset.tab;
    document.querySelectorAll('.tab').forEach((el) => el.classList.remove('active'));
    document.getElementById(tab).classList.add('active');
  });
}

$('register-btn').addEventListener('click', async () => {
  const body = {
    email: $('reg-email').value.trim(),
    nickname: $('reg-nickname').value.trim(),
    password: $('reg-password').value,
  };
  const res = await fetch('/auth/register', {
    method: 'POST', headers: {'content-type':'application/json'}, body: JSON.stringify(body)
  });
  const data = await res.json();
  if (!res.ok) return setStatus('auth-status', '注册失败: ' + (data.message || JSON.stringify(data)));
  token = data.token; localStorage.setItem('pvz_token', token);
  setStatus('auth-status', `注册成功，欢迎 ${data.user.nickname}`);
});

$('login-btn').addEventListener('click', async () => {
  const body = {
    email: $('login-email').value.trim(),
    password: $('login-password').value,
  };
  const res = await fetch('/auth/login', {
    method: 'POST', headers: {'content-type':'application/json'}, body: JSON.stringify(body)
  });
  const data = await res.json();
  if (!res.ok) return setStatus('auth-status', '登录失败: ' + (data.message || JSON.stringify(data)));
  token = data.token; localStorage.setItem('pvz_token', token);
  setStatus('auth-status', `登录成功，欢迎 ${data.user.nickname}`);
});

$('load-board').addEventListener('click', async () => {
  const mapCode = $('map-code').value.trim() || 'demo-1';
  const res = await fetch(`/leaderboard/${encodeURIComponent(mapCode)}?limit=20`);
  const data = await res.json();
  const body = $('board-body');
  body.innerHTML = '';
  const list = data.top || [];
  list.forEach((row, i) => {
    const tr = document.createElement('tr');
    const nick = row.user?.nickname || row.nickname || row.userId;
    tr.innerHTML = `<td>${i+1}</td><td>${nick}</td><td>${row.score}</td><td>${row.durationMs}</td>`;
    body.appendChild(tr);
  });
});

$('submit-score-btn').addEventListener('click', async () => {
  if (!token) return setStatus('pvp-status', '请先登录');
  const payload = {
    mapCode: $('submit-map').value.trim() || 'demo-1',
    score: Number($('submit-score').value),
    durationMs: Number($('submit-duration').value),
  };
  const res = await fetch('/leaderboard/submit', {
    method: 'POST',
    headers: { 'content-type': 'application/json', authorization: `Bearer ${token}` },
    body: JSON.stringify(payload),
  });
  const data = await res.json();
  if (!res.ok) return setStatus('pvp-status', '提交失败: ' + (data.message || JSON.stringify(data)));
  setStatus('pvp-status', data.updated ? '成绩已更新' : '未超过历史最好成绩');
});

$('queue-btn').addEventListener('click', () => {
  if (!token) return setStatus('pvp-status', '请先登录');
  const scheme = location.protocol === 'https:' ? 'wss' : 'ws';
  const ws = new WebSocket(`${scheme}://${location.host}/pvp/queue?token=${encodeURIComponent(token)}`);
  ws.onopen = () => setStatus('pvp-status', '已进入匹配队列...');
  ws.onmessage = (evt) => {
    const msg = JSON.parse(evt.data);
    if (msg.type === 'match_found') {
      setStatus('pvp-status', `匹配成功！对手: ${msg.opponent.nickname}`);
    } else if (msg.type === 'opponent_disconnected') {
      setStatus('pvp-status', '对手掉线，等待重连...');
    } else {
      setStatus('pvp-status', `事件: ${msg.type}`);
    }
  };
  ws.onerror = () => setStatus('pvp-status', '匹配连接失败');
});

$('load-board').click();
if (token) setStatus('auth-status', '已读取本地登录态');
