import { Issues } from '../../../widgets/issues-list'

export const RepoIssuesPage = () => {
  return (
    <Issues>
      <Issues.Filters />
      <Issues.List />
    </Issues>
  )
}
