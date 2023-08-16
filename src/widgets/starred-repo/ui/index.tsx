import { useParams } from 'react-router'
import { getStarredRepos } from '../api'
import { RepoCardList } from '../../../entities/repo-card-list'
import { RepositoryCard } from '../../../entities/repository-card'
import { RepositoryTypeBadge } from '../../../shared/ui/repo-type'
import { RepositoryType } from '../../../shared/types'
import { DotSeparator } from '../../../shared/ui/dot-separator'
import { StarRepoButton } from '../../../features/star-repo'

export const StarredRepos = () => {
  const { login } = useParams()

  const { data, loading } = getStarredRepos(login as string)
  return (
    <RepoCardList loading={loading}>
      {data?.map((repo) => (
        <RepositoryCard
          repository={repo}
          key={repo.id}
          title={
            <RepositoryCard.Title>
              <RepositoryCard.NameFull />
              <RepositoryTypeBadge
                isPrivate={(repo as RepositoryType).isPrivate}
              />
            </RepositoryCard.Title>
          }
          content={
            <RepositoryCard.Content>
              <RepositoryCard.Description />
              <RepositoryCard.Topics />
            </RepositoryCard.Content>
          }
          footer={
            <>
              {repo.primaryLanguage && <DotSeparator />}
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
