# PVZ 云端后端 (MVP)

当前版本已实现：

- 账号注册/登录（JWT）
- 玩家云存档（读取/更新）
- 地图最好成绩提交
- 地图排行榜查询（带 Redis 缓存）
- PVP 基础实时通道（匹配 + 转发指令 + 断线通知）
- 对局结果双端上报（claim）+ 一致性结算 MMR

## 1) 本地启动

```bash
cp .env.example .env
# 修改 DATABASE_URL/JWT_SECRET
npm install
npx prisma generate
npx prisma migrate dev --name init
npm run dev
```

健康检查：`GET /health`
依赖健康检查：`GET /health/deps`（会检查 PostgreSQL/Redis）

## 2) Docker 启动

```bash
docker compose up -d --build
```

会启动：
- PostgreSQL: `localhost:5432`
- Redis: `localhost:6379`
- API: `localhost:3000`

## 3) 开发快捷命令

```bash
./scripts/dev-up.sh    # 起 db/redis + 本地启动 api
./scripts/dev-down.sh  # 停掉 docker compose
```

## 4) 快速冒烟测试

```bash
API_URL=http://127.0.0.1:3000 ./scripts/smoke.sh
npm run test:pvp   # 双端上报一致性结算测试
```

## 5) API 概览

### Auth
- `POST /auth/register`
- `POST /auth/login`

### Player
- `GET /player/me` (Bearer Token)
- `PUT /player/progress` (Bearer Token)

### Leaderboard
- `POST /leaderboard/submit` (Bearer Token)
- `GET /leaderboard/:mapCode?limit=20`

### PVP
- WebSocket 匹配: `GET /pvp/queue?token=<JWT>`
- WebSocket 断线重连: `GET /pvp/reconnect?token=<reconnectToken>`
- 拉取事件回放/重连补帧: `GET /pvp/events/:matchId?after=0&limit=200` (Bearer Token)
- 结果状态查询: `GET /pvp/result/status/:matchId` (Bearer Token)
- 结果上报（每个玩家各自上报）: `POST /pvp/result/claim` (Bearer Token)
  - body: `{ "matchId": "...", "winnerId": "..." }`
  - 两端上报一致才会结算 MMR

WebSocket 事件：
- `queued`
- `match_found`（包含 `reconnectToken`）
- `peer_event`
- `opponent_disconnected`（包含 30 秒重连宽限）
- `reconnected` / `opponent_reconnected`
- `match_ended`

## 6) 下一步优先级

1. 服务端战斗裁判逻辑（防作弊核心）
2. Redis 队列 + 分布式房间管理（多实例）
3. 对局事件流持久化（回放）
4. 赛季榜、好友榜、地区榜
5. 断线重连（房间恢复）
6. 压测与限流（防刷榜）
