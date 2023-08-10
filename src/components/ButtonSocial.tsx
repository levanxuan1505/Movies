/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Colors} from '../constants';
import LottieView from 'lottie-react-native';
import {TouchableOpacity, Text, View} from 'react-native';

const ButtonSocial = ({title, logo, onPress = () => {}}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={{
        height: 55,
        width: '50%',
        marginVertical: 7,
        backgroundColor:
          logo === 'facebook'
            ? Colors.FACEBOOK_BLUE
            : logo === 'google'
            ? Colors.SECONDARY_GREEN
            : logo === 'apple'
            ? Colors.DARK_FIVE
            : Colors.GOOGLE_BLUE,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
      }}>
      <View style={{width: 35, height: 35}}>
        <LottieView
          source={
            logo === 'facebook'
              ? require('../assets/OnboardingAnimations/facebook.json')
              : logo === 'google'
              ? require('../assets/OnboardingAnimations/google.json')
              : logo === 'apple'
              ? require('../assets/OnboardingAnimations/apple.json')
              : require('../assets/OnboardingAnimations/twitter.json')
          }
          autoPlay
          loop
        />
      </View>
      <Text
        style={{
          color: Colors.DEFAULT_WHITE,
          fontFamily: 'Shrikhand-Regular',
          fontSize: 13,
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};
export default ButtonSocial;
