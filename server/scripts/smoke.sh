#!/usr/bin/env bash
set -euo pipefail

API_URL="${API_URL:-http://127.0.0.1:3000}"
EMAIL="${EMAIL:-test$(date +%s)@pvz.local}"
PASSWORD="${PASSWORD:-12345678}"
NICKNAME="${NICKNAME:-pvz_$(date +%s | tail -c 5)}"

register=$(curl -sS -X POST "$API_URL/auth/register" \
  -H 'content-type: application/json' \
  -d "{\"email\":\"$EMAIL\",\"password\":\"$PASSWORD\",\"nickname\":\"$NICKNAME\"}")

token=$(echo "$register" | node -e "let d='';process.stdin.on('data',c=>d+=c).on('end',()=>console.log(JSON.parse(d).token||''))")

if [[ -z "$token" ]]; then
  echo "register failed: $register"
  exit 1
fi

curl -sS -X POST "$API_URL/leaderboard/submit" \
  -H 'content-type: application/json' \
  -H "authorization: Bearer $token" \
  -d '{"mapCode":"demo-1","score":12345,"durationMs":9987}' >/dev/null

echo "ok: smoke passed"
