import { useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { timetableByTripId } from '../mock/data'

export default function TimetablePage() {
  const { tripId } = useParams()
  const data = useMemo(() => timetableByTripId[tripId || 't9947'] || timetableByTripId.t9947, [tripId])

  return (
    <div className="bg-white">
      <div className="px-4 pb-2 pt-10">
        <div className="text-center text-base font-semibold">{(tripId || '9947') + '时刻表'}</div>
      </div>

      <div className="px-4 py-4">
        <div className="yt-card p-4">
          <div className="relative">
            <div className="absolute left-2 top-1 bottom-1 w-0.5 bg-green-500/60" />

            {data.map((s, idx) => (
              <div key={idx} className="relative pl-8 py-3">
                <div className="absolute left-[3px] top-5 h-3 w-3 rounded-full bg-white ring-2 ring-green-500" />
                <div className="text-base font-semibold text-gray-900">{s.station}</div>
                <div className="mt-2 grid grid-cols-2 gap-2">
                  {s.arrive && (
                    <div className="rounded-xl bg-emerald-50 px-3 py-2 text-sm">
                      <div className="text-xs text-gray-500">到达</div>
                      <div className="font-semibold text-gray-900">{s.arrive}</div>
                    </div>
                  )}
                  {s.depart && (
                    <div className="rounded-xl bg-emerald-50 px-3 py-2 text-sm">
                      <div className="text-xs text-gray-500">出发</div>
                      <div className="font-semibold text-gray-900">{s.depart}</div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
