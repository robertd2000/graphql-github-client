import { useQuery } from '@apollo/client'
import { PINNED_ITEMS } from './query'
import { PinnedItemsListData } from '../types'

export const getUserPinnedItems = (login: string) => {
  const { data, loading } = useQuery<PinnedItemsListData>(PINNED_ITEMS, {
    variables: {
      login,
    },
  })

  return { data: data?.user.pinnedItems.nodes, loading }
}
