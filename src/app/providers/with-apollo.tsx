import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink,
} from '@apollo/client'
import { API_URL } from '../../shared/env'

const httpLink = createHttpLink({
  uri: API_URL,
})

const client = new ApolloClient({
  // link: authLink.concat(httpLink),
  link: httpLink,
  cache: new InMemoryCache(),
  // connectToDevTools: true,
})

/**
 * @hoc Инициализация подключения apollo для работы с API
 */
const withApollo = (component: Component) => () =>
  <ApolloProvider client={client}>{component()}</ApolloProvider>

export default withApollo
