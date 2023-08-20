import { FC } from 'react'
import { cn } from '../../lib/cn'

interface CounterBadgeProps extends React.HTMLAttributes<HTMLDivElement> {}

export const CounterBadge: FC<CounterBadgeProps> = ({
  children,
  className,
}) => {
  return (
    <div className={cn('bg-gray-200 rounded-2xl px-2 py-1', className)}>
      {children}
    </div>
  )
}
