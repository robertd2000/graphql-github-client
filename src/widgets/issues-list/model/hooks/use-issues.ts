import { useParams } from 'react-router'

export const useIssues = () => {
  const { owner, name } = useParams()

  return {
    owner: owner as string,
    name: name as string,
  }
}
