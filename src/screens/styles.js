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
    },
    searchPesan: {
      paddingLeft:5, 
      paddingRight:5, 
      flex:0
    },
    searchBar: {
      marginBottom:10, 
      marginTop:10, 
      borderRadius: 17, 
      padding:0
    },
    searchInput: {
      lineHeight:16, 
      height:32, 
      fontSize: 14
    },
    AddContactIcon: {
      color: '#c3c3c3', 
      paddingTop:12
    }
  })