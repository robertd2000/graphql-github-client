import { RepoInfo } from '../../../widgets/repo-info/ui'

export const RepoOverviewPage = () => {
  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="col-span-2"></div>
      <div>
        <RepoInfo />
      </div>
    </div>
  )
}
