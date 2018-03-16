import React, { Component } from 'react'
import { Container, Header, Item, Input, Icon, Button, Text } from 'native-base'

export default class SearchHeader extends Component{
    render(){
        return(    
            <Header searchBar rounded androidStatusBarColor='#158073' style={{backgroundColor: "#199587"}}>
                <Item>
                    <Icon name="ios-search" />
                    <Input placeholder="Search" />
                    <Icon name="ios-people" />
                </Item>
                <Button transparent>
                    <Text>Search</Text>
                </Button>
            </Header>
        )
    }
}