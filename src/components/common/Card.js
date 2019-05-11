import React from 'react';
import { View, Text, Image } from 'react-native';
import { Icon } from 'native-base';

const Card = (props) => {
  let tag = props.price
  for (let i = 0; i < props.tags.length; i++) {
    tag += " - " + props.tags[i];
  }
  return (
    <View style={styles.containerStyle}>
        <Image
          source={props.image}
          style={styles.imageStyle}
        />
        <View style={styles.textContainer}>
          <Text style={styles.titleStyle}>{props.name}</Text>
          <Text style={{color: "#757575", paddingTop: 7}}>{tag} </Text>
        </View>
        <View style={styles.labelContainer}>
          <Text style={styles.labelStyle}> {props.time} </Text>
          <Text style={styles.labelStyle}> {props.rating} {" "}
            <Icon 
              name="star" 
              style={{fontSize: 14, paddingLeft: 5, paddingRight: 5, color:"gold"}}
              />
            {" "}
          </Text>
          <Text style={styles.labelStyle}> {props.discount} </Text>
        </View>
    </View>
  );
};

const styles = {
  containerStyle: {
    width: '100%',
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
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10
  },
  textContainer: {
    width: 350,
    paddingLeft: 15,
  },
  titleStyle: {
    fontSize: 15,
    color: "#252525",   
    paddingTop: 10 
  },
  bodyTextStyle: {
    fontSize: 12,
    color: '#828282',
  },
  imageStyle: {
    marginTop: 15,
    height: 150,
    width: 325,
    alignSelf: 'center'
  },
  labelContainer: {
    flexDirection: 'row',
    paddingLeft: 15,
    paddingTop: 7
  },
  labelStyle: {
    backgroundColor: "#F5F5F5",
    fontSize: 14,
    marginRight: 10,
    color: "#252525"
  }
};

export { Card };
