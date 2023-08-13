import { Link, Mail, MapPin } from 'lucide-react'
import {
  Command,
  CommandItem,
  CommandList,
} from '../../../../shared/components'
import { useUserSiderContext } from '../../model'
import { UserSiderSocialMedia } from './social-media'

export const UserSiderDetails = () => {
  const { user } = useUserSiderContext()

  return (
    <Command>
      <CommandList>
        {user?.location ? (
          <CommandItem className="text-lg gap-1 items-center">
            <MapPin className="text-gray-500" /> {user?.location}
          </CommandItem>
        ) : null}
        {user?.email ? (
          <CommandItem className="text-lg gap-1 items-center">
            <Mail className="text-gray-500" /> {user?.email}
          </CommandItem>
        ) : null}

        {user?.url ? (
          <CommandItem className="text-lg gap-1 items-center">
            <Link className="text-gray-500" />{' '}
            <a href={user?.url} target="_blank">
              {user?.url}
            </a>
          </CommandItem>
        ) : null}

        <UserSiderSocialMedia />
      </CommandList>
    </Command>
  )
}
