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

			<View style={{flex: 1}}>

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

	        		<ScrollView>

	        			<Button  full transparent onPress={this.navigateToScreen('Home')} style={styles.drawerMenutItem}>
            				<Left><Icon name='home' style={styles.iconDrawer}/></Left>
            				<Right><Text style={styles.drawerMenutItemText}>Home</Text></Right>            				
          				</Button>

          				<Divider style={styles.divider} />

          				<Button   full transparent onPress={this.navigateToScreen('Notification')} style={styles.drawerMenutItem}>
            				<Left><Icon name="notifications" style={styles.iconDrawer}/></Left>
            				<Right><Text style={styles.drawerMenutItemText}>Notification</Text></Right>          				
          				</Button>

          				<Divider style={styles.divider} />

          				<Button  iconLeft full transparent onPress={this.navigateToScreen('Projects')} style={styles.drawerMenutItem}>
            				<Left><Icon name='albums' style={styles.iconDrawer}/></Left>
            				<Right><Text style={styles.drawerMenutItemText}>Projects</Text></Right>            				
          				</Button>

          				<Divider style={styles.divider} />

          				<Button  iconLeft full transparent onPress={this.navigateToScreen('DayReport')} style={styles.drawerMenutItem}>
            				<Left><Icon name='timer' style={styles.iconDrawer}/></Left>
            				<Right><Text style={styles.drawerMenutItemText}>Report</Text></Right>            				
          				</Button>

          				<Divider style={styles.divider} />

          				<Button  iconLeft full transparent onPress={this.navigateToScreen('Account')} style={styles.drawerMenutItem}>
            				<Left><Icon name='person' style={styles.iconDrawer}/></Left>
            				<Right><Text style={styles.drawerMenutItemText}>Account</Text></Right>            				
          				</Button>

	        		</ScrollView>

      		</View>			

		
		);
	}
}