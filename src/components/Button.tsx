/* eslint-disable react-native/no-inline-styles */
import React, {memo} from 'react';
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
          color: Colors.DEFAULT_WHITE,
          fontWeight: 'bold',
          paddingRight: 5,
          fontSize: 25,
        }}>
        {title}
      </Text>
      <View style={{width: 40, height: 40}}>
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
export default memo(Button);
