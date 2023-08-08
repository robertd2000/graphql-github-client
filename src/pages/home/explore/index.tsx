import { Link } from 'react-router-dom'
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../../../shared/components'

export const Explore = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <img
            src="https://github.githubassets.com/images/modules/explore/social.jpg"
            alt=""
          />
        </CardTitle>
        <CardDescription>
          <Link to={'/search'}>
            <button className="bg-green-500 py-1 px-4 rounded text-white mt-4 font-bold">
              Explore
            </button>
          </Link>
        </CardDescription>
      </CardHeader>
    </Card>
  )
}
