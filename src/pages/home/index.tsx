import { ViewerCard } from '../../entities/viewer-card'
import { Topics } from '../../widgets/topics/ui'

const HomePage = () => {
  return (
    <div className="grid grid-cols-4 gap-4 items-center mx-auto max-w-screen-xl mt-4">
      <div className="col-span-1">
        <ViewerCard />
      </div>
      <div className="col-span-2">Home</div>
      <div className="col-span-1">
        <Topics />
      </div>
    </div>
  )
}

export default HomePage
