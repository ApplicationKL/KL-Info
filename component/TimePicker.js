import React, { Component } from 'react'
import DatePicker from 'react-native-datepicker'

export default class MyTimePicker extends Component {
  constructor(props){
    super(props)
    this.state =  {date: new  Date().toLocaleTimeString('en-GB')}
  }

  render(){

    return (
      <DatePicker
        style={{width: 200}}
        date={this.state.date}
        showIcon={false}
        mode="time"
        placeholder="select time"
        format="h:mm"
        is24Hour={true}
        confirmBtnText="Done"
        cancelBtnText="Cancel"
        customStyles={{
  
          dateInput: { 
            borderWidth: 0
          } ,
          dateText:{
            color: '#7E7D7D',
          },

          btnTextConfirm: {
            fontSize: 16,
            color: '#F78233'
          },
          // ... You can check the source to find the other keys.
        }}
        onDateChange={(date) => {this.setState({date: date})}}
      />
    )
  }
}