export default function MePage() {
  const items = [
    '常用联系人',
    '中文客服',
    '我的资料',
    '支付记录',
    '货币切换  ¥ 人民币',
    '运营信息',
    '运输条款',
  ]

  return (
    <div>
      <div className="bg-italo-800 px-4 pb-6 pt-10 text-white">
        <div className="flex items-center gap-3">
          <div className="h-14 w-14 rounded-full bg-white/30" />
          <div>
            <div className="text-base font-semibold">ITALO_USER5…</div>
            <div className="text-xs opacity-90">欢迎乘坐italo高速列车</div>
          </div>
        </div>
      </div>

      <div className="px-4 pt-4">
        <div className="yt-card divide-y divide-gray-100">
          {items.map((t) => (
            <button key={t} className="flex w-full items-center justify-between px-4 py-5 text-left">
              <span className="text-sm text-gray-800">{t}</span>
              <span className="text-gray-300">›</span>
            </button>
          ))}
        </div>

        <button className="mt-5 w-full rounded-xl bg-white py-4 text-sm font-semibold text-gray-700 shadow-card">
          退出登录
        </button>
      </div>
    </div>
  )
}
