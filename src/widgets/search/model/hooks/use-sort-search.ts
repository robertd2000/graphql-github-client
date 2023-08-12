import { StringParam, useQueryParam, withDefault } from 'use-query-params'
import { SearchTypeStr, useSearchTypeParam } from '.'

type SortOrder = 'asc' | 'desc'
type SortParams = {
  /** Направление сортировки */
  o: SortOrder | undefined
  /** Сортируемое поле */
  s: string | undefined
}
type SortVariant = SortParams & {
  label: string
}

/**
 * Фабрика по генерации вариантов сортировки
 * @sort
 */
export const createSortVariant = (
  field: string,
  label = field
): SortVariant[] => {
  return [
    { label: `Most ${label}`, o: 'desc', s: field },
    { label: `Least ${label}`, o: 'asc', s: field },
  ]
}

/**
 * Вариант сортировки по-умолчанию
 * @sort
 */
export const defaultSortVariant: SortVariant = {
  label: 'Best Match',
  o: undefined,
  s: undefined,
}

export const sortVariantsTotal: Record<SearchTypeStr, SortVariant[]> = {
  repositories: [
    defaultSortVariant,
    ...createSortVariant('stars'),
    ...createSortVariant('forks'),
    ...createSortVariant('updated', 'recently updated'),
  ],
  users: [
    defaultSortVariant,
    ...createSortVariant('followers'),
    ...createSortVariant('joined', 'recently joined'),
    ...createSortVariant('repositories'),
  ],
  issues: [defaultSortVariant],
  discussions: [defaultSortVariant],
}

export const useSearchSortParams = () => {
  const [sortOrder, setSortOrder] = useQueryParam(
    'o',
    withDefault(StringParam, undefined)
  )
  const [sortField, setSortField] = useQueryParam(
    's',
    withDefault(StringParam, undefined)
  )
  const { searchType } = useSearchTypeParam()
  const availableVariants = sortVariantsTotal[searchType as SearchTypeStr] || []
  const currentVariant = availableVariants.find(
    ({ o, s }) => o === sortOrder && s === sortField
  )

  const setSort = ({ s, o }: SortParams) => {
    setSortField(s)
    setSortOrder(o)
  }

  const setDefaultSort = () => setSort(defaultSortVariant)

  return {
    sortOrder,
    sortField,
    availableVariants,
    currentVariant,
    setSort,
    setDefaultSort,
  }
}
