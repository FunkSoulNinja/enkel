import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'
import styled, { ThemeProvider } from 'styled-components/native'
import { NativeRouter, BackButton } from 'react-router-native'

import Routes from '~/Routes'
import theme from '~/theme'
import { TaskItem } from '~/components/Task'
import Home from './src/views/Home'

import AppContext from '~/AppContext'

export default function App() {
  const [tasks, setTasks] = useState<TaskItem[]>([
    { id: '1', title: 'task 1', notes: '', completed: true },
    { id: '2', title: 'task 2', notes: '', completed: false },
    { id: '3', title: 'task 3', notes: '', completed: false },
    { id: '4', title: 'task 4 ', notes: '', completed: false }
  ])

  function addTask(task: TaskItem) {
    setTasks([...tasks, task])
  }
  return (
    <AppContext.Provider value={{ tasks, addTask }}>
      <ThemeProvider theme={theme}>
        <NativeRouter>
          <BackButton>
            <SafeAreaView>
              <StatusBar style="auto" />
              <Routes />
            </SafeAreaView>
          </BackButton>
        </NativeRouter>
      </ThemeProvider>
    </AppContext.Provider>
  )
}

const SafeAreaView = styled.SafeAreaView`
  flex: 1;
  align-items: stretch;
  justify-content: flex-start;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.primaryDark};
`
