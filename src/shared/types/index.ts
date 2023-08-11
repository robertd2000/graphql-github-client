export * from './repo'

export enum SearchType {
  /** Returns results matching issues in repositories. */
  Issue = 'ISSUE',
  /** Returns results matching repositories. */
  Repository = 'REPOSITORY',
  /** Returns results matching users and organizations on GitHub. */
  User = 'USER',
  /** Returns matching discussions in repositories. */
  Discussion = 'DISCUSSION',
}
