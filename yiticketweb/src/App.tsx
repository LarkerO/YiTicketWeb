import { Navigate, Route, Routes } from 'react-router-dom'
import AppShell from './app/AppShell'
import DateTimePage from './pages/DateTimePage'
import HomePage from './pages/HomePage'
import MePage from './pages/MePage'
import OrdersPage from './pages/OrdersPage'
import SeatClassesPage from './pages/SeatClassesPage'
import StationsPage from './pages/StationsPage'
import TimetablePage from './pages/TimetablePage'
import TripsPage from './pages/TripsPage'

export default function App() {
  return (
    <Routes>
      <Route element={<AppShell />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/orders" element={<OrdersPage />} />
        <Route path="/me" element={<MePage />} />

        <Route path="/stations" element={<StationsPage />} />
        <Route path="/date-time" element={<DateTimePage />} />
        <Route path="/trips" element={<TripsPage />} />
        <Route path="/seat-classes" element={<SeatClassesPage />} />
        <Route path="/timetable/:tripId" element={<TimetablePage />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}
