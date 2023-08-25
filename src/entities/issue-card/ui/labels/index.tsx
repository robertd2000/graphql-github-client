import { Link } from 'react-router-dom'
import { useIssueCardContext } from '../../model'
import { Badge } from '../../../../shared/components'

export const IssueCardLabels = () => {
  const { issue } = useIssueCardContext()

  return (
    <div className="flex flex-wrap gap-2 text-lg items-center mb-2 mx-6">
      {issue.labels.nodes.map(({ name, id, color }) => (
        <Link to={`/topic/${id}`} key={id}>
          <Badge
            variant={'label'}
            style={{
              backgroundColor: `#${color}`,
            }}
          >
            {name}
          </Badge>
        </Link>
      ))}
    </div>
  )
}
