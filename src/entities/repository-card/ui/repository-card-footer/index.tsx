import { FC, ReactNode } from 'react'
import { CardFooter } from '../../../../shared/components'
import { RepositoryCardLanguage } from './repository-card-language'
import { RepositoryCardUpdated } from './repository-card-updated'
import { DotSeparator } from '../../../../shared/ui/dot-separator'

export interface RepositoryCardFooterProps {
  children: ReactNode
}
export const RepositoryCardFooter: FC<RepositoryCardFooterProps> = ({
  children,
}) => {
  return (
    <CardFooter>
      <RepositoryCardLanguage />
      <DotSeparator />
      {children}
      <DotSeparator />
      <RepositoryCardUpdated />
    </CardFooter>
  )
}
