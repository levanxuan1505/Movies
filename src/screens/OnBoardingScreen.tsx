/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
const {width} = Dimensions.get('window');
import LottieView from 'lottie-react-native';
import {useNavigation} from '@react-navigation/native';
import Onboarding from 'react-native-onboarding-swiper';
import Icon from 'react-native-vector-icons/FontAwesome';

const OnBoardingScreen = () => {
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
  return (
    <View style={styles.container}>
      <Onboarding
        bottomBarHighlight={false}
        onDone={handleDone}
        SkipButtonComponent={SkipButton}
        DoneButtonComponent={DoneButton}
        NextButtonComponent={NextButton}
        DotComponent={DotButton}
        titleStyles={styles.title}
        // showPagination={false}
        transitionAnimationDuration={1000}
        subTitleStyles={styles.subTitle}
        skipToPage={2}
        bottomBarHeight={110}
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
    paddingHorizontal: 20,
    paddingVertical: 12,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
  },
  textButton: {
    fontSize: 20,
    fontWeight: '800',
    color: '#00AA13',
  },
  title: {
    fontSize: 40,
    fontWeight: '900',
    color: '#FBA83C',
  },
  subTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#FBA83C',
  },
  dotButton: {
    marginHorizontal: 5,
    borderRadius: 10,
  },
});
export default OnBoardingScreen;
