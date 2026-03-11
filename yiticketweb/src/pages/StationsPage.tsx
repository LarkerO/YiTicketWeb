import { useMemo, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { stations } from '../mock/data'

export default function StationsPage() {
  const navigate = useNavigate()
  const [params] = useSearchParams()
  const type = (params.get('type') || 'from') as 'from' | 'to'
  const current = params.get('current')
  const [q, setQ] = useState('')

  const filtered = useMemo(() => {
    const key = q.trim().toLowerCase()
    if (!key) return stations
    return stations.filter((s) => (s.nameEn + s.nameZh).toLowerCase().includes(key))
  }, [q])

  const pick = (id: string) => {
    // back to home with query update
    const next = new URLSearchParams()
    next.set(type, id)
    navigate(`/?${next.toString()}`)
  }

  return (
    <div className="bg-white">
      <div className="bg-italo-800 px-4 pb-3 pt-10 text-white">
        <div className="text-center text-base font-semibold">搜索车站</div>
      </div>

      <div className="px-4 py-3">
        <div className="flex items-center gap-2 rounded-full bg-gray-100 px-4 py-3">
          <span className="text-gray-400">🔎</span>
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="请输入城市/车站"
            className="w-full bg-transparent text-sm outline-none"
          />
          {q && (
            <button className="text-gray-400" onClick={() => setQ('')}>
              ✕
            </button>
          )}
        </div>

        <div className="mt-4 text-sm font-semibold text-italo-800">搜索记录</div>
        <div className="mt-2 space-y-2">
          {[
            ['Milano Centrale', 'Reggio Emilia'],
            ['Milano Centrale', 'Roma Termini'],
          ].map(([a, b]) => (
            <div key={a + b} className="yt-card flex items-center justify-between px-4 py-4">
              <div className="text-sm font-semibold text-gray-800">
                {a} <span className="mx-2 text-gray-400">→</span> {b}
              </div>
              <div className="text-gray-400">›</div>
            </div>
          ))}
        </div>

        <div className="mt-5 text-sm font-semibold text-italo-800">热门城市</div>
        <div className="mt-2 grid grid-cols-3 gap-3">
          {['Roma', 'Napoli', 'Firenze', 'Venezia', 'Milano', 'Verona', 'Genova', 'Pompei', 'Bologna', 'Siena'].map(
            (c) => (
              <button key={c} className="rounded-xl bg-gray-100 py-3 text-center text-sm">
                {c}
              </button>
            ),
          )}
        </div>

        <div className="mt-6 text-sm font-semibold text-italo-800">车站</div>
        <div className="mt-2 yt-card divide-y divide-gray-100">
          {filtered.map((s) => (
            <button
              key={s.id}
              className={`flex w-full items-center justify-between px-4 py-4 text-left ${
                s.id === current ? 'bg-italo-50' : ''
              }`}
              onClick={() => pick(s.id)}
            >
              <div>
                <div className="text-sm font-semibold text-gray-900">{s.nameEn}</div>
                <div className="text-xs text-gray-500">{s.nameZh}</div>
              </div>
              <span className="text-gray-400">›</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
