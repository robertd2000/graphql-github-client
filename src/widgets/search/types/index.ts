import { RepositoryType } from '../../../shared/types'
import { DiscussionType } from '../../../shared/types/discussion'
import { IssueType } from '../../../shared/types/issue'
import { UserType } from '../../../shared/types/user'

export interface SearchConfig {
  variables: {
    query: string
    type: string
    first: number
    after?: string
  }
}

export interface SearchData {
  search: Search
}

export interface Search {
  userCount: number
  repositoryCount: number
  issueCount: number
  discussionCount: number
  nodes: RepositoryType[] | UserType[] | IssueType[] | DiscussionType[]
}

export interface PrimaryLanguage {
  name: string
  color: string
}
