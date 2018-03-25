import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { ListItem, Left, Thumbnail, Body, Right } from 'native-base'
import styles from '../../styles'

export default class ItemPesan extends Component{
  render(){
      return(
        <ListItem avatar style={styles.profil} >
            <Left>
              <Thumbnail source={{ uri: 'https://images.fineartamerica.com/images-medium-large-5/hummingbird-of-watercolor-rainbow-olga-shvartsur.jpg' }} />
            </Left>
            <Body style={styles.noPadding} >
              <Text>{this.props.name}</Text>
              <Text note>Doing what you like will always keep you happy . .</Text>
            </Body>
            <Right style={styles.noPR} >
              <Text note style={styles.timePadding} >3:43 pm</Text>
            </Right>
          </ListItem>
      )
  }
}
