import { StatusBar } from 'expo-status-bar'
import React from 'react'
import styled, { ThemeProvider } from 'styled-components/native'
import { NativeRouter, BackButton } from 'react-router-native'

import Routes from '~/Routes'
import theme from '~/theme'

export default function App() {
  return (
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
  )
}

const SafeAreaView = styled.SafeAreaView`
  flex: 1;
  align-items: stretch;
  justify-content: flex-start;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.primaryDark};
`
