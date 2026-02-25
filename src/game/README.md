# Game Module Map

拆分后的核心模块（对应 `src/game/*.js`）：

- `core.js`: 启动、主循环、状态机、模块装配。
- `config.js`: 常量、默认设置、文本格式化。
- `input.js`: 键盘输入采集与按键队列。
- `ui.js`: 菜单/HUD/结算 UI 与设置面板。
- `levels.js`: 关卡数据与路径/进度数学。
- `levels/ring.js`: 环峰禁区关卡数据。
- `levels/serpent.js`: 裂脊蛇行关卡数据。
- `world.js`: world 系统入口 wrapper（re-export `world/system.js`）。
- `world/system.js`: world 组装层（setupWorld 调度顺序与状态清理）。
- `world/build-scene.js`: 光照与地形网格构建。
- `world/route.js`: 赛道路面/护栏/边界与路线 frame 几何。
- `world/mountains.js`: 山体群生成、壳体几何、碰撞体体积。
- `world/checkpoints.js`: checkpoint 门与捕获参数构建。
- `world/interactions.js`: ramp/boost/item wave 交互区构建与审计。
- `world/environment.js`: 环境分发（默认/harbor/urban8）。
- `world/environments/harbor.js`: 港口环境构建。
- `world/environments/urban8.js`: 城市双环环境构建。
- `world/math.js`: 世界构建共享数学 helper。
- `world/obstacles.js`: 世界构建共享障碍推入 helper。
- `entities.js`: 车辆/骑手实体构建与动画。
- `systems-gameplay.js`: gameplay 系统入口 wrapper（re-export `gameplay/system.js`）。
- `gameplay/system.js`: gameplay 组装层与 updateRacers 主循环。
- `gameplay/combat.js`: 出拳、击倒、骑手接触解算。
- `gameplay/items.js`: 道具波次、收集/使用、投射物与地面陷阱。
- `gameplay/checkpoints.js`: 倒计时、检查点判定、复活、橡皮筋压力。
- `gameplay/controls.js`: 玩家/AI 控制输入决策。
- `gameplay/physics.js`: 物理解算、ramp/boost、障碍与越界。
- `camera.js`: 比赛相机与菜单巡航相机。
- `fx-audio.js`: 粒子特效与音频。
- `map-inspector.js`: 自由视角检图 + 自动巡检报告。

## 后续改动建议

- 改手感（加速度/转向/碰撞）：优先看 `gameplay/physics.js`、`gameplay/controls.js`、`gameplay/combat.js`。
- 改赛道/地形：优先看 `levels.js`、`world/route.js`、`world/build-scene.js`。
- 改场景散布与地图风格：优先看 `world/environment.js` 与 `world/environments/*`。
- 改 checkpoint / 复活：优先看 `gameplay/checkpoints.js` 与 `world/checkpoints.js`。
- 改 UI 或文字：优先看 `ui.js` 与 `config.js`。
- 改镜头：看 `camera.js`。
- 改音效/粒子：看 `fx-audio.js`。

调试入口：浏览器控制台可用 `window.__BIKE_GAME__` 访问运行时状态与模块。

## 地图检图模式

- `F2`: 进入/退出自由视角检图模式。
- `F3`: 在检图模式下切换关卡。
- 鼠标右键拖动视角，`W/A/S/D` 平移，`Q/E` 升降，`Shift` 冲刺，滚轮调速。
- 自动巡检：`window.__BIKE_GAME__.inspect.analyzeAll()`。
- 完整巡检（含地形大面片检测）：`window.__BIKE_GAME__.inspect.fullAudit()`。
