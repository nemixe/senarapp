'use strict'
let React = require('react-native')
let { StyleSheet } = React
const constant = {
  actionColor: '#fff'
}

module.exports = StyleSheet.create({
    profil: {
      paddingRight:10,
      paddingLeft:10,
      marginLeft: 0,
    },
    noPadding: {
      padding:0,
      borderBottomWidth:0
    },
    noPR: {
      paddingRight:0,
      borderBottomWidth:0
    },
    timePadding: {
      paddingTop:2, 
      paddingBottom:2
    }
  })