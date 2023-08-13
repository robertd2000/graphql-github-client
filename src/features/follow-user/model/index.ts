import { followUserMutation, unfollowUserMutation } from '../api'

export const useFollowingUser = (
  userId: string,
  viewerHasFollowed: boolean
) => {
  const { followUser, followUserLoading } = followUserMutation()

  const { unfollowUser, unfollowUserLoading } = unfollowUserMutation()

  const onFollowingHandler = () => {
    if (viewerHasFollowed)
      unfollowUser({
        variables: {
          userId,
        },
      })
    else
      followUser({
        variables: {
          userId,
        },
      })
  }

  return {
    onFollowingHandler,
    loading: followUserLoading || unfollowUserLoading,
  }
}
