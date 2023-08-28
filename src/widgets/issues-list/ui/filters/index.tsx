import { CheckCircle2, CircleDot } from 'lucide-react'

export const IssuesFilters = () => {
  return (
    <div className="flex flex-wrap gap-4 cursor-pointer">
      <div className="flex flex-wrap gap-2 text-gray-400 hover:text-gray-600 transition-colors">
        <CircleDot /> Open
      </div>
      <div className="flex flex-wrap gap-2 text-gray-400 hover:text-gray-600 transition-colors">
        <CheckCircle2 /> Closed
      </div>
    </div>
  )
}
