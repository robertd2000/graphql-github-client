import { ScrollArea } from '../../shared/components'
import { Search } from '../../widgets/search'
import { Topics } from '../../widgets/topics'

export const SearchPage = () => {
  return (
    <div className="grid grid-flow-row-dense auto-rows-max grid-cols-4 gap-4 mx-auto max-w-screen-xl mt-4">
      <div className="col-span-1">
        <ScrollArea className="h-[90vh] w-full">Filters</ScrollArea>
      </div>
      <div className="col-span-3">
        <ScrollArea className="h-[90vh] w-full">
          <div className="grid grid-flow-row-dense auto-rows-max grid-cols-3 gap-4 mx-auto max-w-screen-xl">
            <div className="col-span-2">
              <Search.Results />
            </div>
            <div className="col-span-1 mt-14">
              <Topics />
            </div>
          </div>
        </ScrollArea>
      </div>
    </div>
  )
}
