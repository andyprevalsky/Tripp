import React from 'react';
import {requireNativeComponent, StyleSheet, NativeModules,View} from 'react-native';
import PropTypes from 'prop-types';

const style = StyleSheet.create({
  button: {
    width: 250,
    height: 50,
    backgroundColor: 'black',
    borderRadius: 7,
  },
});


const UberRideRequestButton = (props) => {
  const {pickup, dropoff} = props;
  return (
    <View/>
  // return (
  //   <NativeModules.UberRideRequestButton
  //     style={[style.button, props.style]}
  //     pickup={pickup}
  //     dropoff={dropoff}
  //   />
  );
};

UberRideRequestButton.propTypes = {
  pickup: PropTypes.object,
  dropoff: PropTypes.object,
};


export { UberRideRequestButton };