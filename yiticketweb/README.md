# YiTicketWeb

移动端 H5 风格火车票购买前端（React + Vite + TS + Tailwind），基于 mock 数据复刻 Italo 小程序截图 UI。

## Local dev

```bash
cd yiticketweb
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Deploy to Vercel

方式 1：Vercel Dashboard（推荐）
1. 打开 https://vercel.com/new
2. Import Git Repository：选择 `LarkerO/YiTicketWeb`
3. **Root Directory 选择：`yiticketweb`**
4. Framework Preset：Vite
5. Build Command：`npm run build`
6. Output Directory：`dist`
7. Deploy

方式 2：Vercel CLI
```bash
cd yiticketweb
npx vercel
```

> 本项目使用 React Router，已提供 `yiticketweb/vercel.json` 做 SPA rewrite。
