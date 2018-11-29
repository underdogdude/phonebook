import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import ImgList from './ImgList'
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button, Icon } from 'native-base';




export default class ContactList extends React.Component {

    constructor() {
        super();
        this.state = {
            contact: []
        }
    }

    componentDidMount() {

        let ImgList = [];

        fetch('https://randomuser.me/api/?results=15&inc=name,picture')
        .then((response) => response.json())
        .then((responseJson) => {
       
            ImgList = responseJson.results.map((item) => {
           
                return ({
                   
                    fname: item.name.first,
                    lname: item.name.last,
                    img: item.picture.thumbnail
                }) 
            })
            this.setState({
                contact: ImgList
            });
        });

    }
    alertTest(){
        alert('bite');
    }

    render() {
        return ( 
            <List>
                {
                    this.state.contact.map((item,index ) => {
                        return(                    
                            <ListItem thumbnail key={index} >
                                <Left>
                                    <Thumbnail square source={{ uri: item.img }} />
                                </Left>
                                <Body>
                                    <Text>{item.fname} {item.lname} </Text>
                                    <Text note numberOfLines={1}>Its time to build a difference . .</Text>
                                </Body>
                                <Right>
                                    <Button onPress={() => this.alertTest()} transparent>
                                        <Text>Call</Text>
                                    </Button>
                                </Right>
                            </ListItem>
                            
                        );
                    })
                }
                <ImgList Data={this.state.contact} Alert="Hello World" />
                
            </List>
        );
    }
}

const styles = StyleSheet.create({
    contactName: {
        fontWeight: "bold",
        color: "#333"
    },
 
});