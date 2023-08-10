import { useSearchInput } from '../model'

export const SearchInput = () => {
  const { handleKeyDown, searchValue } = useSearchInput()

  return (
    <input
      className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder="Search..."
      defaultValue={searchValue}
      onKeyDown={handleKeyDown}
    />
  )
}
