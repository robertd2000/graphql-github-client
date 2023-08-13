import { useMutation } from '@apollo/client'
import { ADD_STAR, REMOVE_STAR } from './query'

export const addStarMutation = () => {
  const [addStar, { loading: addStarLoading }] = useMutation(ADD_STAR, {
    // refetchQueries: [SEARCH_QUERY],
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
      // refetchQueries: [SEARCH_QUERY],
    }
  )

  return {
    removeStar,
    removeStarLoading,
  }
}
