import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '../../../../../shared/components/ui/avatar'
import { DotSeparator } from '../../../../../shared/ui/dot-separator'
import { useIssueCardContext } from '../../../model'

export const IssueCardAuthor = () => {
  const { issue } = useIssueCardContext()

  return (
    <>
      <div className="flex gap-2 items-center">
        <Avatar className="rounded h-6 w-6">
          <AvatarImage src={issue?.author?.avatarUrl} />
          <AvatarFallback>US</AvatarFallback>
        </Avatar>
        {issue?.author?.login}
      </div>
      <DotSeparator />
    </>
  )
}
