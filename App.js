import React from 'react';
import MainSceen from './src/Screen/MainSceen'
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <MainSceen/>
      </View>
    );
  }
}


