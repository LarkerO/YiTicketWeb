# YiTicketWeb（火车票购买前端）UI 复刻 - 设计稿

日期：2026-03-11

## 目标

- 创建一个 **移动端 H5** 风格的火车票购买前端项目（React + Vite）。
- **复刻/还原**用户提供的 Italo 小程序截图 UI（红白主题、卡片列表、底部 Tab、弹窗/抽屉交互）。
- **暂不对接 API**：使用 mock 数据保证页面可交互、可跳转、可编译运行。
- 代码需可本地 `dev/build` 正常编译。
- 创建 GitHub 仓库并推送代码。

## 范围（页面/路由）

底部 Tab 三页（常驻）：

1. 首页 `/`（查询页）
   - 出发站/到达站选择
   - 日期时间选择
   - 乘客人数选择
   - 搜索按钮 → 跳转车次列表
2. 订单 `/orders`
   - 已支付订单 / 全部订单 Tab
   - 暂无订单空状态
3. 我的 `/me`
   - 常用联系人 / 中文客服 / 我的资料 / 支付记录 / 货币切换 / 运营信息 / 运输条款 / 退出登录

流程页：

4. 搜索车站 `/stations?type=from|to`
   - 搜索输入框
   - 搜索记录
   - 热门城市
5. 选择日期 `/date-time`
   - 月历（可切换月份/选择日期）
   - 时间段按钮（00:00/04:00/06:00/…/20:00）
6. 车次列表 `/trips`
   - 车次卡片列表（出发/到达、耗时、直达、价格、最便宜标签）
   - 点击某车次 → 选座位类型
7. 选座位类型 `/seat-classes`
   - Smart / Prima Business / Club Executive 卡片
   - 票价选择区块（Flex/退改说明）
   - 入口：行程详情弹窗、经停站/时刻表
8. 时刻表 `/timetable/:tripId`
   - 站点时间轴（到达/出发）

弹窗（Modal/BottomSheet，不一定独立路由）：

- 选择乘客人数（成人/青少年/老年 +/−）
- 行程详情（时间轴 + 地图占位图 + “我知道了”）

## 交互与导航

- 使用 React Router 实现页面跳转。
- 底部 TabBar 始终可切换（弹窗覆盖时不切换）。
- 表单项点击进入对应选择页；选择后回填并返回。
- 车次选择后进入座位类型页；座位页可进入行程详情弹窗与时刻表页。

## 技术栈

- Vite + React + TypeScript
- react-router-dom
- TailwindCSS（负责布局、间距、字号）
- 少量自定义 CSS（主题色、阴影、圆角、Tab/按钮细节）

> 目标是“像截图”，因此允许 Tailwind + 自定义样式混用。

## 视觉规范（从截图抽象）

- 主题色：Italo 红（接近 #8B1B1B / #A21D1D 一类深红），搭配白底卡片。
- 页面背景：浅灰/白。
- 卡片：圆角（12~16）、轻微阴影、内边距偏大。
- 主按钮：大红色、圆角、底部固定或靠下。
- 文案：中英双语混排（站名英文为主，中文副标题）。

## 组件拆分

- `AppShell`：移动端容器（max-width 居中）+ 顶部栏 + TabBar
- `TopBar`：返回/标题/右侧更多按钮
- `TabBar`：首页/订单/我的
- `Card`：通用卡片
- `FormRow`：表单行（左图标+文本+右箭头）
- `BottomSheet`：底部弹层
- `Modal`：中间弹层
- `TripCard` / `SeatClassCard` / `Timeline`

## Mock 数据

- Stations：Milano Centrale / Roma Termini / Reggio Emilia / Bologna Centrale / Firenze S.M. Novella 等
- Trips：多条车次（出发到达时间、耗时、车次号、是否直达、价格、标签）
- Seat Classes：Smart / Prima Business / Club Executive（各自图片占位/描述/价格）
- Timetable：站点序列（到达/出发时间）

## 验收标准

- `pnpm dev` 可运行；`pnpm build` 可通过。
- 所有页面可通过按钮/列表项互相跳转到达。
- UI 风格与提供截图高度一致（红白主题、卡片布局、弹窗样式、TabBar）。
- 代码推送到新建 GitHub 仓库。
