import { Link } from 'react-router-dom'
import { useRepositoryCardContext } from '../../../model'

export const RepositoryCardNameFull = () => {
  const { repository } = useRepositoryCardContext()

  return (
    <>
      <Link
        to={`/user/${repository.owner.login}`}
        className="text-blue-400 break-words"
      >
        {repository.owner.login}
      </Link>{' '}
      /{' '}
      <Link
        to={`/repository/${repository.id}`}
        className="text-blue-500 font-semibold break-words"
      >
        {repository.name}
      </Link>
    </>
  )
}
