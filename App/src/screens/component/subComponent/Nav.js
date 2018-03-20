import React, { Component } from 'react'
import { Container, Header, Item, Input, Body, Button, Text, Title, Content } from 'native-base'

export default class Nav extends Component{
    render(){
        return(    
            <Header androidStatusBarColor='#158073' style={{backgroundColor: "#199587"}}>
                <Body style={{justifyContent: 'center', alignItems: 'center' }}>
                    <Title>{this.props.name}</Title>
                </Body>
            </Header>
        )
    }
}