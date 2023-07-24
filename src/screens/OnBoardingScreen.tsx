import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';
import React from 'react';
import Onboarding from 'react-native-onboarding-swiper';
import Lottie from 'lottie-react-native';
const {width, height} = Dimensions.get('window');
const OnBoardingScreen = () => {
  return (
    <View style={styles.container}>
      <Onboarding
        bottomBarHighlight={false}
        pages={[
          {
            backgroundColor: '#CEE8E7',
            image: (
              <View style={styles.lottie}>
                <Lottie
                  source={require('../assets/OnboardingAnimations/1.json')}
                  autoPlay
                  loop
                />
              </View>
            ),
            title: 'Onboarding',
            subtitle: 'Done with React Native Onboarding Swiper',
          },
          {
            backgroundColor: '#A3A3A3',
            image: (
              <View style={styles.lottie}>
                <Lottie
                  source={require('../assets/OnboardingAnimations/2.json')}
                  autoPlay
                  loop
                />
              </View>
            ),
            title: 'Onboarding',
            subtitle: 'Done with React Native Onboarding Swiper',
          },
          {
            backgroundColor: '#4A61A8',
            image: (
              <View style={styles.lottie}>
                <Lottie
                  source={require('../assets/OnboardingAnimations/3.json')}
                  autoPlay
                  loop
                />
              </View>
            ),
            title: 'Onboarding',
            subtitle: 'Done with React Native Onboarding Swiper',
          },
        ]}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  lottie: {
    width: width * 0.9,
    height: width,
  },
});
export default OnBoardingScreen;
