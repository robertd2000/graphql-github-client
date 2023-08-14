import { Route, Routes } from 'react-router-dom'
import HomePage from './home'
import AuthPage from './auth'
import { SearchPage } from './search'
import { UserPage } from './user'
import { PinnedItems } from '../widgets/pinned-items'

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/user/:login" element={<UserPage />}>
        <Route path="" element={<PinnedItems />} />
        <Route path="repositories" element={<PinnedItems />} />
        <Route path="stars" element={<PinnedItems />} />
      </Route>
    </Routes>
  )
}
