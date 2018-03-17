/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import { View, StyleSheet, ListView } from 'react-native'
import { 
  Container,
  List, 
  Content, 
  Left, 
  Right, 
  Input,
  Item,
  Icon,
  Grid,Col
} from 'native-base'
import Nav from './subComponent/Nav'
import ItemPesan from './subComponent/item'
import styles from '../styles'

export default class Pesan extends Component {
  render() {
    return (
      <Container>
        <Nav name="Pesan" />
        <Content>
          <Grid style={styles.searchPesan} >
            <Col size={6}>
              <Item style={styles.searchBar} rounded >
                <Icon name='ios-search' style={{color: '#c3c3c3'}} />
                <Input rounded style={styles.searchInput} placeholder='Search'/>
              </Item>
            </Col>
            <Col size={1}>
              <Right>
              <Icon name='ios-people' style={styles.AddContactIcon} />
              </Right>
            </Col>
          </Grid>
          <List>
              <ItemPesan name="Muhammad Saidul Umam" />
              <ItemPesan name="Nemixe" />
              <ItemPesan name="Mas Bro" />
              <ItemPesan name="Skyrie" />
              <ItemPesan name="CatBuzz" />
              <ItemPesan name="Asmorb" />
              <ItemPesan name="Loctas" />
              {console.log("List Sukses")}
            </List>
        </Content>
      </Container>
    );
  }
}