# Codex Log（Urban8 立交重做：本轮）

规则：
- 每次检索前先看本文件，避免重复 `rg/查文件`。
- 若需重复检索，必须记录原因（代码已变更或需要复验）。

| Date | Task | 目标/关键词 | 命令 | 文件 | 结论 | 下一步 |
|---|---|---|---|---|---|---|
| 2026-02-21 | 1 | 检查仓库状态，确认提交策略 | `git status --short`; `Get-ChildItem -Name`; `git rev-parse --show-toplevel` | repo root, `pvz/` | Git 根在 `C:/Users/Kyle/Desktop/codex`，`pvz` 子目录有大量无关改动/未跟踪内容。 | 后续 commit 使用精确 pathspec，仅提交本任务文件。 |
| 2026-02-21 | 1 | 读取旧日志与 spec，避免重复搜索 | `Get-Content docs/codex-log.md`; `Get-Content docs/spec.md` | `docs/codex-log.md`, `docs/spec.md` | 旧文档包含历史回合内容，本轮需重写并重新记录。 | 按本轮任务重建文档。 |
| 2026-02-21 | 1 | 对齐关卡 schema（ring/serpent/urban8） | `rg -n "path/checkpoints/ramps/boosts/items/bounds/palette/heightFn/mountainField" src/game/levels/{ring,serpent,urban8}.js`; `Get-Content` | `src/game/levels/ring.js`, `src/game/levels/serpent.js`, `src/game/levels/urban8.js` | 三图字段结构一致；Urban8 可在既有 schema 内重做。 | 保持字段命名不变。 |
| 2026-02-21 | 1 | 定位 world 构建链路与 Urban8 专有实现点 | `rg -n "setupWorld|buildTerrain|buildRoute|buildUrbanRouteBoundaries|buildUrbanEnvironment|buildCheckpoints|buildInteractionZones" src/game/world.js`; `Get-Content` | `src/game/world.js` | 关键改造点：`buildUrbanRouteBoundaries` 与 `buildUrbanEnvironment`；路线几何由 `buildRoute` 链路统一构建。 | Task 2 从这两处清理高墙/厚盖板/重复边界。 |
| 2026-02-21 | 1 | 定位审计入口与命令 | `rg -n "fullAudit|freeCamAuditAll|fullMapSweep|analyzeLevel|window.__BIKE_GAME__" src/game/map-inspector.js src/game/core.js`; `Get-Content` | `src/game/map-inspector.js`, `src/game/core.js` | 可用入口：`window.__BIKE_GAME__.inspect.fullAudit/freeCamAuditAll/fullMapSweep/analyzeLevel`。 | Task 10 用这些入口做最终回归。 |
| 2026-02-21 | 1 | 复验旧结论是否过期（必须复验） | `Get-Content src/game/world.js`; `Get-Content src/game/levels.js` | `src/game/world.js`, `src/game/levels.js` | 当前实现仍存在高密边界/挡墙与规整化交汇结构，且路径是 2D + `heightFn` 驱动。 | 后续重做以最小侵入改造现有链路，不凭空造新 schema 字段。 |
| 2026-02-21 | 1 | 文档落盘 | 写入文件 | `docs/spec.md`, `docs/codex-log.md` | Task 1 文档已更新。 | 输出证据并提交 docs-only commit。 |
| 2026-02-21 | 2 | 复核高墙/厚盖板来源改动点 | `git diff -- src/game/world.js`; `rg -n "buildUrbanRouteBoundaries|bridge|underpass|connector" src/game/world.js` | `src/game/world.js` | 改动集中在 Urban8 边界碰撞密度、桥体厚度、下层墙体高度与 connector 指引结构；已去除高墙走廊式碰撞。 | 运行构建与实机审计确认无回归。 |
| 2026-02-21 | 2 | 构建验证 | `npm run build` | `dist/*` | Vite 生产构建通过。 | 继续实机加载 urban8 做 inspect 审计。 |
| 2026-02-21 | 2 | 交汇区实机审计（碰撞/空气墙） | Playwright 打开 `http://localhost:5173` + 选择 Urban8 + `window.__BIKE_GAME__.inspect.analyzeLevel('urban8')` | runtime (`window.__BIKE_GAME__`) | `intrusiveTrackObstacles=0`、`likelyAirWalls=0`、`blockedSamples=0`、`routeShearedMeshes=0`；交汇区无高墙式阻挡指标。 | 输出 Task 2 证据并提交。 |
| 2026-02-21 | 3 | 重排 Urban8 路线拓扑（只改结构） | `Get-Content src/game/levels/urban8.js`; `apply_patch` | `src/game/levels/urban8.js` | 将 `path` 从规整矩形改为 16 点非对称双环走廊，并重排 `checkpoints`；上层主走廊固定在正 z 区。 | 构建+审计验证可跑与无回归。 |
| 2026-02-21 | 3 | 路径几何自检（避免自交） | `node --input-type=module`（脚本检测段相交与段长） | `src/game/levels/urban8.js` | `intersections=[]`，`minLen=34.06`，无异常短段或自交。 | 继续实机审计。 |
| 2026-02-21 | 3 | 构建+实机审计 | `npm run build`; Playwright + `analyzeLevel('urban8')` | runtime | `intrusive=0`、`likelyAirWalls=0`、`blocked=0`、`sheared=0`，路线结构重排未引入碰撞回归。 | 输出证据并提交 Task 3。 |
| 2026-02-21 | 4 | 重写桥体结构（薄桥面+护栏+桥下道路） | `apply_patch` | `src/game/world.js` | 用新 `bridgeCore` 段替换旧桥/墙体逻辑：薄桥面、双侧矮护栏、4 根桥墩、桥下地面道路片段，移除旧“墙槽化”表达。 | 构建 + 审计 + 净空测算。 |
| 2026-02-21 | 4 | 桥下净空修正 | `apply_patch` | `src/game/world.js` | 为桥下地面道路加入 `underRoadDrop`（轻微下沉）避免与桥底互穿。 | 复验净空与碰撞指标。 |
| 2026-02-21 | 4 | 验证 | `npm run build`; Playwright `analyzeLevel('urban8')`; Playwright 净空采样脚本 | runtime | `intrusive=0`、`likelyAirWalls=0`、`blocked=0`；桥下关键横向带最小净空约 `0.56`。 | 输出 Task 4 证据并提交。 |
| 2026-02-21 | 5 | 匝道与高程曲线重做 | `apply_patch`（重写 `heightFn` + 调整 `deckZ`） | `src/game/levels/urban8.js`, `src/game/world.js` | 取消深沟式下切，改为“长缓坡抬升 + 桥顶平化 + 下层轻微下沉”；桥轴对齐上层主线。 | 采样坡度与净空并复验审计。 |
| 2026-02-21 | 5 | 曲线采样验证（脚本） | `node --input-type=module`（桥面步进/桥顶跨度/下层波动） | `src/game/levels/urban8.js` | `bridgeApproachMaxStep=0.507`，`bridgeCrestSpan=1.327`，`lowerRoadSpan=0.951`，坡度变化平顺无突变。 | 运行时复验碰撞与净空。 |
| 2026-02-21 | 5 | 运行时复验 | Playwright `analyzeLevel('urban8')` + 桥下净空采样 | runtime | `intrusive=0`、`likelyAirWalls=0`、`blocked=0`、`minBridgeClearance=0.65`。 | 输出 Task 5 证据并提交。 |
| 2026-02-21 | 6 | 去规整化双环路线 + 交汇容错边界 | `apply_patch`（重写 `urban8.path/checkpoints`；更新 `buildUrbanRouteBoundaries`、导流岛、连续边界带、核心去杂物） | `src/game/levels/urban8.js`, `src/game/world.js` | 上环改为网格折线风格，下环改为弧线+折线；交汇区新增连续低边界与导流岛，删除核心区碎设施放置。 | 编译 + 审计 + 贴边采样。 |
| 2026-02-21 | 6 | 路径几何复验（代码已变更，需复验） | `node --input-type=module`（检测自交与段长） | `src/game/levels/urban8.js` | `segments=25`，`intersections=[]`，`minLen=40.5`，无自交。 | 运行时审计与边缘测试。 |
| 2026-02-21 | 6 | 交汇区边缘可跑性采样（两方向各两圈 + 拐点贴边3次） | Playwright 自定义脚本（复刻 `hitsAnyObstacle` 规则） | runtime | 交汇区 forward/reverse 2 laps 采样 `blocked=0/0`；`testedCorners=21`、每拐点 `3` 次贴边采样，`failCount=0`。 | 输出 Task 6 证据并提交。 |
| 2026-02-21 | 6 | 最小审计（碰撞/侵入项） | Playwright `analyzeLevel('urban8')` + `fullMapSweep('urban8')` | runtime | `intrusive=0`、`likelyAirWalls=0`、`blocked=0`、`sheared=0`；`fullMapSweep` 的碰撞相关 issue 为 `0`（仅保留 ramp 调整提示）。 | 输出 Task 6 证据并提交。 |
| 2026-02-21 | 7 | 重做交汇引导系统 | `apply_patch`（更新 `interchangeGuides` + 新增 `approachChevrons` + `guideLandmarks`） | `src/game/world.js` | 引导改为“少而强”：关键入口箭头、过渡导流线、少量灯箱地标，点位与新路网对齐。 | 构建 + 审计复验。 |
| 2026-02-21 | 7 | 验证 | `npm run build`; Playwright `analyzeLevel('urban8')`; `runFreeCamAudit('urban8')` | runtime | `intrusive=0`、`likelyAirWalls=0`、`blocked=0`、`routeOcclusions=0`、`decorOcclusions=0`。 | 输出 Task 7 证据并提交。 |
| 2026-02-21 | 8 | 贴路连续街区增强 | `apply_patch`（新增 `placeCorridorBlocks` + `corridorBands`） | `src/game/world.js` | 沿上环/下环/两侧连接段生成连续贴路街区，非均匀步距与体量提升城市峡谷感。 | 构建 + 审计验证无遮挡回归。 |
| 2026-02-21 | 8 | 验证 | `npm run build`; Playwright `analyzeLevel('urban8')`; `runFreeCamAudit('urban8')` | runtime | `obstacleCount=368`；`intrusive=0`、`likelyAirWalls=0`、`blocked=0`、`routeOcclusions=0`、`decorOcclusions=0`。 | 输出 Task 8 证据并提交。 |
| 2026-02-21 | 9 | 城市语汇补齐（绿化+街道设施+路灯肩距） | `apply_patch`（新增 `boulevardGreens`、`streetFurnitureSets`；调 `lightStep` 与路灯偏移） | `src/game/world.js` | 增加花坛/树阵/公交站牌/信息亭/设施柜等，路灯节奏更均匀且离赛道更远，避免贴脸刮停观感。 | 构建 + 审计复验。 |
| 2026-02-21 | 9 | 验证 | `npm run build`; Playwright `analyzeLevel('urban8')`; `runFreeCamAudit('urban8')` | runtime | `intrusive=0`、`likelyAirWalls=0`、`blocked=0`、`routeOcclusions=0`、`decorOcclusions=0`；新增语汇未引入碰撞回归。 | 输出 Task 9 证据并提交。 |
| 2026-02-21 | 10 | 最终打磨：清桥下通廊 + 消除桥墩竖向碰撞重叠 | `apply_patch`（`isUnderRoadCorridor` 禁放 + 取消桥墩碰撞盒） | `src/game/world.js` | 桥下道路不再被大型 `decor` 阻断；桥面不再被桥墩竖向碰撞“虚挡”。 | 做桥上/桥下双向两次回归。 |
| 2026-02-21 | 10 | 最终打磨：消除 Urban8 最后 ramp 调整项 | `apply_patch`（微调 `ramps[0]`：`t/lane/width/length`） | `src/game/levels/urban8.js` | `rampIssueCount` 从 `1` 清零，`fullMapSweep('urban8')` 不再报 ramp 调整问题。 | 复跑全套检查。 |
| 2026-02-21 | 10 | 流水线回归 | `npm run check` | lint/test/build | `lint OK`、`tests 8/8 pass`、`build pass`。 | 执行审计入口与桥上桥下采样。 |
| 2026-02-21 | 10 | 审计入口回归 | Playwright `fullAudit('urban8')`; `fullMapSweep('urban8')`; `runFreeCamAuditAll({samplePoints:180})` | runtime | Urban8：`intrusive=0`、`likelyAirWalls=0`、`blocked=0`、`routeSheared=0`、`rampIssueCount=0`；`fullMapSweep('urban8')` issue=`0`；`freeCam` 遮挡全 0。 | 更新 spec 勾验收并提交最终 commit。 |
| 2026-02-21 | 10 | 桥上/桥下双向两次采样回归 | Playwright 脚本（固定桥面线与桥下线，2 laps each，碰撞判定复刻） | runtime | `bridgeTop tested=82 blocked=0`；`underRoad tested=82 blocked=0`。 | 文档收尾并提交。 |
|   2 0 2 6 - 0 2 - 2 5   |   1 1   |   B   (WT�V _0W�V��S9e�U�T�e�X�Q�[  |   c r e a t e   ` a l p i n e ,   l a v a ,   n e o n ,   r u i n s ` ,   a d d e d   4   c u s t o m   m o d e l s   t o   ` m o d e l - l i b r a r y . j s `   |   ` l e v e l s . j s ,   e n v i r o n m e n t . j s ,   m a p - i n s p e c t o r . j s `   |   C r e a t e d   4   n e w   m a p s   c o v e r i n g   i c e ,   v o l c a n i c ,   n e o n ,   a n d   r u i n   t h e m e s .   A d d e d   n e w   I c e C r y s t a l ,   N e o n O b e l i s k ,   M a g m a V e n t ,   a n d   R u i n P i l l a r   m o d e l s .   P a s s e d   f u l l   8 - m a p   s w e e p .   |   ` n p m   r u n   c h e c k   & &   n p m   r u n   a u d i t `  
 