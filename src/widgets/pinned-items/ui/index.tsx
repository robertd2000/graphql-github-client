import { useParams } from 'react-router'
import { getUserPinnedItems } from '../api'
import { RepositoryCard } from '../../../entities/repository-card'
import { RepoCardList } from '../../../entities/repo-card-list'

export const PinnedItems = () => {
  const { login } = useParams()

  const { data, loading } = getUserPinnedItems(login as string)

  return (
    <RepoCardList loading={loading}>
      {data?.map((repo) => (
        <RepositoryCard repository={repo} key={repo.id} />
      ))}
    </RepoCardList>
  )
}
