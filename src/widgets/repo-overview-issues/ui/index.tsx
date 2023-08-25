import { useParams } from 'react-router'
import { getRepoOverviewIssues } from '../api'
import { IssueCard } from '../../../entities/issue-card'
import { RepoCardList } from '../../../entities/repo-card-list'
import { Link } from 'react-router-dom'

export const RepoOverviewIssues = () => {
  const { owner, name } = useParams()

  const { data, loading } = getRepoOverviewIssues({
    name: name as string,
    owner: owner as string,
  })

  return (
    <>
      <h2 className="font-semibold text-xl">Repo issues overview</h2>
      <RepoCardList loading={loading}>
        {data?.issues.nodes.map((issue) => (
          <IssueCard issue={issue} key={issue.id} />
        ))}
      </RepoCardList>
      <Link
        to={'issues'}
        className="text-blue-400 hover:underline float-right my-2"
      >
        Explore all
      </Link>
    </>
  )
}
