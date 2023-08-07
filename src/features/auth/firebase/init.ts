import { initializeApp } from 'firebase/app'
import { firebaseConfig } from '../../../shared/env'
import 'firebase/auth'

const app = initializeApp(firebaseConfig)

export default app
