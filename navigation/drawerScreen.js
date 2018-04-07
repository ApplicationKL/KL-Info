import React, { Component } from 'react';
import {View, Text, ScrollView} from 'react-native';

//Navigation 
import {NavigationActions} from 'react-navigation';

//Native Base
import {Button, Icon, Left, Right} from 'native-base';


//React Native Elements
import { Avatar, Divider } from 'react-native-elements';

//Styles
import styles from '../styles';


export default class DrawerScreen extends Component {

	navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    
    this.props.navigation.dispatch(navigateAction);
  }


	render() {

		const { navigate } = this.props.navigation;

		return (

			<View style={styles.containerDrawer}>
        
	        

	        		<View style={styles.viewDrawerProfile}>
	        			<Avatar
  							large
  							rounded
  							icon={{name: 'person'}}
 							onPress={() => console.log("Works!")}
  							activeOpacity={0.7}
  							containerStyle={styles.profileIconDrawer}
						/>
	        			
	        		</View>

	        		<ScrollView style={styles.viewDrawer}>

	        			<Button  full transparent onPress={this.navigateToScreen('Home')} style={styles.buttonDrawer}>
            				<Left><Icon name='home' style={styles.iconDrawer}/></Left>
            				<Right><Text style={styles.buttonDrawerText}>Home</Text></Right>            				
          				</Button>

          				<Divider style={{ height: 1, backgroundColor: '#F2F2F2' }} />

          				<Button   full transparent onPress={this.navigateToScreen('Notification')} style={styles.buttonDrawer}>
            				<Left><Icon name="notifications" style={styles.iconDrawer}/></Left>
            				<Right><Text style={styles.buttonDrawerText}>Notification</Text></Right>          				
          				</Button>

          				<Divider style={{ height: 1, backgroundColor: '#F2F2F2' }} />

          				<Button  iconLeft full transparent onPress={this.navigateToScreen('Projects')} style={styles.buttonDrawer}>
            				<Left><Icon name='albums' style={styles.iconDrawer}/></Left>
            				<Right><Text style={styles.buttonDrawerText}>Projects</Text></Right>            				
          				</Button>

          				<Divider style={{ height: 1, backgroundColor: '#F2F2F2' }} />

          				<Button  iconLeft full transparent onPress={this.navigateToScreen('DayReport')} style={styles.buttonDrawer}>
            				<Left><Icon name='timer' style={styles.iconDrawer}/></Left>
            				<Right><Text style={styles.buttonDrawerText}>Daily report</Text></Right>            				
          				</Button>

          				<Divider style={{ height: 1, backgroundColor: '#F2F2F2' }} />

          				<Button  iconLeft full transparent onPress={this.navigateToScreen('WeekReport')} style={styles.buttonDrawer}>
            				<Left><Icon name='time' style={styles.iconDrawer}/></Left>
            				<Right><Text style={styles.buttonDrawerText}>Weekly report</Text></Right>            				
          				</Button>

          				<Divider style={{ height: 1, backgroundColor: '#F2F2F2' }} />

          				<Button  iconLeft full transparent onPress={this.navigateToScreen('Account')} style={styles.buttonDrawer}>
            				<Left><Icon name='person' style={styles.iconDrawer}/></Left>
            				<Right><Text style={styles.buttonDrawerText}>Account</Text></Right>            				
          				</Button>

	        		</ScrollView>

      		</View>			

		
		);
	}
}