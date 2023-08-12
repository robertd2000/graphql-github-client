import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '../../../../../../shared/components'
import { useSearch } from '../../../../model'

export const ResultSort = () => {
  const { handleSortChange } = useSearch()
  return (
    <Select
      onValueChange={(value) => {
        const [o, s] = value.split('/')
        handleSortChange({ o: o as 'desc' | 'asc', s })
      }}
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Best match" />
      </SelectTrigger>
      <SelectContent className="bg-white">
        <SelectGroup>
          <SelectLabel>Sort By</SelectLabel>
          <SelectItem value="desc/">Best match</SelectItem>
          <SelectItem value="desc/score">Highest score</SelectItem>
          <SelectItem value="asc/score">Lowest score</SelectItem>
          <SelectItem value="desc/comments">Most commented</SelectItem>
          <SelectItem value="asc/comments">Least commented</SelectItem>
          <SelectItem value="desc/created">Newest</SelectItem>
          <SelectItem value="asc/created">Oldest</SelectItem>
          <SelectItem value="desc/updated">Recently updated</SelectItem>
          <SelectItem value="asc/updated">Least recently updated</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
