import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet } from 'react-native';
import Container from './components/container/Container';
import { LogBox } from 'react-native';  // impport to help remove warnings in ReactNative Simulator

export default function App() {

  // LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
  LogBox.ignoreAllLogs();//Ignore all log notifications

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
