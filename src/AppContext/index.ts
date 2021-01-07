import { TaskItem } from '~/components/Task'
import { createContext } from 'react'

interface AppContext {
  tasks: TaskItem[]
  addTask: (task: TaskItem) => void
}

const AppContext = createContext<AppContext>({
  tasks: [],
  addTask: () => {}
})

export default AppContext
