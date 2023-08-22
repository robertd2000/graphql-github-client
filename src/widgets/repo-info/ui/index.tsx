import { useParams } from 'react-router'
import { getRepoInfo } from '../api'
import RepositoryInfoContext from '../model'
import { Repository } from '../types'
import { RepoAbout } from './about'
import { RepoReleases } from './releases'
import { RepoLanguages } from './languages'
import { RepoInfoSkeleton } from './skeleton'

export const RepoInfo = () => {
  const { owner, name } = useParams()

  const { data, loading } = getRepoInfo({
    name: name as string,
    owner: owner as string,
  })

  return loading ? (
    <RepoInfoSkeleton />
  ) : (
    <RepositoryInfoContext.Provider value={{ repository: data as Repository }}>
      <RepoAbout />
      <hr className="my-6" />
      <RepoReleases />
      <hr className="my-6" />

      <RepoLanguages />
    </RepositoryInfoContext.Provider>
  )
}
