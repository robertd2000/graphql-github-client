import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '../../../../../shared/components/ui/avatar'
import { useDiscussionCardContext } from '../../../model'

export const DiscussionCardAuthor = () => {
  const { discussion } = useDiscussionCardContext()

  return (
    <>
      <div className="flex gap-2 items-center text-gray-500 font-bold text-sm">
        <Avatar className="h-6 w-6">
          <AvatarImage src={discussion?.author?.avatarUrl} />
          <AvatarFallback>US</AvatarFallback>
        </Avatar>
        {discussion?.author?.login}
      </div>
    </>
  )
}
