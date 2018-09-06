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
  }
});
