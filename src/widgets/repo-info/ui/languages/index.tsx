import { LanguageItem } from '../../../../shared/ui/language'
import { useRepositoryInfoContext } from '../../model'
import { RepoLanguagesGraph } from './graph'

export const RepoLanguages = () => {
  const { repository } = useRepositoryInfoContext()

  return (
    <div className="text-lg flex flex-wrap flex-col gap-3 mb-6">
      <h2 className="text-xl font-semibold">Languages</h2>
      <RepoLanguagesGraph />
      <div className="flex flex-wrap gap-4 text-lg items-center">
        {repository?.languages.edges.map(({ size, node }) => (
          <div key={node.id} className="flex flex-wrap gap-1">
            <LanguageItem name={node?.name} color={node?.color} />
            <div>
              {((size / repository.languages.totalSize) * 100)?.toFixed(2)} %
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
