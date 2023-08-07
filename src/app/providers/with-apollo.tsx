import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink,
} from '@apollo/client'
import { API_URL } from '../../shared/env'
import { setContext } from '@apollo/client/link/context'
import { getToken } from '../../entities/auth'

const httpLink = createHttpLink({
  uri: API_URL,
})

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = getToken()
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      Authorization: token ? `Bearer ${token}` : '',
    },
  }
})

const client = new ApolloClient({
  // link: authLink.concat(httpLink),
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
  // connectToDevTools: true,
})

/**
 * @hoc Инициализация подключения apollo для работы с API
 */
const withApollo = (component: Component) => () =>
  <ApolloProvider client={client}>{component()}</ApolloProvider>

export default withApollo
