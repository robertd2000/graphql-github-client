import { UserSider } from '../../widgets/user-sider'

export const UserPage = () => {
  return (
    <div className="grid grid-flow-row-dense auto-rows-max grid-cols-3 gap-4 mx-auto max-w-screen-xl mt-4">
      <div className="col-span-1">
        <UserSider />
      </div>
      <div className="col-span-2">data</div>
    </div>
  )
}
