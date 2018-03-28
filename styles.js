import React from 'react';
import {
    StyleSheet
} from 'react-native';

const styles = StyleSheet.create({

  //MAIN LAYOUT
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  
  },




  //COMPONENTS
  icon: {
    fontSize: 26, 
    color: 'white'

  },

  card: {
    flex: 0,
    
    textAlign: 'center',
    marginBottom: 5
  },

  item: {
    alignSelf: 'stretch',
    width: 300

  },




  //DRAWER SCREEN
  viewDrawer: {
    height: 100, 
    backgroundColor: 'F2F2F2',
    marginBottom: 10
  },


  containerDrawer: {
    flex: 1,
    flexDirection: 'column'
        
  },

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

  buttonDrawer: {
    alignSelf: 'stretch',
    marginLeft: 50,
    marginRight: 50,
    borderRadius: 5,
    height: 70,
 
  },

  buttonDrawerText: {
      color: 'black',
      alignSelf: 'center',
      fontSize: 16,
  
  },

  profileIconDrawer: {
    marginLeft: 50,
    marginTop: 50,
    color: 'white'
  }


});

export default styles;