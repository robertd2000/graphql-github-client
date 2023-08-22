import { FC } from 'react'

interface LanguageProps {
  name: string
  color: string
}

export const LanguageItem: FC<LanguageProps> = ({ name, color }) => {
  return (
    <div className="flex gap-2 mr-2 items-center">
      <div
        className={`w-3 h-3 rounded-full `}
        style={{
          backgroundColor: color,
        }}
      />{' '}
      {name}
    </div>
  )
}
