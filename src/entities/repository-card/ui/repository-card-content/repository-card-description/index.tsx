import { useRepositoryCardContext } from '../../../model'

export const RepositoryCardDescription = () => {
  const { repository } = useRepositoryCardContext()

  return (
    <p dangerouslySetInnerHTML={{ __html: repository.descriptionHTML }}></p>
  )
}
