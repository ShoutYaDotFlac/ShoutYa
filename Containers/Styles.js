import React from "react";
import { StyleSheet } from 'react-native';

export const Styles = StyleSheet.create({
  closeBanner: {
    backgroundColor: 'red',
    height:35,
    width:400,
    marginTop: 15
  },
  openShiftBanner: {
    backgroundColor: 'powderblue',
    height:35,
    width:400
  },
  modal: {
    zIndex: 1,
    borderRadius: 2,
    borderWidth: 1,
    padding: 5,
    margin: 25
  },
  button: {
      backgroundColor: 'green',
      width: '40%',
      height: 40
  },
  oscatering: {
    width: '90%',
    height: 100,
    backgroundColor: 'steelblue',
    margin:15,
    padding: 10,
    shadowOffset:{  width: 20,  height: 20,  },
    shadowColor: 'black',
    shadowOpacity: 0.2,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderTopWidth: 0,
    borderLeftWidth: 0,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 1,
  },
  oscleaning: {
    width: '90%',
    height: 100,
    backgroundColor: 'green',
    margin:15,
    padding:10,
    shadowOffset:{  width: 20,  height: 20,  },
    shadowColor: 'black',
    shadowOpacity: 0.2,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderTopWidth: 0,
    borderLeftWidth: 0,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 1,
  }
});
