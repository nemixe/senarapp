/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import { View } from 'react-native'
import { Container } from 'native-base'
import Content from './Content'

export default class Transaksi extends Component {
  render() {
    return (
      <Container>
        <Content name="Transaksi" />
      </Container>
    );
  }
}