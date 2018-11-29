import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Phonebook from './pages/Phonebook';


export default class App extends React.Component {
  render() {
    return (
        <Phonebook />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
