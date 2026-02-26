#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")/.."

echo "[1/3] starting postgres + redis..."
docker compose up -d db redis

echo "[2/3] waiting for postgres..."
until docker exec pvz-db pg_isready -U postgres >/dev/null 2>&1; do
  sleep 1
done

echo "[3/3] applying schema and starting api (local)..."
npx prisma db push
npm run dev
