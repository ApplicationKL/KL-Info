import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';

//Native base
import { Button, Icon } from 'native-base';

//Screens
import TaskScreen from '../component/TaskScreen';
import MileageScreen from '../component/MileageScreen';

//Styles
import styles from '../styles';




export default class HomeScreen extends Component {

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
        
          <Text>Report home is empty</Text>
          <Text>Add activities from below or</Text>
      </View>

    )
  }
}


/*export default StackNav = TabNavigator ({
  Home: {
    screen: HomeScreen,
    navigationOptions: ()=> ({
      tabBarLabel: 'Home',
      title: 'Home',
      tabBarIcon: ({ tintColor }) => (<Icon name='ios-home' style= {styles.icon} />),
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: '#024287',
        elevation: 0,
        shadowOpacity: 0 
      }
         
      })
    
  },

  TaskScreen: {
    screen: TaskScreen,
    navigationOptions: ()=> ({
      tabBarLabel: 'Task',
      title: 'Task',
      tabBarIcon: ({ tintColor }) => (<Icon name='logo-buffer' style= {styles.icon} />),
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: '#024287',
        elevation: 0,
        shadowOpacity: 0
      }
      
     
      })
    
  },

  MileageScreen: {
    screen: MileageScreen,
    navigationOptions: ()=> ({
      title: 'Mileage',
      tabBarIcon: ({ tintColor }) => (<Icon name='ios-jet'  style= {styles.icon} />),
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: '#024287',
        elevation: 0,
        shadowOpacity: 0
       }
     
    })

  }
    
  }, {

    tabBarOptions: {
      showIcon: true,
      inactiveTintColor: 'white',
      activeTintColor: '#F78233',
      
      style: {
        backgroundColor: '#024287'
      },
    }

});*/
