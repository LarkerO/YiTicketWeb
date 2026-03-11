export type Station = {
  id: string
  nameEn: string
  nameZh: string
}

export type Trip = {
  id: string
  trainNo: string
  from: Station
  to: Station
  depart: string
  arrive: string
  duration: string
  direct: boolean
  priceCny: number
  cheapest?: boolean
}

export type SeatClass = {
  id: 'smart' | 'prima' | 'club'
  titleZh: string
  titleEn: string
  descZh: string
  priceFromCny: number
}

export type TimetableStop = {
  station: string
  arrive?: string
  depart?: string
}

export const stations: Station[] = [
  { id: 'milano-centrale', nameEn: 'Milano Centrale', nameZh: '米兰中央火车站（主站）' },
  { id: 'roma-termini', nameEn: 'Roma Termini', nameZh: '罗马特米尼火车站（主站）' },
  { id: 'reggio-emilia', nameEn: 'Reggio Emilia', nameZh: '雷焦艾米利亚 意大利' },
  { id: 'bologna', nameEn: 'Bologna Centrale', nameZh: '博洛尼亚中央火车站（主站）' },
  { id: 'firenze', nameEn: 'Firenze S.M. Novella', nameZh: '佛罗伦萨新圣母火车站（主站）' },
  { id: 'milano-rogoredo', nameEn: 'Milano Rogoredo', nameZh: '米兰罗戈雷多' },
  { id: 'roma-tiburtina', nameEn: 'Roma Tiburtina', nameZh: '罗马蒂布提那' },
]

export const seatClasses: SeatClass[] = [
  {
    id: 'smart',
    titleZh: '智慧座',
    titleEn: 'Smart',
    descZh: '标准座位，舒适出行。',
    priceFromCny: 1590.54,
  },
  {
    id: 'prima',
    titleZh: '一等商务座',
    titleEn: 'Prima Business',
    descZh: '更宽敞的空间与服务体验。',
    priceFromCny: 2110.43,
  },
  {
    id: 'club',
    titleZh: '豪华行政座',
    titleEn: 'Club Executive',
    descZh:
      '超豪华体验！行政舱位，座椅空间大；桌板面积大，空间自由；可享餐食与酒水；可进入车站 Club 休息室。',
    priceFromCny: 2597.83,
  },
]

export const trips: Trip[] = [
  {
    id: 't9967',
    trainNo: '9967',
    from: stations[0],
    to: stations[1],
    depart: '06:15',
    arrive: '09:24',
    duration: '3时09分',
    direct: true,
    priceCny: 1558.05,
    cheapest: true,
  },
  {
    id: 't8111',
    trainNo: '8111',
    from: stations[0],
    to: stations[1],
    depart: '06:40',
    arrive: '10:19',
    duration: '3时39分',
    direct: true,
    priceCny: 1558.05,
  },
  {
    id: 't9969',
    trainNo: '9969',
    from: stations[0],
    to: stations[1],
    depart: '06:45',
    arrive: '10:05',
    duration: '3时20分',
    direct: true,
    priceCny: 1558.05,
  },
  {
    id: 't9971',
    trainNo: '9971',
    from: stations[0],
    to: stations[1],
    depart: '07:15',
    arrive: '10:25',
    duration: '3时10分',
    direct: true,
    priceCny: 1558.05,
  },
  {
    id: 't9983',
    trainNo: '9983',
    from: stations[0],
    to: stations[1],
    depart: '13:20',
    arrive: '16:30',
    duration: '3时10分',
    direct: true,
    priceCny: 1590.54,
  },
]

export const timetableByTripId: Record<string, TimetableStop[]> = {
  t9947: [
    { station: 'Milano Centrale', depart: '15:40' },
    { station: 'Milano Rogoredo', arrive: '15:48', depart: '15:50' },
    { station: 'Reggio Emilia Mediopadana AV', arrive: '16:26', depart: '16:28' },
    { station: 'Bologna Centrale', arrive: '16:54', depart: '16:57' },
    { station: 'Firenze S.M. Novella', arrive: '17:35', depart: '17:43' },
    { station: 'Roma Tiburtina', arrive: '19:09', depart: '19:12' },
    { station: 'Roma Termini' },
  ],
  t9967: [
    { station: 'Milano Centrale', depart: '06:15' },
    { station: 'Roma Termini', arrive: '09:24' },
  ],
  t9983: [
    { station: 'Milano Centrale', depart: '13:20' },
    { station: 'Roma Termini', arrive: '16:30' },
  ],
}
