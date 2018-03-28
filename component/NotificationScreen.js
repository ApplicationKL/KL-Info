import React, { Component } from 'react';
import {StyleSheet, View, Text } from 'react-native';

//Native base
import { Button, Icon } from 'native-base';

//Styles
import styles from '../styles';

class NotificationScreen extends Component {

    static navigationOptions = ({navigation}) => {

    navOptions = navigation;
    const {params = {} } = navigation.state;

    return {

      headerLeft: (
        <Button 
        transparent
        onPress={() => params._onHeaderEventControl()}
        > 

          <Icon name="ios-menu" style={{fontSize: 30, color: 'white'}}/>

        </Button>
        
          
        )
    }
  }

  onHedearEventControl() {
    const {params = {} } = navOptions.state;
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
      <View style={styles.container}>
        

          <Text>NOTIFICATION</Text>
       
        
      </View>
    );
  }
}

export default NotificationScreen;