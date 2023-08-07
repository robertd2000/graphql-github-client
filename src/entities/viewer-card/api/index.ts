import { useQuery } from '@apollo/client'
import { ViewerData } from '../types'
import { VIEWER } from './query'

export const getViewer = () => {
  const { data, loading } = useQuery<ViewerData>(VIEWER)

  return {
    data: data?.viewer,
    loading,
  }
}
