export default function OrdersPage() {
  return (
    <div>
      <div className="bg-italo-800 px-4 pb-4 pt-10 text-white">
        <div className="text-center text-base font-semibold">订单列表</div>
      </div>

      <div className="px-4 pt-4">
        <div className="flex gap-3">
          <button className="flex-1 rounded-full bg-italo-800/90 py-3 text-sm font-semibold text-white">已支付订单</button>
          <button className="flex-1 rounded-full bg-italo-800/30 py-3 text-sm font-semibold text-white">全部订单</button>
        </div>

        <div className="mt-4 yt-card flex h-[520px] items-center justify-center">
          <div className="text-center">
            <div className="mx-auto mb-3 h-24 w-24 rounded-full bg-gray-100" />
            <div className="text-sm text-gray-400">暂无订单</div>
          </div>
        </div>
      </div>
    </div>
  )
}
