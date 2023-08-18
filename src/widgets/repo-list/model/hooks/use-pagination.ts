import { StringParam, useQueryParam, withDefault } from 'use-query-params'

export const usePageParam = () => {
  const [page, setPage] = useQueryParam(
    'p',
    withDefault(StringParam, 'Y3Vyc29yOjEwMA==')
  )

  const setDefaultPage = () => setPage(undefined)
  return {
    page,
    setPage,
    setDefaultPage,
  }
}
