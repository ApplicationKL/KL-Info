import React, { Component } from 'react';

//React native
import {StyleSheet, Text, View, ScrollView } from 'react-native';

//Native base
import {Icon, Form, Item, Input, Label, Left, Right, Body, Card, CardItem, List, ListItem, CheckBox, Button } from 'native-base';

//Styles
import styles from '../styles';

//Pickers
import DatePicker from './DatePicker';
import ProjectPicker from './ProjectPicker';

class Mileage extends Component {

    //Main navigation options
    static navigationOptions = ({navigation}) => {

    navOptions = navigation;
    const {params = {} } = navigation.state;

    return {

    drawerLabel: 'Mileage',
    drawerLockMode: 'locked-closed',
    headerLeft: (
      <Button transparent> 
        <Icon name="arrow-back" style={{fontSize: 26, color: 'white'}}/>
      </Button>
        
      ),
    headerRight: (
      <Button transparent> 
        <Icon name="checkmark" style={{fontSize: 40, color: 'white'}}/>
      </Button>
        
      )
    }
  }

  render() {
    return (
      <View style={styles.container}>

      <ScrollView>  
          
        <Card>

          <CardItem>

             <Left>  
                <Body>
                  <Text style={styles.cardTopText}>Primary</Text>
                </Body>
              </Left>

          </CardItem>

          <CardItem>

            <Form>
           
              <Item style={styles.itemTask}>
                <Icon name='calendar' />
                <Text style={styles.categoryText}>Date:</Text>
                <DatePicker/>
              </Item>
     
           
              <Item style={styles.itemATask}>
                <Icon name='list-box' style={styles.iconProject} />
                <Text style={styles.categoryText}>Project:</Text>
                <ProjectPicker/>
              </Item> 
              
            </Form>

          </CardItem>

        </Card>

      </ScrollView>
      </View>


    );
  }
}

export default Mileage;