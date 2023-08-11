import { useRepositoryCardContext } from '../../../model'
import moment from 'moment'

export const RepositoryCardUpdated = () => {
  const { repository } = useRepositoryCardContext()

  return <>Updated on {moment(repository.updatedAt).fromNow()}</>
}
