import React, { Component } from 'react'
import { Picker } from 'react-native-picker-dropdown'
import {Body} from 'native-base';


import styles from '../styles';

export default class MyCategoryPicker extends Component {

  //Category picker
  constructor(props, context) {
    super(props, context)
    this.state = { language: 'cl'  }
    this.onValueChange = this.handleValueChange.bind(this)
  }

  handleValueChange(language) {
    this.setState({ language })
  }

  render(){

    return (

    <Body>
      <Picker
        selectedValue={this.state.language}
        onValueChange={this.onValueChange}
        prompt="Choose the category of your task"
        style={styles.picker}
        textStyle={styles.pickerText}
        cancel
      >

        <Picker.Item label="Cleaning" value="cl" />
        <Picker.Item label="Salting" value="sl" />
        <Picker.Item label="Apartments" value="ap" />
        <Picker.Item label="Power Plant" value="pj" />
        <Picker.Item label="Military" value="mj" />

      </Picker>  

    </Body>
    )
  }
}