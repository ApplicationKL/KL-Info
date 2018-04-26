import React from 'react';
import {
    StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
  
  //MAIN LAYOUT
  container: {
    flex: 1,

  },


  icon: {
    fontSize: 26, 
    color: 'white'

  },

  
  //MILEAGE SCREEN
  iconProject: {
    fontSize: 25
  },

  itemProject: {
    alignSelf: 'stretch',
    marginBottom: 10,
    height: 40,
    width: 100,
    marginLeft: 20,
    marginRight: 40
  },

  //TASK SCREEM
  addButtonText: {
        color: '#F78233',
        fontSize: 35, 
        marginLeft: 210,

    },

  cardType: {
    flex: 0,
    textAlign: 'center',
    height: 235,
    marginBottom: 5

  
  },

  taskButton: {
    backgroundColor: '#F78233',
    padding: 20,
    marginTop: 20,
    marginBottom: 0

  },

  itemTask: {
    alignSelf: 'stretch',
    marginBottom: 10,
    width: 300,
    height: 50,
    
  },

  itemTaskPrimary: {
    alignSelf: 'stretch',
    width: 300,
    height: 35

  },

  itemCategory: {
    alignSelf: 'stretch',
    marginBottom: 10,
    height: 40,
    marginLeft: 20,
    marginRight: 37
 
  },

  itemTime: {
    alignSelf: 'stretch',
    marginBottom: 10,
    width: 100,
    height: 45,
    marginLeft: 20,
    marginRight: 0
  },

  iconCategory: {
    marginRight: 2,
    fontSize: 33
  },

  iconTime: {
    fontSize: 26
  },

  buttonText: {
    color: 'white',
  },

  checkBox: {
    marginRight: 25,

  },

  formText: {
    color: 'black',
    fontSize: 16,
    
  },

  cardTopText: {
    color: '#black',
    fontSize: 18,
    paddingBottom: 0
  },

  categoryText: {
    color: 'black',
    fontSize: 16,
    
  },

picker: {
    
    height: 15,
 

  },
  pickerText: {
    color: '#7E7D7D',
    fontSize: 16,

  },


  //DRAWER SCREEN


  viewDrawerProfile: {
    height: 150, 
    backgroundColor: '#024287',
    marginBottom: 10
  },

  iconDrawer: {
    fontSize: 26,
    color: 'black',
    
    alignItems: 'left'
  },

  drawerMenutItem: {
    alignSelf: 'stretch',
    marginLeft: 50,
    marginRight: 50,
    borderRadius: 5,
    height: 70,
 
  },

  drawerMenutItemText: {
      color: 'black',
      alignSelf: 'center',
      fontSize: 16,
  
  },

  profileIconDrawer: {
    marginLeft: 50,
    marginTop: 50,
    color: 'white'
  },

  divider: {
    height: 1, 
    backgroundColor: '#F2F2F2'
  },


});

export default styles;