import React, { Component } from 'react';
import { StyleSheet, View, Alert, Text, Button } from 'react-native';
import Moment from 'moment';
import styles from '../styles';
 
export default class CurrentDate extends Component {
 
  render() {

    Moment.locale('en');
    var now = Moment().format("DD MMM");
 
    return ( 
      <View>
        <Text style={styles.text}>{now}</Text>
      </View>
 
    );
  }
}
 
