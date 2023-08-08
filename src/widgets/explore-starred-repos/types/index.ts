import { RepositoryType } from '../../../shared/types'

export interface ExploreStarredRepos {
  viewer: Viewer
}

export interface Viewer {
  starredRepositories: StarredRepositories
}

export interface StarredRepositories {
  nodes: RepositoryType[]
}
