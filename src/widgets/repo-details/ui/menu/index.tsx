import { Link } from 'react-router-dom'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '../../../../shared/components/ui/navigation-menu'
import { useRepositoryCardContext } from '../../model'
import { BookOpen, CircleDot } from 'lucide-react'
import { formatNumber } from '../../../../shared/lib/numbers'

export const RepoMenu = () => {
  const { repository } = useRepositoryCardContext()

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link to="">
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <div className="flex flex-wrap gap-2 items-center">
                <BookOpen className="text-gray-500" /> Overview
              </div>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link to="issues">
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <div className="flex flex-wrap gap-2 items-center">
                <CircleDot className="text-gray-500" /> Issues{' '}
                <div className="text-gray-600 bg-gray-100 rounded-xl px-2 py-1">
                  {formatNumber(repository?.issues?.totalCount)}
                </div>
              </div>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
