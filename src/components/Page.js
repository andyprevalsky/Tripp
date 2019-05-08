import React, { Component } from 'react';
import { View, Text, TouchableHighlight, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Card } from './Card';
import { Icon } from 'native-base';
import { UberRideRequestButton } from './RideRequestButton'
class Page extends Component {
    state = {Cards: []}

    render() {
        let tag = this.props.price
        for (let i = 0; i < this.props.tags.length; i++) {
          tag += " - " + this.props.tags[i];
        }
        
        return (
          <View style={{flex:1}}>
            <View style={{position: "absolute", bottom: 20, right:100}} >
              <UberRideRequestButton
                pickup={{latitude: 0.0, longitude: 0.0}}
                dropoff={{latitude: 1.0, longitude: 1.0}} 
              />
            </View>
            <View
                style={styles.main}
                backgroundColor="blue"
            >   
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
    }
  };

export default Page;
