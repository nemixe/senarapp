/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import { View } from 'react-native'
import Content from './Content'

export default class Profil extends Component {
  render() {
    this.props.navigator.setStyle({
      navBarHidden: true,
      drawUnderNavBar: true
    })
    return (
      <View>
        <Content name="Profil" />
      </View>
    );
  }
}