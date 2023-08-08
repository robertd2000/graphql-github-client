import { FC } from 'react'
import { Link } from 'react-router-dom'
import { RepositoryTopicNode } from '../../../types'
import { Badge } from '../../../components'

interface RepositoryTopicsProps {
  repositoryTopics: RepositoryTopicNode[]
}

export const RepositoryTopics: FC<RepositoryTopicsProps> = ({
  repositoryTopics,
}) => {
  return (
    <div className="flex flex-wrap gap-2 text-lg">
      {repositoryTopics.map(({ topic }) => (
        <Link to={`/topic/${topic.id}`}>
          <Badge className="bg-blue-200 text-blue-700 hover:bg-blue-700 hover:text-white align-middle items-center">
            {topic.name}
          </Badge>
        </Link>
      ))}
    </div>
  )
}
