import { Link } from 'react-router-dom'
import { Badge } from '../../../../shared/components'
import { useRepositoryCardContext } from '../../model'

export const RepositoryTopics = () => {
  const { repository } = useRepositoryCardContext()

  return (
    <div className="flex flex-wrap gap-2 text-lg items-center">
      {repository.repositoryTopics.nodes.map(({ topic }) => (
        <Link to={`/topic/${topic.id}`} key={topic.id}>
          <Badge className="bg-blue-200 text-blue-700 hover:bg-blue-700 hover:text-white align-middle items-center">
            {topic.name}
          </Badge>
        </Link>
      ))}
    </div>
  )
}
