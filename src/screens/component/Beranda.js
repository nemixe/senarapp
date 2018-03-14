/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import { View } from 'react-native'
import Content from './Content'

export default class Beranda extends Component {
    render() {
      this.props.navigator.setStyle({
        navBarHidden: true,
      });
        return (
          <View>
            <Content name="Beranda" />
          </View>
        );
      }
}