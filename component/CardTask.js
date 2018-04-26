import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { TabNavigator, StackNavigator, NavigationActions } from 'react-navigation';

//Native base
import {Icon, Form, Item, Input, Label, Left, Right, Body, Card, CardItem, List, ListItem, CheckBox, Button } from 'native-base';

//Task
import Task from './Task.js';

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
        <Icon name="ios-menu" />
        </Button>    
      )
    }
  }

  constructor(props)
  {
    super(props);
    this.state = {
      taskArray: [],
      taskText: '',
    };
  }

  render() {

    let tasks = this.state.taskArray.map((val, key)=>{
        return <Task key={key} keyval={key} val={val}/> 
     });
     
    return (

      <View>

          <Card>              

                <CardItem>
                  <TextInput
                    placeholder ='Add task..'
                    onChangeText={(taskText)=> this.setState({taskText})}
                    value={this.state.taskText}>
                  </TextInput>
                  <TouchableOpacity onPress={ this.addtask.bind(this) }>
                    <Text style={styles.addButtonText}> + </Text>
                  </TouchableOpacity>
                </CardItem>

                <CardItem>
                  <ListItem style={{borderBottomWidth: 0}}>
                    <Body>
                      {tasks}
                    </Body>
                  </ListItem>
                </CardItem>

          </Card>
     
      </View>

    );
  }

  addCard(){

  }

  addtask()
    {
        if(this.state.taskText){
            this.state.taskArray.push({
              
                'task': this.state.taskText,
            });
            this.setState({taskArray: this.state.taskArray }),
            this.setState({taskText:''});
        }
    }

    deletetask(key){
        this.state.taskArray.splice(key, 1);
        this.setState({taskArray: this.state.taskArray});
    }
}


