import { Route, Routes } from 'react-router-dom'
import HomePage from './home'
import AuthPage from './auth'
import { SearchPage } from './search'

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/search" element={<SearchPage />} />
    </Routes>
  )
}
