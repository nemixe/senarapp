/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { Container, Header, Item, Input, Icon, Button, Text } from 'native-base'
import Content from './Content'
import Nav from './subComponent/Nav'
import { topTabs } from 'react-native-navigation'

export default class Beranda extends Component {
    render() {
        return (
          <Container>
              <Nav name="Beranda"/>
              <Content name="Beranda" />
          </Container>
        );
      }
}