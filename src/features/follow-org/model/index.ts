import { followOrgMutation, unfollowOrgMutation } from '../api'

export const useFollowingOrg = (
  organizationId: string,
  viewerHasFollowed: boolean
) => {
  const { followOrg, followOrgLoading } = followOrgMutation()

  const { unfollowOrg, unfollowOrgLoading } = unfollowOrgMutation()

  const onFollowingHandler = () => {
    if (viewerHasFollowed)
      unfollowOrg({
        variables: {
          organizationId,
        },
      })
    else
      followOrg({
        variables: {
          organizationId,
        },
      })
  }

  return {
    onFollowingHandler,
    loading: followOrgLoading || unfollowOrgLoading,
  }
}
