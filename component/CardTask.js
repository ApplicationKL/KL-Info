import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { TabNavigator, StackNavigator, NavigationActions } from 'react-navigation';

//Native base
import {Icon, Form, Item, Input, Label, Left, Right, Body, Card, CardItem, List, ListItem, CheckBox, Button } from 'native-base';



//Styles
import styles from '../styles';


export default class CardTask extends Component {

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
        
      )
    }
  }

  render() {
     
    return (

      <View>
          <Card style={styles.cardTask}>

                <CardItem>
                    <Left>  
                        
                        <Body>
                            
                            <Text style={styles.cardTopText}>Primary</Text>
                        
                        </Body>                 
                    </Left>

                </CardItem>

            </Card>
      </View>

    )
  }
}


