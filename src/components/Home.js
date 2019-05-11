import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TouchableHighlight, ScrollView, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Card } from './common/Card';
import { Icon } from 'native-base';

images = {
    KesosTacos: require("../Images/KesosTacos.png"),
    KismetCafe: require( "../Images/KismetCafe.png"),
    SpartanPizza: require("../Images/SpartanPizza.png"),
    SuperBurrito: require("../Images/SuperBurrito.png"),
    LookNoodles: require("../Images/LookNoodles.png")
}
class Home extends Component {
    state = {Cards: []}
 
    componentWillMount() {
        this.state.Cards.push({
            image: images.KesosTacos,
            name: "Kesos Tacos",
            price: "$",
            time: "20-30 min",
            discount: "15% off w/ Tripp",
            tags: ["Breakfast and Brunch", "Mexican", "Tex Mex"],
            rating: "4.4"
        })
        this.state.Cards.push({
            image: images.KismetCafe,
            name: "Kismet Cage",
            price: "$$",
            time: "30-40 min",
            tags: ["Halal", "Greek", "Mediterranean"],
            discount: "20% off w/ Tripp",
            rating: "4.5"
        })
        this.state.Cards.push({
            image: images.SpartanPizza,
            name: "Spartan Pizza",
            tags: ["Sandwhiches", "Pizza"],
            price: "$",
            time: "25-35 min",
            discount: "25% off w/ Tripp",
            rating: "4.6"
        })
        this.state.Cards.push({
            image: images.SuperBurrito,
            name: "Super Burrito",
            tags: ["Mexican", "Breakfast and Brunch"],
            price: "$",
            time: "15-25 min",
            discount: "10% off w/ Tripp",
            rating: "4.6"
        })
        this.state.Cards.push({
            image: images.LookNoodles,
            name: "Look Noodles & More",
            tags: ["Chinese"],
            price: "$",
            time: "15-25 min",
            discount: "15% off w/ Tripp",
            rating: "4.6"
        })
    }
    render() {
        return (
            <View style={styles.ViewContainer}>
                <View style={styles.headerWrap}>
                    <View>
                        <Text
                            style={styles.header}
                        > Tripp </Text>
                    </View>
                    <Text
                        style={styles.header2}
                    > Select a Discounted Restaraunt Below </Text>
                </View>
                <View>
                <ScrollView bounces={true} style={{width: '100%', height: '100%'}}>
                {this.state.Cards.map((item, index) => {
                        return (
                            <TouchableOpacity
                                key={index}
                                onPress={() => Actions.page({
                                    "head":item.name,
                                    "tags":item.tags,
                                    "price":item.price,
                                    "time":item.time,
                                    "rating":item.rating,
                                    "discount":item.discount,
                                    "image":item.image,
                                })}
                            >
                            <Card
                                name={item.name}
                                tags={item.tags}
                                price={item.price}
                                time={item.time}
                                rating={item.rating}
                                discount={item.discount}
                                image={item.image}
                            />
                            </TouchableOpacity>
                        )
                })}
                </ScrollView>
                </View>
                <Icon 
                    onPress={()=>Actions.page()}
                    name="help" 
                    type="MaterialIcons"
                    style={{position: "absolute", bottom: 10, right: 30, color: "black"}}
                />
            </View>
        );
    }
}

const styles = {
    headerWrap: {
        color: 'white',
        borderBottomWidth: 0,
        borderColor: '#ddd',
        shadowColor: '#000',
        borderBottomWidth: 1,
        backgroundColor: 'white',
        paddingTop: 50,
        elevation: 1,
    },
    buttonText: {
        alignSelf: 'center',
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold',
    },
    divider: {
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
    },
    header: {
        marginLeft: 15,
        marginBottom: 7.5,
        fontSize: 40,
        fontFamily: 'System',
        fontWeight: 'bold',
    },
    header2: {
        fontSize: 20,
        marginLeft: 15,
        marginBottom: 17.5,
    },
    button: {
        backgroundColor: '#FF7C93',
        margin: 15,
        marginBottom: 0,
        marginTop: 15,
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 5,
    },
    ViewContainer: {
        width: '100%',
        height: '100%',
        flexDirection: 'column',
        alignSelf: 'center',
    },
    footer: {
        backgroundColor: 'rgba(246, 246, 246, 0.98)',
        width: '100%',
        position: 'absolute',
        paddingBottom: 40,
        bottom: 0,
    },
};
