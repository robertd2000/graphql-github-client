import { Link } from 'react-router-dom'
import { useRepositoryCardContext } from '../../../model'

export const RepositoryCardNameFull = () => {
  const { repository } = useRepositoryCardContext()

  // const ownerLink =
  //   repository.owner.__typename === 'Organization' ? `org` : `user`

  return (
    <Link
      to={`/repository/${repository.owner.login}/${repository.name}`}
      className="text-blue-400 break-words"
    >
      {repository.owner.login} / {repository.name}
    </Link>
  )
}

// <>
//   <Link
//     to={`/${ownerLink}/${repository.owner.login}`}
//     className="text-blue-400 break-words"
//   >
//     {repository.owner.login}
//   </Link>{' '}
//   /{' '}
//   <Link
//     to={`/${repository.owner.login}/${repository.name}`}
//     className="text-blue-500 font-semibold break-words"
//   >
//     {repository.name}
//   </Link>
// </>
