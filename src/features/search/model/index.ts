import { KeyboardEventHandler } from 'react'
import { StringParam, useQueryParams } from 'use-query-params'
import { useNavigate, useLocation } from 'react-router-dom'
import qs from 'query-string'

const SEARCH_URL = '/search'

export const useSearchInput = () => {
  const [query] = useQueryParams({
    q: StringParam,
    type: StringParam,
    s: StringParam,
    o: StringParam,
  })
  const location = useLocation()
  const history = useNavigate()

  const handleKeyDown: KeyboardEventHandler<HTMLInputElement> = ({
    key,
    currentTarget,
  }) => {
    if (key === 'Enter' && currentTarget.value) {
      const q = currentTarget.value
      history(`${SEARCH_URL}?${qs.stringify({ ...query, q })}`)
    }
  }

  const searchValue = location.pathname === SEARCH_URL ? query.q ?? '' : ''

  return { handleKeyDown, searchValue }
}
