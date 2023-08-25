import { IssueType } from '../../../shared/types/issue'

export interface RepositoryOverviewIssues {
  repository: Repository
}

interface Repository {
  id: string
  issues: Issues
}

interface Issues {
  nodes: IssueType[]
}
