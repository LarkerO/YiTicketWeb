import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'

type Day = { d: number; muted?: boolean; tag?: string }

export default function DateTimePage() {
  const navigate = useNavigate()
  const [selectedDay, setSelectedDay] = useState(11)
  const [selectedTime, setSelectedTime] = useState('12:00')

  const days = useMemo<Day[]>(() => {
    // March 2026 starts on Sunday? We'll keep a simple fixed grid matching screenshot vibe.
    return [
      { d: 1, muted: true },
      { d: 2, muted: true },
      { d: 3, muted: true },
      { d: 4, muted: true },
      { d: 5, muted: true },
      { d: 6, muted: true },
      { d: 7, muted: true },
      { d: 8, muted: true },
      { d: 9 },
      { d: 10 },
      { d: 11, tag: '已选' },
      { d: 12, tag: '明天' },
      { d: 13, tag: '后天' },
      { d: 14 },
      { d: 15 },
      { d: 16 },
      { d: 17 },
      { d: 18 },
      { d: 19 },
      { d: 20 },
      { d: 21 },
      { d: 22 },
      { d: 23 },
      { d: 24 },
      { d: 25 },
      { d: 26 },
      { d: 27 },
      { d: 28 },
      { d: 29 },
      { d: 30 },
      { d: 31 },
    ]
  }, [])

  const times = ['00:00', '04:00', '06:00', '08:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00']

  return (
    <div className="bg-white">
      <div className="px-4 pb-2 pt-10">
        <div className="text-center text-base font-semibold">选择日期</div>
      </div>

      <div className="px-4 pt-2">
        <div className="flex justify-between text-sm text-gray-600">
          {['一', '二', '三', '四', '五', '六', '日'].map((w) => (
            <div key={w} className="w-10 text-center">
              {w}
            </div>
          ))}
        </div>

        <div className="mt-3 text-center text-sm font-semibold text-gray-700">2026年3月</div>

        <div className="mt-2 grid grid-cols-7 gap-y-2">
          {days.map((day) => {
            const selected = day.d === selectedDay
            return (
              <button
                key={day.d}
                className="flex flex-col items-center justify-center py-2"
                onClick={() => setSelectedDay(day.d)}
              >
                <div
                  className={`h-10 w-10 rounded-xl text-center text-sm leading-10 ${
                    selected ? 'bg-italo-800 text-white' : day.muted ? 'text-gray-300' : 'text-gray-800'
                  }`}
                >
                  {day.d}
                </div>
                {day.tag && <div className="mt-1 text-[10px] text-gray-400">{day.tag}</div>}
              </button>
            )
          })}
        </div>

        <div className="mt-6 text-sm text-gray-600">
          出发时间： <span className="font-semibold text-italo-800">12:42</span>
        </div>

        <div className="mt-3 grid grid-cols-5 gap-2">
          {times.map((t) => (
            <button
              key={t}
              className={`rounded-xl border px-0 py-3 text-sm ${
                selectedTime === t ? 'border-italo-800 bg-italo-50 text-italo-800' : 'border-gray-200 bg-white'
              }`}
              onClick={() => setSelectedTime(t)}
            >
              {t}
            </button>
          ))}
        </div>

        <button
          className="mt-6 w-full rounded-xl2 bg-italo-800 py-4 text-base font-semibold text-white"
          onClick={() => {
            // return to home with a sample label
            const txt = `3月${selectedDay}日 周三 ${selectedTime}`
            navigate(`/?date=${encodeURIComponent(txt)}`)
          }}
        >
          确定
        </button>
      </div>
    </div>
  )
}
