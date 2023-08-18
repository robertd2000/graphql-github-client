import { useMutation } from '@apollo/client'
import { USER_CARD } from '../../../widgets/user-sider/api/query'
import { SEARCH_QUERY } from '../../../widgets/search/api/query'
import { FOLLOW_ORG, UNFOLLOW_ORG } from './query'

export const followOrgMutation = () => {
  const [followOrg, { loading: followOrgLoading }] = useMutation(FOLLOW_ORG, {
    // refetchQueries: [USER_CARD, SEARCH_QUERY],
  })

  return { followOrg, followOrgLoading }
}

export const unfollowOrgMutation = () => {
  const [unfollowOrg, { loading: unfollowOrgLoading }] = useMutation(
    UNFOLLOW_ORG,
    {
      // refetchQueries: [USER_CARD, SEARCH_QUERY],
    }
  )

  return { unfollowOrg, unfollowOrgLoading }
}
