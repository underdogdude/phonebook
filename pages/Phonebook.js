import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Container, Item, Content, Accordion, Icon, Input, Text } from "native-base";
import HeaderNav from '../component/HeaderNav';
import ImgList from '../component/ImgList';
import ContactList from '../component/ContactList';
import { Font } from 'expo';

const dataArray = [
    { title: "First Element", content: "Lorem ipsum dolor sit amet" },
    { title: "Second Element", content: "Lorem ipsum dolor sit amet" },
    { title: "Third Element", content: "Lorem ipsum dolor sit amet" }
  ];


export default class Phonebook extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            contact: []
        }
    }

    async componentWillMount() {
        await Expo.Font.loadAsync({
            'Roboto': require('native-base/Fonts/Roboto.ttf'),
            'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
        });

        let ImgList = [];

        await fetch('https://randomuser.me/api/?results=15&inc=name,picture')
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

    render() {
        return ( 
            <Container>
                <HeaderNav />
                <Content padder>
                    <Item>
                        <Icon active name='search' />
                        <Input placeholder='Seach Name'/>
                    </Item>
                    <Text style={{ fontSize: 24, fontWeight: 'bold', paddingTop: 20 }}>
                        Recently
                    </Text>
                    <ImgList Data={this.state.contact} style={{ paddingTop: 20 }}  />
                    <Text style={{ fontSize: 24, fontWeight: 'bold', paddingTop: 20 }}> 
                        Contact List 
                    </Text>
                    <ContactList  style={{ paddingTop: 20 }} />
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});