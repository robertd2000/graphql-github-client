import { IssuesFilters } from './filters'
import { IssuesList } from './list'

export const Issues = ({ children }: PropsWithChildren) => {
  return <div className="mb-2">{children}</div>
}

Issues.List = IssuesList
Issues.Filters = IssuesFilters
