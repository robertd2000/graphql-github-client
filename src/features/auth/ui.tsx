import { useAuth } from '../../entities/auth'
import { authGithub } from './firebase'
import { alert } from '../../shared/lib/browser'
import { GithubIcon } from '../../shared/ui/icons'

export const OAuthForm = () => {
  const { login } = useAuth()

  const authorize = () => {
    authGithub()
      .then((data) => login(data))
      .catch((err: Error) => alert.error(`Authorization error: ${err}`))
  }

  return (
    <div className="max-w-lg mx-auto m-5 content-center">
      <div className="rounded bg-red-100 border-2 border-red-600 py-4 px-4 w-[100%] m-2">
        Sign in with GitHub
      </div>
      <button
        type="button"
        onClick={authorize}
        className="m-2 w-[100%] text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-md text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mr-2 mb-2"
      >
        <GithubIcon />
        <span className="text-center">Sign in with Github</span>
      </button>
    </div>
  )
}
