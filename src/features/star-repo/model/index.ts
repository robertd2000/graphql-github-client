// import { useState } from 'react'
import { addStarMutation, removeStarMutation } from '../api'

export const useStarRepo = (starrableId: string, viewerHasStarred: boolean) => {
  const { addStar, addStarLoading } = addStarMutation()

  const { removeStar, removeStarLoading } = removeStarMutation()

  const onStarHandler = () => {
    if (viewerHasStarred)
      removeStar({
        variables: {
          starrableId,
        },
      })
    else
      addStar({
        variables: {
          starrableId,
        },
      })
  }

  return {
    onStarHandler,
    loading: addStarLoading || removeStarLoading,
  }
}
