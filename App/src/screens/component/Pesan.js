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
} from 'native-base'
import Nav from './subComponent/Nav'
import ItemPesan from './subComponent/item'
import styles from '../styles'

export default class Pesan extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: 'Search',
    }
  }
  render() {
    return (
      <Container>
        <Nav name="Pesan" />
        <Content>
          <View style={styles.searchPesan}>
            <View style={{flex:6}}>
              <Item style={styles.searchBar} rounded >
                <Icon name='ios-search' style={{color: '#c3c3c3'}} />
                <Input rounded style={styles.searchInput} placeholder={this.state.name} onChangeText={(name)=>{this.setState({name})}}/>
              </Item>
            </View>
            <View style={styles.addContact}>
                <Icon name='ios-people' style={styles.addContactIcon} />
            </View>
          </View>
          <List>
              <ItemPesan name={this.state.name} />
              <ItemPesan name="Nemixe" />
              <ItemPesan name="Mas Bro" />
              <ItemPesan name="Skyrie" />
              <ItemPesan name="CatBuzz" />
              <ItemPesan name="Asmorb" />
              <ItemPesan name="Loctas" />
              {console.log(this.state.name)}
            </List>
        </Content>
      </Container>
    );
  }
}