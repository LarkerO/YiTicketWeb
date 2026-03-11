import { useNavigate } from 'react-router-dom'
import { trips } from '../mock/data'

export default function TripsPage() {
  const navigate = useNavigate()

  return (
    <div>
      <div className="bg-italo-800 px-4 pb-4 pt-10 text-white">
        <div className="relative flex items-center justify-center">
          <button className="absolute left-0 h-11 w-11 rounded-full bg-white/20" onClick={() => history.back()}>
            ←
          </button>
          <div className="text-base font-semibold">Milano Centrale → Roma Termini</div>
        </div>

        <div className="mt-3 flex items-center justify-between text-xs opacity-95">
          <div>1成人</div>
          <div>06:00出发</div>
        </div>

        <div className="mt-3 flex gap-3 overflow-x-auto pb-2">
          {['周三 11', '周四 03-12', '周五 13', '周六 14', '周日 15'].map((d, idx) => (
            <div
              key={d}
              className={`shrink-0 rounded-xl3 px-4 py-3 text-xs ${
                idx === 1 ? 'bg-white text-italo-800 font-semibold' : 'bg-white/15'
              }`}
            >
              {d}
            </div>
          ))}
        </div>
        <div className="mx-auto mt-1 h-1 w-[60%] rounded-full bg-white/20" />
      </div>

      <div className="px-4 pt-4">
        <div className="space-y-4">
          {trips.slice(0, 4).map((t) => (
            <button
              key={t.id}
              className="w-full rounded-xl3 border border-italo-800/15 bg-white px-5 py-5 text-left shadow-soft"
              onClick={() => navigate(`/seat-classes?tripId=${t.id}`)}
            >
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-[44px] font-extrabold leading-none text-gray-900">{t.depart}</div>
                  <div className="mt-2 text-xs text-gray-500">{t.from.nameEn}</div>
                </div>

                <div className="pt-3 text-center">
                  <div className="text-xs text-gray-400">{t.duration}</div>
                </div>

                <div className="text-right">
                  <div className="text-[44px] font-extrabold leading-none text-gray-900">{t.arrive}</div>
                  <div className="mt-2 text-xs text-gray-500">{t.to.nameEn}</div>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <div className="flex gap-2">
                  {t.cheapest && (
                    <span className="rounded-full bg-italo-800 px-4 py-2 text-xs font-semibold text-white">最便宜</span>
                  )}
                  <span className="rounded-full bg-gray-100 px-4 py-2 text-xs text-gray-600">直达</span>
                </div>

                <div className="text-right">
                  <div className="text-2xl font-extrabold text-italo-800">¥{t.priceCny.toFixed(2)}</div>
                  <div className="mt-1 text-xs text-gray-400">车次：{t.trainNo}</div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
