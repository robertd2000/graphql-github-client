import { UserCredential } from '../types'

/** @localStorage Учетные данные */
export const CREDENTIAL_KEY = 'GITHUB-CLIENT__CREDENTIAL'

/** @localStorage Получение учетных данных */
export const getCredential = () => {
  return JSON.parse(
    localStorage.getItem(CREDENTIAL_KEY) || ''
  ) as UserCredential
}

/** @localStorage Получение токена доступа */
export const getToken = () => getCredential().accessToken
