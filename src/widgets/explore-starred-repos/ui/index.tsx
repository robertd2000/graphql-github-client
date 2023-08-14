import { getExploreStarredRepos } from '../api'
import { RepoCardList } from '../../../entities/repo-card-list'
import { RepositoryCard } from '../../../entities/repository-card'
import { StarRepoButton } from '../../../features/star-repo'
import { DotSeparator } from '../../../shared/ui/dot-separator'

export const ExploreStarredRepos = () => {
  const { data, loading } = getExploreStarredRepos()

  return (
    <RepoCardList loading={loading}>
      {data?.map((repo) => (
        <RepositoryCard
          repository={repo}
          key={repo.id}
          content={
            <RepositoryCard.Content>
              <RepositoryCard.Description />
              <RepositoryCard.Topics />
            </RepositoryCard.Content>
          }
          footer={
            <>
              <DotSeparator />
              <RepositoryCard.StargazersCount />
              <DotSeparator />
              <RepositoryCard.Updated />
            </>
          }
          action={
            <StarRepoButton
              id={repo.id}
              viewerHasStarred={repo.viewerHasStarred}
            />
          }
        />
      ))}
    </RepoCardList>
  )
}
