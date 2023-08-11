import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from '../../../../shared/components/ui/navigation-menu'
import { filterCategories } from '../../consts/filter'
import { useSearch } from '../../model'

export const Filters = () => {
  const { handleTypeChange, typeLiteral } = useSearch()

  return (
    <>
      <h2 className="font-bold md">Filter by</h2>

      <NavigationMenu className="mt-10 ">
        <NavigationMenuList className="flex-col items-start gap-3">
          {filterCategories.map(({ title, icon, value }) => (
            <NavigationMenuItem>
              <div
                className="flex flex-wrap gap-2 items-center text-gray-700"
                onClick={() => handleTypeChange(value)}
              >
                {icon} {title}
              </div>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </>
  )
}
