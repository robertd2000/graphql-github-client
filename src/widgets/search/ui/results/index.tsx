import { RepoCardList } from '../../../../entities/repo-card-list'
import { RepositoryCard } from '../../../../entities/repository-card/ui'
import { formatNumber } from '../../../../shared/lib/numbers'
import Pagination from '../../../../shared/ui/pagination'
import { getSearchQuery } from '../../api'
import { useSearch } from '../../model'

export const Results = () => {
  const { handlePageChange, page, ...searchConfig } = useSearch()

  const { data, loading } = getSearchQuery({ variables: searchConfig })

  return (
    <div className="p-4">
      <h2>{formatNumber(data?.repositoryCount as number)} results</h2>
      <RepoCardList loading={loading}>
        {data?.nodes?.map((repo) => (
          <RepositoryCard
            repository={repo}
            key={repo.id}
            topics={<RepositoryCard.Topics />}
          />
        ))}
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
