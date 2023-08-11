import { BookUp, CircleDot, MessagesSquare, Users } from 'lucide-react'

export const filterCategories = [
  {
    title: 'Repositories',
    icon: <BookUp />,
    value: 'repositories',
  },
  {
    title: 'Users',
    icon: <Users />,
    value: 'users',
  },
  {
    title: 'Issues',
    icon: <CircleDot />,
    value: 'issues',
  },
  {
    title: 'Discussions',
    icon: <MessagesSquare />,
    value: 'discussions',
  },
]
