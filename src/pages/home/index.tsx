import { Topics } from '../../widgets/topics/ui'
import { Viewer } from '../../widgets/viewer'
import { Explore } from './explore'

const HomePage = () => {
  return (
    <div className="grid grid-flow-row auto-rows-max grid-cols-4 gap-4 items-center mx-auto max-w-screen-xl mt-4">
      <div className="col-span-1">
        <Viewer />
      </div>
      <div className="col-span-2">
        <Explore />
      </div>
      <div className="col-span-1">
        <Topics />
      </div>
    </div>
  )
}

export default HomePage
