import { getExploreStarredRepos } from '../api'
import { RepoCardList } from '../../../entities/repo-card-list'
import { RepositoryCard } from '../../../entities/repository-card/ui'

export const ExploreStarredRepos = () => {
  const { data, loading } = getExploreStarredRepos()

  return (
    <RepoCardList loading={loading}>
      {data?.map((repo) => (
        <RepositoryCard
          repository={repo}
          key={repo.id}
          topics={<RepositoryCard.Topics />}
        />
      ))}
    </RepoCardList>
  )
}
