import { useMutation } from '@apollo/client'
import { ADD_STAR, REMOVE_STAR } from './query'
import { EXPLORE_STARRED_REPOS } from '../../../widgets/explore-starred-repos/api/query'

export const addStarMutation = () => {
  const [addStar, { loading: addStarLoading }] = useMutation(ADD_STAR, {
    refetchQueries: [EXPLORE_STARRED_REPOS],
  })

  return {
    addStar,
    addStarLoading,
  }
}

export const removeStarMutation = () => {
  const [removeStar, { loading: removeStarLoading }] = useMutation(
    REMOVE_STAR,
    {
      refetchQueries: [EXPLORE_STARRED_REPOS],
    }
  )

  return {
    removeStar,
    removeStarLoading,
  }
}
