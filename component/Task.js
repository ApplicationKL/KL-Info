import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView, Alert,  } from 'react-native';
import { TabNavigator, StackNavigator, NavigationActions } from 'react-navigation';

//Native base
import {Icon, Form, Item, Input, Card, CardItem, List, ListItem} from 'native-base';
//Styles
import styles from '../styles';


export default class Task extends Component {

  navOption

  static navigationOptions = ({navigation}) => {

    navOption = navigation;
    const {params = {} } = navigation.state;

    return {

      headerLeft: (
        <Button 
        transparent
        onPress={() => params._onHeaderEventControl()}
        > 
          <Icon name="ios-menu" />
        </Button>
        
      )
    }
  }

  render() {
     
    return (

          <View key={this.props.keyval}>
              <Item style={styles.itemTask}>
                <Text onPress={() => {Alert.alert('Task Details');}}>
                  {this.props.val.task}
                </Text>  
              </Item>    
          </View>

    )
  }
}



