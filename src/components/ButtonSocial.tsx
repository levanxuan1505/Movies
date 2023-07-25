/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import {Colors} from '../constants';
import LottieView from 'lottie-react-native';

const ButtonSocial = ({title, logo, onPress = () => {}}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={{
        height: 55,
        width: '100%',
        backgroundColor:
          logo === 'facebook' ? Colors.GOOGLE_BLUE : Colors.SECONDARY_GREEN,
        marginVertical: 7,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
      }}>
      <View style={{width: 50, height: 50}}>
        <LottieView
          style={{}}
          source={
            logo === 'facebook'
              ? require('../assets/OnboardingAnimations/facebook.json')
              : require('../assets/OnboardingAnimations/google.json')
          }
          autoPlay
          loop
        />
      </View>
      <Text
        style={{color: Colors.DEFAULT_WHITE, fontWeight: '500', fontSize: 20}}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};
export default ButtonSocial;
