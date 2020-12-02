import React from 'react'
import styled from 'styled-components/native'
import { AntDesign } from '@expo/vector-icons'

export interface TaskItem {
  id: string
  title: string
  completed: boolean
  notes: string
  dueAt?: string
}

interface TaskProps {
  taskData: TaskItem
}

const Task: React.FC<TaskProps> = ({ taskData }) => {
  return (
    <Wrapper>
      <Text>{taskData.title}</Text>
      <Text>{taskData.notes}</Text>
      <Text>
        <AntDesign name="calendar" size={24} color="rgb(200,200,210)" /> Due
        Today
      </Text>
    </Wrapper>
  )
}

const Wrapper = styled.View`
  background-color: rgb(68, 68, 107);
  border-radius: 10px;
  padding: 20px;
  margin: 5px;
  border-width: 0.2px;
  border-color: rgb(173, 173, 198);
`

const Text = styled.Text`
  font-size: 16px;
  color: rgb(173, 173, 198);
`

export default Task
