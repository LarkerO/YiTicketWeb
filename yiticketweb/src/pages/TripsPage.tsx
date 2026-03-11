import { useNavigate } from 'react-router-dom'
import { trips } from '../mock/data'

export default function TripsPage() {
  const navigate = useNavigate()
  return (
    <div>
      <div className="bg-italo-800 px-4 pb-3 pt-10 text-white">
        <div className="text-center text-base font-semibold">Milano Centrale → Roma Termini</div>
        <div className="mt-2 flex items-center justify-between text-xs opacity-90">
          <div>1成人</div>
          <div>06:00出发</div>
        </div>

        <div className="mt-3 flex gap-2 overflow-x-auto pb-2">
          {['周三 11', '周四 03-12', '周五 13', '周六 14', '周日 15', '周一 16'].map((d, idx) => (
            <div
              key={d}
              className={`shrink-0 rounded-xl px-3 py-2 text-xs ${
                idx === 1 ? 'bg-white text-italo-800' : 'bg-white/20'
              }`}
            >
              {d}
            </div>
          ))}
          <div className="shrink-0 rounded-xl bg-white/20 px-3 py-2 text-xs">📅</div>
        </div>
      </div>

      <div className="px-4 pt-4">
        <div className="space-y-3">
          {trips.slice(0, 4).map((t) => (
            <button
              key={t.id}
              className="yt-card w-full border border-italo-800/20 p-4 text-left"
              onClick={() => navigate(`/seat-classes?tripId=${t.id}`)}
            >
              <div className="flex items-center justify-between">
                <div className="text-3xl font-extrabold text-gray-900">{t.depart}</div>
                <div className="text-xs text-gray-400">{t.duration}</div>
                <div className="text-3xl font-extrabold text-gray-900">{t.arrive}</div>
              </div>
              <div className="mt-1 flex items-center justify-between text-xs text-gray-500">
                <div>{t.from.nameEn}</div>
                <div>{t.to.nameEn}</div>
              </div>

              <div className="mt-3 flex items-center justify-between">
                <div className="flex gap-2">
                  {t.cheapest && <span className="rounded-full bg-italo-800 px-3 py-1 text-xs text-white">最便宜</span>}
                  <span className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-600">直达</span>
                </div>
                <div className="text-xl font-extrabold text-italo-800">¥{t.priceCny.toFixed(2)}</div>
              </div>
              <div className="mt-1 text-right text-xs text-gray-400">车次：{t.trainNo}</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
