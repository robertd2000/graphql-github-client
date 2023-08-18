import { Outlet } from 'react-router'
import { OrgHeader } from '../../../widgets/org-header'

export const OrgPage = () => {
  return (
    <div className="mx-auto max-w-screen-xl mt-4">
      <OrgHeader />

      <div>
        <Outlet />
      </div>
    </div>
  )
}
