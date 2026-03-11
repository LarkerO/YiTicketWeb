import { useEffect, useMemo, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { BottomSheet } from '../components/BottomSheet'
import { stations } from '../mock/data'

export default function HomePage() {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const [fromId, setFromId] = useState('milano-centrale')
  const [toId, setToId] = useState('roma-termini')
  const [dateText, setDateText] = useState('3月11日 周三 12:41')
  const [passengersText, setPassengersText] = useState('1 成人')
  const [openPassengers, setOpenPassengers] = useState(false)

  useEffect(() => {
    const from = searchParams.get('from')
    const to = searchParams.get('to')
    const date = searchParams.get('date')
    if (from) setFromId(from)
    if (to) setToId(to)
    if (date) setDateText(date)
  }, [searchParams])

  const from = useMemo(() => stations.find((s) => s.id === fromId)!, [fromId])
  const to = useMemo(() => stations.find((s) => s.id === toId)!, [toId])

  return (
    <div>
      {/* header */}
      <div className="bg-italo-800 px-6 pb-8 pt-14 text-white">
        <div className="text-[44px] font-extrabold tracking-wide">.Italo</div>
        <div className="-mt-1 text-sm opacity-90">意大利高速列车</div>
      </div>

      <div className="-mt-10 px-4">
        <div className="yt-card p-5">
          <button
            className="flex w-full items-center justify-between py-3 text-left"
            onClick={() => navigate(`/stations?type=from&current=${fromId}`)}
          >
            <div>
              <div className="text-lg font-semibold text-gray-900">{from.nameEn}</div>
              <div className="text-xs text-gray-500">{from.nameZh}</div>
            </div>
            <span className="text-gray-400">▾</span>
          </button>

          <div className="my-3 flex items-center justify-center">
            <button
              className="h-12 w-12 rounded-full bg-italo-50 text-italo-800 shadow"
              onClick={() => {
                setFromId(toId)
                setToId(fromId)
              }}
              aria-label="swap"
            >
              ⇄
            </button>
          </div>

          <button
            className="flex w-full items-center justify-between py-3 text-left"
            onClick={() => navigate(`/stations?type=to&current=${toId}`)}
          >
            <div>
              <div className="text-lg font-semibold text-gray-900">{to.nameEn}</div>
              <div className="text-xs text-gray-500">{to.nameZh}</div>
            </div>
            <span className="text-gray-400">▾</span>
          </button>

          <div className="mt-3 grid grid-cols-1 gap-3">
            <button
              className="flex items-center justify-between rounded-xl3 border border-gray-200 bg-white px-4 py-4 text-left"
              onClick={() => navigate('/date-time')}
            >
              <div className="text-sm text-gray-800">{dateText}</div>
              <span className="text-gray-400">›</span>
            </button>

            <button
              className="flex items-center justify-between rounded-xl3 border border-gray-200 bg-white px-4 py-4 text-left"
              onClick={() => setOpenPassengers(true)}
            >
              <div className="text-sm text-gray-800">{passengersText}</div>
              <span className="text-gray-400">+</span>
            </button>
          </div>

          <button className="yt-primary-btn mt-5 w-full" onClick={() => navigate('/trips')}>
            搜索
          </button>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-4">
          <div className="yt-card overflow-hidden">
            <div className="h-24 bg-[radial-gradient(circle_at_30%_30%,#b11f1f,#741a1a)]" />
            <div className="p-4 text-sm font-semibold">
              高铁上的专属美食体验
              <div className="font-extrabold">Italo Selection</div>
            </div>
          </div>
          <div className="yt-card overflow-hidden">
            <div className="h-24 bg-[linear-gradient(135deg,#f4f5f7,#e6e7eb)]" />
            <div className="p-4 text-sm font-semibold">
              豪华行政舱舱位
              <div className="font-extrabold">Executive</div>
            </div>
          </div>
        </div>

        <div className="mt-5 yt-card p-4">
          <div className="h-28 rounded-xl3 bg-[linear-gradient(90deg,#fff,#f1f2f4)]" />
          <div className="mt-2 text-xs text-italo-800">ITALO线路图</div>
        </div>

        <div className="mt-5 text-sm font-semibold text-italo-800">常见问题</div>
        <div className="mt-2 yt-card divide-y divide-gray-100">
          {[
            '车票需要打印吗？',
            'italo小程序购票怎么选座？',
            '行李数量和尺寸有哪些限制？',
            '可以带宠物上车吗？',
            '儿童可以免费吗？',
            'Italo有哪些车厢等级？区别是什么？',
          ].map((q) => (
            <button key={q} className="flex w-full items-center justify-between px-4 py-4 text-left">
              <span className="text-sm text-gray-800">{q}</span>
              <span className="text-gray-400">›</span>
            </button>
          ))}
        </div>
      </div>

      <BottomSheet open={openPassengers} onClose={() => setOpenPassengers(false)} title="选择乘客人数">
        <PassengerPicker
          onConfirm={(txt) => {
            setPassengersText(txt)
            setOpenPassengers(false)
          }}
        />
      </BottomSheet>
    </div>
  )
}

function PassengerRow({
  label,
  sub,
  value,
  onChange,
}: {
  label: string
  sub: string
  value: number
  onChange: (v: number) => void
}) {
  return (
    <div className="flex items-center justify-between py-3">
      <div>
        <div className="text-sm font-semibold text-gray-900">
          {label} <span className="text-xs font-normal text-gray-400">{sub}</span>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <button
          className="h-9 w-9 rounded-full border border-gray-200 text-gray-500 disabled:opacity-30"
          onClick={() => onChange(Math.max(0, value - 1))}
          disabled={value === 0}
        >
          −
        </button>
        <div className="w-5 text-center text-sm font-semibold">{value}</div>
        <button className="h-9 w-9 rounded-full bg-italo-800 text-white" onClick={() => onChange(value + 1)}>
          +
        </button>
      </div>
    </div>
  )
}

function PassengerPicker({ onConfirm }: { onConfirm: (txt: string) => void }) {
  const [adult, setAdult] = useState(1)
  const [teen, setTeen] = useState(0)
  const [senior, setSenior] = useState(0)
  const total = adult + teen + senior

  return (
    <div>
      <PassengerRow label="成人" sub="30–59岁" value={adult} onChange={setAdult} />
      <div className="h-px bg-gray-100" />
      <PassengerRow label="青少年" sub="1–29" value={teen} onChange={setTeen} />
      <div className="h-px bg-gray-100" />
      <PassengerRow label="老年" sub="60岁+" value={senior} onChange={setSenior} />

      <div className="mt-2 text-center text-xs text-gray-400">最多可选9位乘客，查看年龄说明</div>
      <button
        className="mt-4 w-full rounded-xl2 bg-italo-800 py-4 text-base font-semibold text-white"
        onClick={() => {
          const parts: string[] = []
          if (adult) parts.push(`${adult} 成人`)
          if (teen) parts.push(`${teen} 青少年`)
          if (senior) parts.push(`${senior} 老年`)
          onConfirm(parts.join(' '))
        }}
      >
        确定（{total}）
      </button>
    </div>
  )
}
