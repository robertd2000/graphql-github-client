import { FC } from 'react'
import { Link } from 'react-router-dom'
import { getNames } from '../../lib/names'

interface TopicNamesProps {
  nameWithOwner: string
  repoId: string
  ownerId: string
}
export const TopicNames: FC<TopicNamesProps> = ({
  nameWithOwner,
  repoId,
  ownerId,
}) => {
  const { repoName, ownerName } = getNames(nameWithOwner)

  return (
    <div className=" flex items-center">
      <Link
        to={`/repository/${repoId}`}
        className="text-blue-500 hover:underline"
      >
        {repoName}
      </Link>
      /
      <Link to={`/user/${ownerId}`} className="text-blue-500 hover:underline">
        {ownerName}
      </Link>
    </div>
  )
}
