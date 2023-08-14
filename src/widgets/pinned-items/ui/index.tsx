import { useParams } from 'react-router'
import { getUserPinnedItems } from '../api'
import { RepositoryCard } from '../../../entities/repository-card'
import { RepoCardList } from '../../../entities/repo-card-list'

export const PinnedItems = () => {
  const { login } = useParams()

  const { data, loading } = getUserPinnedItems(login as string)

  return (
    <RepoCardList loading={loading}>
      <div className="grid grid-cols-2 gap-4">
        {data?.map((repo) => (
          <div className="">
            <RepositoryCard repository={repo} key={repo.id} />
          </div>
        ))}
      </div>
    </RepoCardList>
  )
}
