import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView, FlatList } from 'react-native';
import { TabNavigator, StackNavigator, NavigationActions } from 'react-navigation';
import CardTask from './CardTask.js';
import CurrentDate from './CurrentDate.js';
import { Button, Icon } from 'native-base';
import styles from '../styles';

export default class HomeScreen extends Component {

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

          <Icon name="ios-menu" style={{fontSize: 30, color: 'white'}}/>

        </Button>
        
      ),

      headerRight: 
      (
         <CurrentDate/>
      )
    }
  }

  onHedearEventControl() {
    const { params = {} } = navOption.state;
    params._openNav()
  }


  componentDidMount() {
    this.props.navigation.setParams({
      _onHeaderEventControl: this.onHedearEventControl,
      _openNav: () => this.openDrawer()
    })
  }

  openDrawer() {
    this.props.navigation.navigate('DrawerOpen');
  }

  render() {
    const { navigate } = this.props.navigation;
    
    return (

      <View>
        <ScrollView >
          <CardTask/> 
        </ScrollView>
      </View>

      

    )
  }
}


