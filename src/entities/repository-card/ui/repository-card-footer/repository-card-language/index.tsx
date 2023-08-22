import { LanguageItem } from '../../../../../shared/ui/language'
import { useRepositoryCardContext } from '../../../model'

export const RepositoryCardLanguage = () => {
  const { repository } = useRepositoryCardContext()

  return repository.primaryLanguage?.name ? (
    <LanguageItem
      name={repository.primaryLanguage?.name}
      color={repository.primaryLanguage?.color}
    />
  ) : null
}
