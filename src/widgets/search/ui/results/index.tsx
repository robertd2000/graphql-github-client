import { DiscussionCard } from '../../../../entities/discussion-card'
import { IssueCard } from '../../../../entities/issue-card'
import { RepoCardList } from '../../../../entities/repo-card-list'
import { RepositoryCard } from '../../../../entities/repository-card'
import { UserCard } from '../../../../entities/user-card'
import { StarRepoButton } from '../../../../features/star-repo'
import { RepositoryType, SearchTypeSwitch } from '../../../../shared/types'
import { DiscussionType } from '../../../../shared/types/discussion'
import { IssueType } from '../../../../shared/types/issue'
import { UserType } from '../../../../shared/types/user'
import { DotSeparator } from '../../../../shared/ui/dot-separator'
import Pagination from '../../../../shared/ui/pagination'
import { RepositoryTypeBadge } from '../../../../shared/ui/repo-type'
import { getSearchQuery } from '../../api'
import { useSearch } from '../../model'
import { ResultsTitle } from './results-title'
import { ResultToolbar } from './results-toolbar'

export const Results = () => {
  const { handlePageChange, page, searchType, ...searchConfig } = useSearch()

  const { data, loading } = getSearchQuery({ variables: searchConfig })

  return (
    <div className="p-4">
      <div className="flex flex-wrap justify-between items-center">
        <ResultsTitle
          count={
            (data?.repositoryCount ||
              data?.userCount ||
              data?.discussionCount ||
              data?.issueCount) as number
          }
        />
        <ResultToolbar />
      </div>

      <RepoCardList loading={loading}>
        {data?.nodes?.map((data) => {
          switch (searchType) {
            case SearchTypeSwitch.Repository:
              return (
                <RepositoryCard
                  repository={data as RepositoryType}
                  key={data.id}
                  repoType={
                    <RepositoryTypeBadge
                      isPrivate={(data as RepositoryType).isPrivate}
                    />
                  }
                  action={
                    <StarRepoButton
                      id={data.id}
                      viewerHasStarred={
                        (data as RepositoryType).viewerHasStarred
                      }
                    />
                  }
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
                />
              )
            case SearchTypeSwitch.User:
              return <UserCard user={data as UserType} key={data.id} />
            case SearchTypeSwitch.Issue:
              return <IssueCard issue={data as IssueType} key={data.id} />
            case SearchTypeSwitch.Discussion:
              return (
                <DiscussionCard
                  discussion={data as DiscussionType}
                  key={data.id}
                />
              )
            default:
              return <></>
          }
        })}
      </RepoCardList>
      <Pagination
        totalCount={1000 as number}
        currentPage={page}
        pageSize={10}
        onPageChange={handlePageChange}
      />
    </div>
  )
}
