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

export enum SearchTypeSwitch {
  /** Returns results matching issues in repositories. */
  Issue = 'issues',
  /** Returns results matching repositories. */
  Repository = 'repositories',
  /** Returns results matching users and organizations on GitHub. */
  User = 'users',
  /** Returns matching discussions in repositories. */
  Discussion = 'discussions',
}
