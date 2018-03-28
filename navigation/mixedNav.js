import React, { Component } from 'react';
import {TabNavigator, StackNavigator, DrawerNavigator} from 'react-navigation';


import HomeScreen from '../component/HomeScreen';
import NotificationScreen from '../component/NotificationScreen';
import ProjectsScreen from '../component/ProjectsScreen';
import WeekReportScreen from '../component/WeekReportScreen';
import DailyReportScreen from '../component/DailyReportScreen';
import AccountScreen from '../component/AccountScreen';

import DrawerScreen from './drawerScreen';




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




const Project = StackNavigator({
	Project: {
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




//TAB NAVIGATION ?
/*const TabNav = TabNavigator ({
	TabHome: Home,
	TabFavorite: Notification,
	TabAbout: Project	

});

 const StackTab = StackNavigator({
 	Tabs: TabNav
 });*/

export default Drawer = DrawerNavigator ({
	/*Tabs: {
		screen: TabNav,
	},*/

	DrawerHome: {
		screen: HomeScreen,
	},

	DrawerNotification: {
		screen: Notification,
	},

	DrawerProjects: {
		screen: Project,
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

/*} , {
	contentComponent: props => <DrawerScreen {...props} />*/
  	
});