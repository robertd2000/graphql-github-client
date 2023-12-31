import { CheckCircle2, CircleDot } from 'lucide-react'
import { CardTitle } from '../../../../shared/components'
import { useIssueCardContext } from '../../model'
import { Link } from 'react-router-dom'
import { FC, ReactNode } from 'react'

interface IssueCardTitleProps {
  children?: ReactNode
}

export const IssueCardTitle: FC<IssueCardTitleProps> = ({ children }) => {
  const { issue } = useIssueCardContext()

  return (
    <>
      {children}
      <CardTitle className="flex flex-wrap gap-2 items-center">
        {issue.closed ? (
          <CheckCircle2 className="text-purple-600" />
        ) : (
          <CircleDot className="text-green-600 h-6 w-6 items-center" />
        )}{' '}
        <Link to={``} className="text-blue-500 items-center">
          {' '}
          {issue.title}
        </Link>
      </CardTitle>
    </>
  )
}
