import { FC } from 'react'
import { formatNumber } from '../../../../../shared/lib/numbers'

interface ResultsTitleProps {
  count: number
}
export const ResultsTitle: FC<ResultsTitleProps> = ({ count }) => {
  return <h2>{formatNumber(count as number)} results</h2>
}
