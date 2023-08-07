import { useQuery } from '@apollo/client'
import { TOPICS } from './query'
import { TopicData } from '../types'

export const getTopics = () => {
  const { data, loading } = useQuery<TopicData>(TOPICS)

  return {
    data: data?.search.nodes,
    loading,
  }
}
