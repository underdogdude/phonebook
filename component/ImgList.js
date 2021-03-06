import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Text, Thumbnail } from "native-base";

export default class ImgList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            contact: []
        }
    }

    // componentDidMount() {

    //     let ImgList = [];

    //     fetch('https://randomuser.me/api/?results=15&inc=name,picture')
    //     .then((response) => response.json())
    //     .then((responseJson) => {
            
    //         console.log(responseJson);
    //         ImgList = responseJson.results.map((item) => {
           
    //             return ({
                   
    //                 fname: item.name.first,
    //                 lname: item.name.last,
    //                 img: item.picture.thumbnail
    //             }) 
    //         })
    //         console.log(ImgList);
    //         this.setState({
    //             contact: ImgList
    //         });
    //     });

    // }

    render() {
        let data = this.props.Data;
        return ( 
            <View style={{ flex: 1, flexDirection: 'row' }} >
                <ScrollView horizontal={true}  showsHorizontalScrollIndicator={false} >
                    {
                        data.map((item,index ) => {
                            return(
                                <View key={index} style={styles.contact}>
                                    <Thumbnail source={{ uri: item.img }} style={styles.thumbnail} />
                                    <Text style={styles.contactName}> {item.fname} </Text>
                                </View>
                            );
                        })
                    }
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    contactName: {
        fontWeight: "bold",
        color: "#333"
    },
    contact: {
        marginRight: 8,
        justifyContent: 'center',
        alignItems: 'center'
    }
});