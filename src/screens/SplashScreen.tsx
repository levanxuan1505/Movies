/* eslint-disable react-native/no-inline-styles */
import {Dimensions, View} from 'react-native';
import React, {memo, Dispatch, SetStateAction} from 'react';
import LottieView from 'lottie-react-native';
let {width, height} = Dimensions.get('window');
interface SplashProps {
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}
const SplashScreen = ({setIsLoading}: SplashProps) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        height: height,
        width: width,
        margin: 0,
        backgroundColor: '#CEE8E7',
      }}>
      <LottieView
        source={require('../assets/OnboardingAnimations/splash.json')}
        autoPlay
        loop={false}
        onAnimationFinish={() => setIsLoading(false)}
      />
    </View>
  );
};

export default memo(SplashScreen);
