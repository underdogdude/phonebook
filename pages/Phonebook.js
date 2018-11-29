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

    async componentWillMount() {
        await Expo.Font.loadAsync({
            'Roboto': require('native-base/Fonts/Roboto.ttf'),
            'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
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
                    <ImgList   style={{ paddingTop: 20 }}  />


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