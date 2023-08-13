import { useMutation } from '@apollo/client'
import { FOLLOW_USER, UNFOLLOW_USER } from './query'
import { USER_CARD } from '../../../widgets/user-sider/api/query'
import { SEARCH_QUERY } from '../../../widgets/search/api/query'

export const followUserMutation = () => {
  const [followUser, { loading: followUserLoading }] = useMutation(
    FOLLOW_USER,
    {
      refetchQueries: [USER_CARD, SEARCH_QUERY],
    }
  )

  return { followUser, followUserLoading }
}

export const unfollowUserMutation = () => {
  const [unfollowUser, { loading: unfollowUserLoading }] = useMutation(
    UNFOLLOW_USER,
    {
      refetchQueries: [USER_CARD, SEARCH_QUERY],
    }
  )

  return { unfollowUser, unfollowUserLoading }
}
