import { NumberParam, useQueryParam, withDefault } from 'use-query-params'

export const usePageParam = () => {
  const [page, setPage] = useQueryParam('p', withDefault(NumberParam, 1))

  const setDefaultPage = () => setPage(undefined)
  return {
    page,
    setPage,
    setDefaultPage,
  }
}
