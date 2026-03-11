import { useEffect } from 'react'
import type { ReactNode } from 'react'

export function BottomSheet({
  open,
  onClose,
  title,
  children,
}: {
  open: boolean
  onClose: () => void
  title?: string
  children: ReactNode
}) {
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="absolute inset-x-0 bottom-0 mx-auto max-w-[420px]">
        <div className="rounded-t-[18px] bg-white shadow-card" onClick={(e) => e.stopPropagation()}>
          <div className="flex items-center justify-between px-4 py-3">
            <div className="text-base font-semibold">{title}</div>
            <button className="text-gray-500" onClick={onClose}>
              ✕
            </button>
          </div>
          <div className="px-4 pb-4">{children}</div>
        </div>
      </div>
    </div>
  )
}
