import {DrawerNavigator, StackNavigator} from 'react-navigation';

import ScreenOne from '../component/ScreenOne';
import ScreenTwo from '../component/ScreenTwo';
import ScreenThree from '../component/ScreenThree'


const StackScreen1 = StackNavigator({
	ScreenOne: {
		screen: ScreenOne,
		navigationOptions: ()=> ({
			title: 'Screen One',
			headerTintColor: 'white',
			headerStyle: {
				backgroundColor: 'red'
			}
		})
	},

});

const StackScreen2 = StackNavigator({
	ScreenTwo: {
		screen: ScreenTwo,
		navigationOptions: ()=> ({
			title: 'Screen Two'
		})
	},

});

const StackScreen3 = StackNavigator({
	ScreenThree: {
		screen: ScreenThree,
		navigationOptions: ()=> ({
			title: 'Screen Three'
		})
	},

});


export default Drawer = DrawerNavigator ({
	ScreenOne: {
		screen: StackScreen1,
		
	},

	ScreenTwo: {
		screen: StackScreen2,
		
	},

	ScreenThree: {
		screen: StackScreen3,
	
	}

});