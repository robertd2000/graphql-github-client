import { FC } from 'react'
import { cn } from '../../lib/cn'

interface DotSeparatorProps {
  className?: string
}

export const DotSeparator: FC<DotSeparatorProps> = ({ className }) => {
  return (
    <div className={cn('w-1 h-1 rounded-full bg-gray-700 m-2', className)} />
  )
}
