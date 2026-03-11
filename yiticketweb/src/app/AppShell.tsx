import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom'

function TabItem({ to, label }: { to: string; label: string }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }: { isActive: boolean }) =>
        `flex flex-1 flex-col items-center justify-center py-2 text-xs ${
          isActive ? 'text-italo-800 font-semibold' : 'text-gray-400'
        }`
      }
      end
    >
      <span className="leading-none">{label}</span>
    </NavLink>
  )
}

export default function AppShell() {
  const location = useLocation()
  const navigate = useNavigate()
  const showTabBar = !location.pathname.startsWith('/stations') && !location.pathname.startsWith('/date-time')

  return (
    <div className="yt-phone">
      <div className="min-h-[100vh] pb-16">
        <Outlet />
      </div>

      {showTabBar && (
        <div className="fixed bottom-0 left-0 right-0">
          <div className="mx-auto flex h-[62px] max-w-[420px] items-center border-t border-gray-100 bg-white/95 backdrop-blur">
            <TabItem to="/" label="首页" />
            <TabItem to="/orders" label="订单" />
            <TabItem to="/me" label="我的" />
          </div>
        </div>
      )}

      {/* simple global back hotspot for non-tab pages */}
      {location.pathname !== '/' && !location.pathname.startsWith('/orders') && !location.pathname.startsWith('/me') && (
        <button
          className="fixed left-2 top-2 z-50 rounded-full bg-white/80 px-3 py-2 text-sm shadow"
          onClick={() => navigate(-1)}
        >
          ←
        </button>
      )}
    </div>
  )
}
