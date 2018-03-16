/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { Container, Header, Item, Input, Icon, Button, Text } from 'native-base'
import Content from './Content'
import SearchHeader from './subComponent/SearchHeader'

export default class Beranda extends Component {
    static navigatorStyle = {
      navBarHidden: true,
    };

    render() {
        return (
          <Container>
              <SearchHeader />
          </Container>
        );
      }
}

const styles = StyleSheet.create({
  bgSearch:{
    backgroundColor: '#199587'
  }
})