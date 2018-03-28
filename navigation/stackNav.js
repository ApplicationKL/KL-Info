import {StackNavigator} from 'react-navigation';

import TaskScreen from '../component/TaskScreen';
import NotificationScreen from '../component/NotificationScreen';
import ProjectsScreen from '../component/ProjectsScreen';
 

const StackHome = StackNavigator({
	TaskScreen: {
		screen: TaskScreen,
		navigationOptions: ()=> ({
			title: 'Task'
		})
	},

	NotificationScreen: {
		screen: NotificationScreen,
		navigationOptions: ()=> ({
			title: 'Screen Two'
		})
	},

	ProjectsScreen: {
		screen: ProjectsScreen,
		navigationOptions: ()=> ({
			title: 'Screen Three'
		})
	} 

});

