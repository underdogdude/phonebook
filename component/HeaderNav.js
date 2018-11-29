import React from 'react';
import { Container, Header, Icon, Title, Button, Left, Right, Body } from 'native-base';

export default class HeaderNav extends React.Component {

    render() {
        return ( 
            <Header>
              <Left>
                <Button transparent>
                  <Icon name="star" style={{ fontSize: 15, color: "#0066b6", lineHeight: 20 }}/>
                </Button>
              </Left>
              <Body>
                <Title>PhoneBook</Title>
              </Body>
              <Right />
            </Header>
        );
    }
}