/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Colors} from '../constants';
import LottieView from 'lottie-react-native';
import {TouchableOpacity, Text, View} from 'react-native';
const Button = ({title, logo, onPress = () => {}}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={{
        height: 55,
        width: '100%',
        backgroundColor: Colors.DEFAULT_GREEN,
        marginVertical: 20,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
      }}>
      <Text
        style={{
          fontSize: 36,
          paddingRight: 5,
          color: Colors.DEFAULT_WHITE,
          fontFamily: 'Shrikhand-Regular',
        }}>
        {title}
      </Text>
      <View style={{width: 60, height: 60}}>
        <LottieView
          style={{}}
          source={
            logo === 'login'
              ? require('../assets/OnboardingAnimations/login.json')
              : require('../assets/OnboardingAnimations/register.json')
          }
          autoPlay
          loop
        />
      </View>
    </TouchableOpacity>
  );
};
export default Button;
