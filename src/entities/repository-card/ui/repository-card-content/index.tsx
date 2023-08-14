import { FC, ReactNode } from 'react'
import { CardContent } from '../../../../shared/components'

interface RepositoryCardContentProps {
  children?: ReactNode
}
export const RepositoryCardContent: FC<RepositoryCardContentProps> = ({
  children,
}) => {
  return <CardContent>{children}</CardContent>
}
