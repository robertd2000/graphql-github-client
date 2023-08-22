import { useRepositoryInfoContext } from '../../../model'

export const RepoLanguagesGraph = () => {
  const { repository } = useRepositoryInfoContext()

  return (
    <div className="flex flex-wrap gap-0 rounded w-full h-3 mt-2 mb-1">
      {repository?.languages.edges.map(({ size, node }, index) => (
        <div
          key={node.id}
          className="flex flex-wrap gap-1"
          style={{
            backgroundColor: node.color,
            width: `${((size / repository.languages.totalSize) * 100)?.toFixed(
              2
            )}%`,
            borderTopLeftRadius: index === 0 ? '1rem' : '',
            borderBottomLeftRadius: index === 0 ? '1rem' : '',
            borderTopRightRadius:
              index === repository?.languages.edges.length - 1 ? '1rem' : '',
            borderBottomRightRadius:
              index === repository?.languages.edges.length - 1 ? '1rem' : '',
          }}
          //|| index === repository?.languages.edges.length - 1
        ></div>
      ))}
    </div>
  )
}
