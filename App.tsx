import { StatusBar } from 'expo-status-bar';
import React from 'react';
import styled from 'styled-components/native';
import { NativeRouter, BackButton } from 'react-router-native';

import Routes from '~/Routes';

export default function App() {
  return (
    <NativeRouter>
      <BackButton>
        <SafeAreaView>
          <StatusBar style="auto" />
          <Routes />
        </SafeAreaView>
      </BackButton>
    </NativeRouter>
  );
}

const SafeAreaView = styled.SafeAreaView`
  flex: 1;
  align-items: stretch;
  justify-content: flex-start;
  flex-direction: column;
`;
