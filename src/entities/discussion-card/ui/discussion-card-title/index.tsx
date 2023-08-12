import { Link } from 'react-router-dom'
import { CardDescription, CardTitle } from '../../../../shared/components'
import { useDiscussionCardContext } from '../../model'

export const DiscussionCardTitle = () => {
  const { discussion } = useDiscussionCardContext()

  return (
    <>
      <CardDescription>
        {discussion.repository?.owner?.login} / {discussion.repository?.name}
      </CardDescription>
      <CardTitle className="flex flex-wrap gap-2 items-center">
        <Link to={``} className="text-blue-500 items-center">
          {' '}
          {discussion.title}
        </Link>
      </CardTitle>
    </>
  )
}
