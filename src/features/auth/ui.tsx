import { useAuth } from '../../entities/auth'
import { authGithub } from './firebase'
import { alert } from '../../shared/lib/browser'
import { Github } from 'lucide-react'

export const OAuthForm = () => {
  const { login } = useAuth()

  const authorize = () => {
    authGithub()
      .then((data) => login(data))
      .catch((err: Error) => alert.error(`Authorization error: ${err}`))
  }

  return (
    <button onClick={authorize}>
      <Github />
    </button>
  )
}
