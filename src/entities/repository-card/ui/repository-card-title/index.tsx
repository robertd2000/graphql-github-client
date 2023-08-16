import { ReactNode } from 'react'
// import { RepositoryCardAvatar } from './repository-card-avatar'
// import { RepositoryCardNameFull } from './repository-card-name-full'
// import { RepositoryCardNameShort } from './repository-card-name-short'

interface RepositoryCardTitleProps {
  children?: ReactNode
}

export const RepositoryCardTitle = ({ children }: RepositoryCardTitleProps) => {
  return (
    <div className="flex gap-2 text-lg break-all max-w-[80%] items-center">
      {children}
    </div>
  )
}

// RepositoryCardTitle.Avatar = RepositoryCardAvatar
// RepositoryCardTitle.NameFull = RepositoryCardNameFull
// RepositoryCardTitle.NameShort = RepositoryCardNameShort
