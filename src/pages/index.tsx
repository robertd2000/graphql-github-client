import { Route, Routes } from 'react-router-dom'
import HomePage from './home'
import AuthPage from './auth'

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/auth" element={<AuthPage />} />
    </Routes>
  )
}
