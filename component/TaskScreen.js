import React, { Component } from 'react';
import {StyleSheet, View, Text } from 'react-native';

//Native base
import { Form, Item, Input, Label, Left, Right, Body, Card, CardItem, Picker, List, ListItem, CheckBox } from 'native-base';

import styles from '../styles';



class Task extends Component {

    static navigationOptions = {
    drawerLabel: 'Task',
    drawerLockMode: 'locked-closed'

  };

  constructor(props) {
    super(props);
    this.state = {
      selected5: "key2"
    };
  }
  onValueChange5(value: string) {
    this.setState({
      selected5: value
    });
  }


  render() {
    //const { navigate } = this.props.navigation;
    return (
      <View>

        <Card style={styles.card}>

          <CardItem>

             <Left>  
                <Body>
                  <Text>Primary tasks</Text>
                </Body>
              </Left>

          </CardItem>

          <CardItem>

            <Body>   
                  
              <ListItem style={styles.item}>
                <CheckBox checked={true} />
                  <Body>
                  <Text>Daily Stand Up</Text>
                  </Body>
              </ListItem>

              <ListItem>
                <CheckBox checked={false} />
                <Body>
                  <Text>Discussion with Client</Text>
                </Body>
              </ListItem>

            </Body>

          </CardItem>  

          

        </Card>

        <Card style={styles.card}>

          <CardItem>

             <Left>  
                <Body>
                  <Text>Additional task</Text>
                </Body>
              </Left>

          </CardItem>

          <CardItem>

              <Body>   
                  
                <Form style={styles.item}>

                  <Item floatingLabel>
                     <Label >Name</Label>
                     <Input />
                  </Item>

                  <Item floatingLabel>
                     <Label >Desription</Label>
                     <Input />
                  </Item>

              </Form>

            </Body>

          </CardItem>  

        </Card>

      

        <Card style={styles.card}>
          <CardItem>

             <Left>  
                <Body>
                  <Text>Type</Text>
                </Body>
              </Left>

          </CardItem>


          <CardItem>

            <Body>   
                  
              <Form>

                <Picker
                  mode="dropdown"
                  headerStyle={{ backgroundColor: "#024287" }}
                  headerBackButtonTextStyle={{ color: "#fff" }}
                  headerTitleStyle={{ color: "#fff" }}
                  selectedValue={this.state.selected5}
                  onValueChange={this.onValueChange5.bind(this)}
                >
              
                <Item label="Cleaning" value="key0" />
                <Item label="Salting" value="key1" />
                <Item label="Apartments" value="key2" />
                <Item label="Power Plant " value="key3" />
                <Item label="Military" value="key4" />
              </Picker>

            </Form>

            </Body>

          </CardItem>    
        </Card>          
       
      </View>
    );
  }
}

export default Task;