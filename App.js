import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';

import MixedNav from './navigation/mixedNav.js';
import MixedNavigators from './navigation/MixedNavigators';

export default class App extends Component {
  render() {
    return (
        < MixedNavigators />
        
      )
  }
}