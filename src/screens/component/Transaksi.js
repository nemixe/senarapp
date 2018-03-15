/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import { View } from 'react-native'
import Content from './Content'

export default class Transaksi extends Component {
  render() {
    this.props.navigator.setStyle({
      navBarTransparent: true
    });
    return (
      <View>
        <Content name="Transaksi" />
      </View>
    );
  }
}