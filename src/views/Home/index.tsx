import React, { useState } from 'react'
import styled from 'styled-components/native'

import Task, { TaskItem } from '~/components/Task'

const Home: React.FC = () => {
  const [tasks, setTasks] = useState<TaskItem[]>([
    { id: '1', title: 'task 1', notes: '', completed: true },
    { id: '2', title: 'task 2', notes: '', completed: false },
    { id: '3', title: 'task 3', notes: '', completed: false }
  ])

  return (
    <Wrapper>
      {tasks.map((task) => (
        <Task key={task.id} taskData={task} />
      ))}
    </Wrapper>
  )
}

const Wrapper = styled.View`
  flex: 1;
  background-color: transparent;
`

export default Home
