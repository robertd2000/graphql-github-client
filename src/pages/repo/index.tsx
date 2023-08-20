import { Outlet } from 'react-router'
import { RepoDetails } from '../../widgets/repo-details/ui'

export const RepoPage = () => {
  return (
    <div className="mx-auto max-w-screen-xl mt-4">
      <RepoDetails />

      <Outlet />
    </div>
  )
}
