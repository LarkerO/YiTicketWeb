import { useMemo, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { Modal } from '../components/Modal'
import { seatClasses, trips } from '../mock/data'

export default function SeatClassesPage() {
  const navigate = useNavigate()
  const [params] = useSearchParams()
  const tripId = params.get('tripId') || 't9983'
  const trip = useMemo(() => trips.find((t) => t.id === tripId) || trips[0], [tripId])

  const [selected, setSelected] = useState<'smart' | 'prima' | 'club'>('smart')
  const [openItinerary, setOpenItinerary] = useState(false)

  return (
    <div>
      <div className="bg-italo-800 px-4 pb-4 pt-10 text-white">
        <div className="text-center text-base font-semibold">选座位类型</div>
      </div>

      <div className="px-4 pt-4">
        <div className="yt-card p-4">
          <div className="text-sm text-gray-600">3月11日 周三</div>
          <div className="mt-1 flex items-center justify-between">
            <div>
              <div className="text-base font-semibold">
                {trip.depart} · {trip.from.nameEn}
              </div>
              <div className="text-xs text-gray-500">{trip.from.nameZh}</div>
              <div className="mt-2 text-xs text-italo-800">车次：{trip.trainNo}</div>
              <button className="mt-1 text-xs text-italo-800 underline" onClick={() => navigate(`/timetable/${trip.id}`)}>
                查看经停站
              </button>
            </div>

            <div className="text-right">
              <div className="text-base font-semibold">
                {trip.arrive} · {trip.to.nameEn}
              </div>
              <div className="text-xs text-gray-500">{trip.to.nameZh}</div>
              <button
                className="mt-2 inline-flex items-center gap-1 rounded-full bg-italo-50 px-3 py-1 text-xs text-italo-800"
                onClick={() => setOpenItinerary(true)}
              >
                📍 查看地图
              </button>
            </div>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-3">
          {seatClasses.map((sc) => {
            const active = selected === sc.id
            return (
              <button
                key={sc.id}
                className={`yt-card overflow-hidden border ${active ? 'border-italo-800' : 'border-transparent'} text-left`}
                onClick={() => setSelected(sc.id)}
              >
                <div
                  className={`h-20 ${
                    sc.id === 'club'
                      ? 'bg-[linear-gradient(135deg,#f3f4f6,#e5e7eb)]'
                      : 'bg-[linear-gradient(135deg,#8c1b1b,#b11f1f)]'
                  }`}
                />
                <div className="p-3">
                  <div className="text-sm font-semibold text-gray-900">{sc.titleZh}</div>
                  <div className="text-xs text-gray-500">{sc.titleEn}</div>
                  <div className="mt-2 text-xs text-italo-800">¥{sc.priceFromCny.toFixed(2)} 起</div>
                </div>
                <div className="px-3 pb-3">
                  <div className={`h-3 w-3 rounded-full border ${active ? 'border-italo-800 bg-italo-800' : 'border-gray-300'}`} />
                </div>
              </button>
            )
          })}
        </div>

        <div className="mt-4">
          <div className="text-sm font-semibold text-gray-700">选择票价</div>
          <div className="mt-2 yt-card border border-italo-800/20 p-4">
            <div className="text-2xl font-extrabold text-italo-800">¥{seatClasses.find((s) => s.id === selected)!.priceFromCny.toFixed(2)}</div>
            <div className="mt-2 text-sm text-gray-700">灵活退改 <span className="ml-2 text-xs text-gray-400">Flex</span></div>
            <div className="mt-2 flex gap-4 text-xs text-gray-500">
              <span>✓ 有条件退</span>
              <span>✓ 有条件改</span>
              <span className="text-gray-400">›</span>
            </div>
          </div>
        </div>

        <button className="mt-6 w-full rounded-xl2 bg-italo-800 py-4 text-base font-semibold text-white">选择出行人</button>
      </div>

      <Modal open={openItinerary} onClose={() => setOpenItinerary(false)}>
        <div className="relative">
          <div className="px-4 py-4 text-center text-base font-semibold">行程详情</div>
          <button className="absolute right-3 top-3 text-gray-400" onClick={() => setOpenItinerary(false)}>
            ✕
          </button>
          <div className="px-4 pb-4">
            <div className="text-sm text-gray-600">3月11日 周三</div>
            <div className="mt-3 flex gap-3">
              <div className="w-12 text-xs text-gray-500">
                <div>{trip.depart}</div>
                <div className="mt-8">{trip.arrive}</div>
              </div>
              <div className="relative w-4">
                <div className="absolute left-1.5 top-1 h-full w-0.5 bg-italo-800/40" />
                <div className="absolute left-0.5 top-1 h-3 w-3 rounded-full bg-italo-800" />
                <div className="absolute left-0.5 top-[64px] h-3 w-3 rounded-full bg-white ring-2 ring-italo-800" />
              </div>
              <div className="flex-1">
                <div className="text-base font-semibold text-gray-900">{trip.from.nameEn}</div>
                <div className="text-xs text-gray-500">{trip.from.nameZh}</div>
                <div className="mt-8 text-base font-semibold text-gray-900">{trip.to.nameEn}</div>
                <div className="text-xs text-gray-500">{trip.to.nameZh}</div>
              </div>
              <div className="text-right text-xs text-gray-400">直达 {trip.duration}</div>
            </div>

            <div className="mt-4 overflow-hidden rounded-xl2 border border-gray-100">
              <div className="h-44 bg-[url('https://tile.openstreetmap.org/6/33/22.png')] bg-cover bg-center" />
              <div className="bg-white px-3 py-2 text-xs text-gray-400">地图仅作示意（mock）</div>
            </div>

            <button className="mt-5 w-full rounded-xl2 bg-italo-800 py-4 text-base font-semibold text-white" onClick={() => setOpenItinerary(false)}>
              我知道了
            </button>
          </div>
        </div>
      </Modal>
    </div>
  )
}
