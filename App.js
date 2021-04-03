import React from 'react'
import {SafeAreaView, StyleSheet} from 'react-native'

import Routes from './src/routes'

console.log('loaded, this console.log is in app.js')

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Routes/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
  },
});