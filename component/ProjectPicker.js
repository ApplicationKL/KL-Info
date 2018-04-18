import React, { Component } from 'react'
import { Picker } from 'react-native-picker-dropdown'
import {Body} from 'native-base';


import styles from '../styles';

export default class MyProjcetPicker extends Component {

  //Category picker
  constructor(props, context) {
    super(props, context)
    this.state = { project: 'cl'  }
    this.onValueChange = this.handleValueChange.bind(this)
  }

  handleValueChange(project) {
    this.setState({ project })
  }

  render(){

    return (

    <Body>
      <Picker
        selectedValue={this.state.project}
        onValueChange={this.onValueChange}
        prompt="Choose the project"
        style={styles.picker}
        textStyle={styles.pickerText}
        cancel
      >

        <Picker.Item label="Project1" value="cl" />
        <Picker.Item label="Project2" value="sl" />
        <Picker.Item label="Project3" value="ap" />
  

      </Picker>  

    </Body>
    )
  }
}