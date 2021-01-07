import React, { useState, useContext } from 'react'
import styled from 'styled-components/native'

import AppContext from '~/AppContext'
import createId from '~/utils/createId'

const AddTask: React.FC = () => {
  const { addTask } = useContext(AppContext)
  const [title, setTitle] = useState('')
  const [notes, setNotes] = useState('')

  function onSubmit() {
    addTask({ id: createId(), completed: false, title, notes })
    setTitle('')
    setNotes('')
  }

  return (
    <Wrapper>
      <TextInput
        value={title}
        onChangeText={setTitle}
        placeholder="Task Name"
        placeholderTextColor="rgb(173, 173, 198)"
        returnKeyType="done"
        onSubmitEditing={onSubmit}
      />
      <TextInput
        value={notes}
        onChangeText={setNotes}
        placeholder="Add notes..."
        placeholderTextColor="rgb(173, 173, 198)"
        returnKeyType="done"
        onSubmitEditing={onSubmit}
      />
      <Button onPress={onSubmit}>
        <Text>Add</Text>
      </Button>
    </Wrapper>
  )
}

const Wrapper = styled.View`
  flex: 1;
  background-color: transparent;
  padding: ${(props) => props.theme.spacing.unit * 0.15}px;
`

const TextInput = styled.TextInput`
  color: ${(props) => props.theme.colors.primary};
  background-color: ${(props) => props.theme.colors.secondaryDark};
  border-color: ${(props) => props.theme.colors.primary};
  height: ${(props) => props.theme.spacing.unit}px;
  border-width: ${(props) => props.theme.spacing.borderWidth};
  padding: ${(props) => props.theme.spacing.unit * 0.25}px;
  border-radius: ${(props) => props.theme.spacing.borderRadius};
  margin-bottom: ${(props) => props.theme.spacing.unit * 0.15}px;
`

const Button = styled.TouchableOpacity`
  background-color: ${(p) => p.theme.colors.secondaryDark};
  height: ${(p) => p.theme.spacing.unit / 2}px;
  align-self: stretch;
  align-items: center;
  justify-content: center;
  border-radius: ${(p) => p.theme.spacing.borderRadius};
`

const Text = styled.Text`
  font-size: 16px;
  color: ${(p) => p.theme.colors.primary};
`

export default AddTask
