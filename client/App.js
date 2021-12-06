import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet } from 'react-native';
import Container from './components/container/Container';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <>
      <StatusBar style="auto"/>
      <Container />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
