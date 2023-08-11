import { useRepositoryCardContext } from '../../../model'

export const RepositoryCardLanguage = () => {
  const { repository } = useRepositoryCardContext()

  return repository.primaryLanguage?.name ? (
    <div className="flex gap-2 mr-2 items-center">
      <div
        className={`w-3 h-3 rounded-full `}
        style={{
          backgroundColor: repository.primaryLanguage?.color,
        }}
      />{' '}
      {repository.primaryLanguage?.name}
    </div>
  ) : null
}
