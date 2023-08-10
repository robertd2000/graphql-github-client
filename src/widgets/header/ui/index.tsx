import { Link } from 'react-router-dom'
import { Github } from 'lucide-react'
import { SearchInput } from '../../../features/search'
import { useAuth } from '../../../entities/auth'
import { AuthToolbar } from '../../../entities/auth-toolbar'
import { MenuIcon } from '../../../shared/ui/icons'

export const Header = () => {
  const { isAuth } = useAuth()

  return (
    <header>
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <div className="flex flex-wrap justify-start items-center gap-4">
            <Link to={'/'} className="flex items-center gap-2">
              <Github className="bg-black rounded text-white" />
              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                Github GraphQL
              </span>
            </Link>
            <div
              className="hidden justify-start w-full lg:flex lg:w-auto lg:order-1"
              id="mobile-menu-2"
            >
              <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <li>{isAuth && <SearchInput />}</li>
              </ul>
            </div>
          </div>

          <div className="flex items-center lg:order-2">
            <AuthToolbar />
            <MenuIcon />
          </div>
        </div>
      </nav>
    </header>
  )
}
