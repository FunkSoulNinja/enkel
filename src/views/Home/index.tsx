import React, { useState, useContext } from 'react'
import styled from 'styled-components/native'

import Task, { TaskItem } from '~/components/Task'
import AppContext from '~/AppContext'

const Home: React.FC = () => {
  const { tasks } = useContext(AppContext)
  return (
    <Wrapper>
      {tasks.map((task) => (
        <Task key={task.id} taskData={task} />
      ))}
    </Wrapper>
  )
}

const Wrapper = styled.ScrollView`
  flex: 1;
  background-color: transparent;
`

export default Home
