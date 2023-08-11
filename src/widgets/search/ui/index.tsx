import { Filters } from './filters'
import { Results } from './results'

export const Search = ({ children }: PropsWithChildren) => (
  <div className="search">{children}</div>
)

Search.Results = Results
Search.Filters = Filters
