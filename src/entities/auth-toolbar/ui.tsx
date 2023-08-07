import { Link } from 'react-router-dom'
import { useAuth } from '../auth'
import { OutlinedButton } from '../../shared/ui/buttons/outlined-button'

export const AuthToolbar = () => {
  const { isAuth, logout, viewer } = useAuth()

  return (
    <div>
      {isAuth && (
        <div>
          <Link className="m-4 text-grey" to={`/${viewer?.username}`}>
            {viewer?.username}
          </Link>
          <OutlinedButton onClick={logout}>Logout</OutlinedButton>
        </div>
      )}
      {!isAuth && (
        <OutlinedButton>
          <Link to={'/auth'}>Sign In</Link>
        </OutlinedButton>
      )}
    </div>
  )
}
