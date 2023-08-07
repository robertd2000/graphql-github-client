import { Toaster } from 'react-hot-toast'
import { Routing } from '../pages'
import { Header } from '../widgets/header'
import { withProviders } from './providers'
import './index.scss'

const App = () => {
  return (
    <div className="">
      <Header />
      <Routing />
      <Toaster />
    </div>
  )
}

export default withProviders(App)
