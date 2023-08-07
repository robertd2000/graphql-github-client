import { GithubAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'

/**
 * Авторизация Github OAuth через firebase
 * @remark Стоит использовать только на странице Авторизации!!!
 */
export const authGithub = async () => {
  const auth = getAuth()
  const provider = new GithubAuthProvider()
  provider.addScope('repo')
  provider.addScope('user:follow')
  provider.addScope('read:org')

  return signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GithubAuthProvider.credentialFromResult(result)
      const accessToken = credential?.accessToken || ''

      const user = result.user
      return {
        accessToken,
        username: user.displayName || '',
      }
    })
    .catch((error) => {
      const email = error.customData.email
      const credential = GithubAuthProvider.credentialFromError(error)

      return {
        username: email || '',
        accessToken: credential?.accessToken || '',
      }
    })
}
