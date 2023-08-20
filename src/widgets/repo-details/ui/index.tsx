import { useParams } from 'react-router'
import { getRepoDetails } from '../api'
import RepositoryDetailsContext from '../model'
import { Repository } from '../types'
import { RepoTitle } from './title'
import { RepoInfo } from './info'
import { RepoMenu } from './menu'
import { RepoSkeleton } from './skeleton'

export const RepoDetails = () => {
  const { owner, name } = useParams()

  const { data, loading } = getRepoDetails({
    name: name as string,
    owner: owner as string,
  })

  return loading ? (
    <RepoSkeleton />
  ) : (
    <RepositoryDetailsContext.Provider
      value={{ repository: data as Repository }}
    >
      <div className="flex flex-wrap justify-between items-center">
        <RepoTitle />
        <RepoInfo />
      </div>
      <hr className="my-6 h-0.5 border-t-0 bg-neutral-200 opacity-100 dark:opacity-50" />

      <RepoMenu />

      <hr className="my-6 h-0.5 border-t-0 bg-neutral-200 opacity-100 dark:opacity-50" />
    </RepositoryDetailsContext.Provider>
  )
}
