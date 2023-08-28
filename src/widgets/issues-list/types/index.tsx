import { IssueType } from '../../../shared/types/issue'

export interface RepositoryIssues {
  repository: Repository
}

interface Repository {
  id: string
  issues: Issues
  pageInfo: {
    endCursor: string
    startCursor: string
  }
}

interface Issues {
  nodes: IssueType[]
}
