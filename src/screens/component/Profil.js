/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import { View } from 'react-native'
import { Container } from 'native-base'
import Content from './Content'

export default class Profil extends Component {
  static navigatorStyle = {
    navBarHidden: true,
  };
  render() {
    return (
      <Container>
        <Content name="Profil" />
      </Container>
    );
  }
}
