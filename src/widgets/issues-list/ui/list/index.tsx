import { IssueCard } from '../../../../entities/issue-card'
import { RepoCardList } from '../../../../entities/repo-card-list'
import { getIssuesList } from '../../api'
import { useIssues } from '../../model'

export const IssuesList = () => {
  const { ...config } = useIssues()
  const { data, loading } = getIssuesList(config)

  return (
    <RepoCardList loading={loading}>
      {data?.issues.nodes.map((issue) => (
        <IssueCard issue={issue} key={issue.id} labels={<IssueCard.Labels />} />
      ))}
    </RepoCardList>
  )
}
