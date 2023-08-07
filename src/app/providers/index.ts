import compose from 'compose-function'
import withRouter from './with-router'
import withApollo from './with-apollo'

export const withProviders = compose(withRouter, withApollo)
