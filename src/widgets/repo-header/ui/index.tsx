import { Link, useParams } from 'react-router-dom'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '../../../shared/components/ui/navigation-menu'
import { BookMinus, BookOpen, Star } from 'lucide-react'
import { getRepoInfo } from '../api'

export const RepoHeader = () => {
  const { login } = useParams()
  const { data } = getRepoInfo(login as string)

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
          <Link to="repositories">
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <div className="flex flex-wrap gap-2 items-center">
                <BookMinus className="text-gray-500" /> Repositories{' '}
                <div className="text-gray-600 bg-gray-100 rounded-xl px-2 py-1">
                  {data?.repositories.totalCount}
                </div>
              </div>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link to="stars">
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <div className="flex flex-wrap gap-2 items-center">
                <Star className="text-gray-500" /> Stars{' '}
                <div className="text-gray-600 bg-gray-100 rounded-xl px-2 py-1">
                  {data?.starredRepositories.totalCount}
                </div>
              </div>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
