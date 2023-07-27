/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
const {width} = Dimensions.get('window');
import SplashScreen from './SplashScreen';
import LottieView from 'lottie-react-native';
import {useNavigation} from '@react-navigation/native';
import Onboarding from 'react-native-onboarding-swiper';
const OnBoardingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const navigation = useNavigation();
  const handleDone = () => {
    navigation.replace('Drawer');
  };
  const DoneButton = ({...props}) => {
    return (
      <TouchableOpacity style={styles.doneButton} {...props}>
        <Text style={[styles.textButton, {paddingRight: 10}]}>Home</Text>
        <View style={{width: 35, height: 35}}>
          <LottieView
            style={{}}
            source={require('../assets/OnboardingAnimations/4.json')}
            autoPlay
            loop
          />
        </View>
      </TouchableOpacity>
    );
  };
  const DotButton = ({selected}) => {
    let backgroundColorDot;
    backgroundColorDot = selected ? '#00AA13' : 'rgba(0,0,0,0.4)';
    return (
      <View
        style={[
          styles.dotButton,
          {
            width: selected ? 16 : 10,
            height: selected ? 16 : 10,
            backgroundColor: backgroundColorDot,
          },
        ]}></View>
    );
  };
  const NextButton = ({...props}) => {
    return (
      <TouchableOpacity
        style={[
          styles.doneButton,
          {
            paddingHorizontal: 40,
            paddingVertical: 18,
            borderTopLeftRadius: 10,
            borderBottomLeftRadius: 10,
          },
        ]}
        {...props}>
        <Text style={styles.textButton}>Next</Text>
      </TouchableOpacity>
    );
  };
  const SkipButton = ({...props}) => {
    return (
      <TouchableOpacity
        style={[
          styles.doneButton,
          {
            paddingHorizontal: 40,
            paddingVertical: 18,
            borderTopRightRadius: 10,
            borderBottomRightRadius: 10,
          },
        ]}
        {...props}>
        <Text style={styles.textButton}>Skip</Text>
      </TouchableOpacity>
    );
  };
  return isLoading ? (
    <SplashScreen setIsLoading={setIsLoading} />
  ) : (
    <View style={styles.container}>
      <Onboarding
        skipToPage={2}
        onDone={handleDone}
        bottomBarHeight={110}
        DotComponent={DotButton}
        titleStyles={styles.title}
        bottomBarHighlight={false}
        SkipButtonComponent={SkipButton}
        DoneButtonComponent={DoneButton}
        NextButtonComponent={NextButton}
        subTitleStyles={styles.subTitle}
        transitionAnimationDuration={1000}
        pages={[
          {
            backgroundColor: '#CEE8E7',
            image: (
              <View style={styles.lottie}>
                <LottieView
                  source={require('../assets/OnboardingAnimations/1.json')}
                  autoPlay
                  loop
                />
              </View>
            ),
            title: 'Netflix',
            subtitle: 'Watch Money Heist | Netflix Official Site',
          },
          {
            backgroundColor: '#A3A3A3',
            image: (
              <View style={styles.lottie}>
                <LottieView
                  source={require('../assets/OnboardingAnimations/2.json')}
                  autoPlay
                  loop
                />
              </View>
            ),
            title: 'HBO_GO',
            subtitle: 'Home to Groundbreaking Series, Movies, Comedies ...',
          },
          {
            backgroundColor: '#FCE6CD',
            image: (
              <View style={styles.lottie}>
                <LottieView
                  source={require('../assets/OnboardingAnimations/3.json')}
                  autoPlay
                  loop
                />
              </View>
            ),
            title: 'Sports',
            subtitle: 'F1 - The Official Home of Formula 1® Racing',
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
    width: width,
    height: width * 0.9,
  },
  doneButton: {
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: 'white',
  },
  textButton: {
    fontSize: 20,
    color: '#00AA13',
    fontWeight: '800',
  },
  title: {
    fontSize: 40,
    color: '#FBA83C',
    fontWeight: '900',
  },
  subTitle: {
    fontSize: 20,
    color: '#FBA83C',
    fontWeight: '600',
  },
  dotButton: {
    borderRadius: 10,
    marginHorizontal: 5,
  },
});
export default OnBoardingScreen;
