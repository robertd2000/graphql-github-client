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
    <div className="w-full mt-4">
      <h2 className="font-bold md">Filter by</h2>

      <NavigationMenu className="mt-6 w-full">
        <NavigationMenuList className="flex-col items-start gap-3 w-full">
          {filterCategories.map(({ title, icon, value }) => (
            <NavigationMenuItem>
              <div
                className="flex flex-wrap gap-2 items-center text-gray-700 px-4 py-2"
                style={{
                  backgroundColor:
                    value === typeLiteral ? 'rgb(224 235 249)' : '',
                }}
                onClick={() => handleTypeChange(value)}
              >
                {icon} {title}
              </div>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}
