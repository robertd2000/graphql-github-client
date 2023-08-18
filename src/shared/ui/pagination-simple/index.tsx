import { FC } from 'react'
import { Button } from '../../components/ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { PageInfo } from '../../types'

interface UserRepoPaginationProps {
  pageInfo: PageInfo
  setPage: (value: string) => void
}

export const SimplePagination: FC<UserRepoPaginationProps> = ({
  pageInfo,
  setPage,
}) => {
  const onNextPage = () => {
    setPage(pageInfo?.startCursor)
  }

  const onPreviousPage = () => {
    setPage(pageInfo?.endCursor)
  }

  return (
    <div className="flex flex-wrap items-center text-center mt-2">
      <Button
        className="items-center text-lg"
        disabled={!pageInfo?.hasPreviousPage}
        onClick={onPreviousPage}
      >
        <ChevronLeft /> Previous
      </Button>
      <Button
        className="items-center text-lg"
        disabled={!pageInfo?.hasNextPage}
        onClick={onNextPage}
      >
        Next
        <ChevronRight />
      </Button>
    </div>
  )
}
