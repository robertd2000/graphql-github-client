import { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { QueryParamProvider } from 'use-query-params'
import { ReactRouter6Adapter } from 'use-query-params/adapters/react-router-6'
import { Spinner } from '../../shared/ui'

const withRouter = (component: Component) => () => {
  return (
    <BrowserRouter basename="/graphql-github-client/">
      <Suspense fallback={<Spinner />}>
        <QueryParamProvider adapter={ReactRouter6Adapter}>
          {component()}
        </QueryParamProvider>
      </Suspense>
    </BrowserRouter>
  )
}

export default withRouter
