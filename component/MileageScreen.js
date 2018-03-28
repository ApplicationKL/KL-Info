import React, { Component } from 'react';
import {StyleSheet, Text, View } from 'react-native';

import styles from '../styles';

class Mileage extends Component {

  static navigationOptions = {
    drawerLabel: 'Mileage',
    drawerLockMode: 'locked-closed'

  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        
          <Text>MILEAGE</Text>

      </View>

    );
  }
}

export default Mileage;