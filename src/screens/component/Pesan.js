/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import { View } from 'react-native'
import Content from './Content'

export default class Pesan extends Component {
    render() {
        return (
          <View>
            <Content name="Pesan" />
          </View>
        );
      }
}