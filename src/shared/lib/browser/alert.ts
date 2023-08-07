import { toast } from 'react-hot-toast/headless'

const generateToast = (type: 'error' | 'success') => (message: string) => {
  toast?.[type](message)
}

export const error = generateToast('error')
export const success = generateToast('success')
