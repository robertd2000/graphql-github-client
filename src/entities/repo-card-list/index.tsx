import { FC, ReactNode } from 'react'
import { RepoCardListSkeleton } from './repo-card-list-skeleton'

interface RepoCardListProps {
  children: ReactNode
  loading: boolean
}

export const RepoCardList: FC<RepoCardListProps> = ({ children, loading }) => {
  return (
    <div className="my-4">
      <div className="max-w space-y-4 text-gray-500 list-disc list-inside dark:text-gray-400">
        {loading ? <RepoCardListSkeleton /> : <>{children}</>}
      </div>
    </div>
  )
}
