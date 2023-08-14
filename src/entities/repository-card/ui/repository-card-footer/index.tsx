import { FC, ReactNode } from 'react'
import { CardFooter } from '../../../../shared/components'
import { RepositoryCardLanguage } from './repository-card-language'

export interface RepositoryCardFooterProps {
  children: ReactNode
}
export const RepositoryCardFooter: FC<RepositoryCardFooterProps> = ({
  children,
}) => {
  return (
    <CardFooter>
      <RepositoryCardLanguage />
      {children}
    </CardFooter>
  )
}
