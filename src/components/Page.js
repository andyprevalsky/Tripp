import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, Linking, } from 'react-native';
import { Icon } from 'native-base';

let deeplink = "https://m.uber.com/ul/?client_id="
const CLIENT_ID = "TXi5iR_jMl5ehjkgxdj-VRjVSAonqfM_"
const pickupLat = 30.2824914
const pickupLong = -97.7385544
const pickupNickName = "Jester West"
const pickupFaddress = "201%20East%21St%2C%20Austin%20Francisco%2C%20TX%2078705"
const dropoffLat = 30.2826804
const dropoffLong = -97.746646
const dropoffNickName = "Kesos Tacos"
const dropoffFaddress = "1%20West%20Martin%20%Luther%20King%20Blvd%2C%20Austin%2C%20TX%2078705"

class Page extends Component {
    render() {
        let uniqueDeepLink = deeplink + CLIENT_ID + "&action=setPickup&pickup[latitude]=" + pickupLat + 
        "&pickup[longitude]=" + pickupLong + "&pickup[nickname]=" + pickupNickName + 
        "&pickup[formatted_address]=" + pickupFaddress + "&dropoff[latitude]=" + dropoffLat +
        "&dropoff[longitude]=" + dropoffLong + "&dropoff[nickname]=" + dropoffNickName +
        "&dropoff[formatted_address]="  + dropoffFaddress + 
        "&product_id=a1111c8c-c720-46c3-8534-2fcdd730040d&link_text=View%20team%20roster&partner_deeplink=partner%3A%2F%2Fteam%2F9383"
        let tag = this.props.price
        for (let i = 0; i < this.props.tags.length; i++) {
          tag += " - " + this.props.tags[i];
        }
        
        return (
          <View style={{flex:1}}>
            <Image
              source={this.props.image}
              style={styles.imageStyle}
            />
            <View style={styles.containerStyle}>
                <View style={styles.textContainer}>
                <Text style={styles.titleStyle}>{this.props.head}</Text>
                <Text style={{color: "#757575", paddingTop: 10, paddingBottom: 10}}>{tag} </Text>
                </View>
                <View style={styles.labelContainer}>
                <Text style={styles.labelStyle}> {this.props.time} </Text>
                <Text style={styles.labelStyle}> {this.props.rating} {" "}
                    <Icon 
                    name="star" 
                    style={{fontSize: 14, paddingLeft: 5, paddingRight: 5, color:"gold"}}
                    />
                    {" "}
                </Text>
                <Text style={styles.labelStyle}> {this.props.discount} </Text>
                </View>
            </View>
            <View style={styles.bodyStyle}>
              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  onPress={() => {Linking.openURL(uniqueDeepLink).catch((err) => console.error('An error occurred', err));}}
                >
                  <Image 
                    style={styles.buttonStyle}
                    source={require("../Images/rideButton.png")} 
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        );
    }
}

const styles = {
    containerStyle: {
      borderWidth: 0,
      borderRadius: 0,
      backgroundColor: '#fff',
      borderColor: '#ddd',
      borderBottomWidth: 0,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 2,
      elevation: 1,
      position: "absolute",
      top: 200,
      left: 12.5,
      paddingBottom: 10,
    },
    textContainer: {
      width: 350,
      paddingLeft: 15,
      paddingTop: 15,
    },
    titleStyle: {
      fontSize: 25,
      color: "#252525",   
      paddingTop: 10 
    },
    bodyTextStyle: {
      fontSize: 12,
      color: '#828282',
    },
    imageStyle: {
      height: 250,
      width: "100%",
      alignSelf: 'center'
    },
    labelContainer: {
      flexDirection: 'row',
      paddingLeft: 15,
      paddingTop: 7,
      paddingBottom: 15
    },
    labelStyle: {
      backgroundColor: "#F5F5F5",
      fontSize: 14,
      marginRight: 10,
      color: "#252525"
    },
    buttonStyle: {
      width: 220, 
      height: 40, 
      borderRadius: 7
    },
    bodyStyle: {
      marginTop: 100,
      flex: 1,
      backgroundColor: "grey"
    },
    buttonContainer: {
      alignSelf: "center"
    }
  };

export default Page;
