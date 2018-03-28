import React, { Component } from 'react';
import {TabNavigator, StackNavigator, DrawerNavigator} from 'react-navigation';

//Native Base
import {Button, Icon} from 'native-base';

//Screens
import HomeScreen from '../component/HomeScreen';
import NotificationScreen from '../component/NotificationScreen';
import ProjectsScreen from '../component/ProjectsScreen';
import WeekReportScreen from '../component/WeekReportScreen';
import DailyReportScreen from '../component/DailyReportScreen';
import AccountScreen from '../component/AccountScreen';

import TaskScreen from '../component/TaskScreen';
import MileageScreen from '../component/MileageScreen';

import DrawerScreen from './drawerScreen';

//Styles
import styles from '../styles';


//DRAWER SCREENS
const Notification = StackNavigator({
  Notification: {
    screen: NotificationScreen,
    navigationOptions: ()=> ({
      title: 'Notification',
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: '#024287',
        elevation: 0,
        shadowOpacity: 0
      }
    })
  
  }
});




const Projects = StackNavigator({
  Projects: {
    screen: ProjectsScreen,
    navigationOptions: ()=> ({
      title: 'All projects',
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: '#024287',
        elevation: 0,
        shadowOpacity: 0
      }
    })
  
  }
});

const WeekReport = StackNavigator({
  WeekReport: {
    screen: WeekReportScreen,
    navigationOptions: ()=> ({
      title: 'Weekly report',
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: '#024287',
        elevation: 0,
        shadowOpacity: 0
      }
    })
  
  }
});

const DayReport = StackNavigator({
  DayReport: {
    screen: DailyReportScreen,
    navigationOptions: ()=> ({
      title: 'Daily report',
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: '#024287',
        elevation: 0,
        shadowOpacity: 0
      }
    })
  
  }
});

const Account = StackNavigator({
  Account: {
    screen: AccountScreen,
    navigationOptions: ()=> ({
      title: 'Account',
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: '#024287',
        elevation: 0,
        shadowOpacity: 0
      }
    })
  
  }
}); 

//TAB SCREENS
const Home = StackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: () => ({
      title: 'Home',
      tabBarIcon: ({ tintColor }) => (<Icon name='ios-home' style= {styles.icon} />),
      headerTintColor: 'white',
      headerStyle:{
        backgroundColor: '#024287',
        elevation: 0,
        shadowOpacity: 0
      }

    })
  }
},{
  headerMode: 'none'
});



const Task = StackNavigator({
  Task: {
    screen: TaskScreen,
      navigationOptions: () => ({
      title: 'Task',
      tabBarIcon: ({ tintColor }) => (<Icon name='logo-buffer' style= {styles.icon} />),
      headerTintColor: 'white',
      headerStyle:{
        backgroundColor: '#024287',
        elevation: 0,
        shadowOpacity: 0
      }

    })
  }
},{
  headerMode: 'none'
});




const Mileage = StackNavigator({
  Mileage: {
    screen: MileageScreen,
      navigationOptions: () => ({
      title: 'Mileage',
      tabBarIcon: ({ tintColor }) => (<Icon name='ios-jet'  style= {styles.icon} />),
      headerTintColor: 'white',
      headerStyle:{
        backgroundColor: '#024287',
        elevation: 0,
        shadowOpacity: 0
      }

    })
  }
},{
  headerMode: 'none'
});




const TabNav = TabNavigator({
  TabHome: Home,
  TabTask: Task,
  TabMileage: Mileage,
  
}, {
  tabBarOptions: {
    showIcon: true,
    style: {
      backgroundColor: '#024287'
    },
    inactiveTintColor: 'white',
    activeTintColor: '#F78233'
  }
});

const StackTab = StackNavigator({
  Tabs: TabNav
});

export default Drawer = DrawerNavigator({
  Tabs: {
    screen: StackTab
  },

  DrawerNotification: {
    screen: Notification,
  },

  DrawerProjects: {
    screen: Projects,
  },

  DrawerDailyReport: {
    screen: DayReport,
  },

  DrawerWeekReport: {
    screen: WeekReport,
  },

  DrawerAccount: {
    screen: Account,
  }


}, {
  contentComponent: props => <DrawerScreen {...props} />
});