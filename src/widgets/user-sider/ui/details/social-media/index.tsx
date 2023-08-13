import { CommandItem } from '../../../../../shared/components'
import { socialAccountProviders } from '../../../../../shared/const'
import { useUserSiderContext } from '../../../model'

export const UserSiderSocialMedia = () => {
  const { user } = useUserSiderContext()

  return user?.socialAccounts.edges.map((account) => (
    <CommandItem className="text-lg gap-1 items-center" key={account.node.url}>
      {socialAccountProviders[account?.node.provider]}
      {account?.node.displayName}
    </CommandItem>
  ))
}
