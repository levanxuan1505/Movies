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
import {Colors} from '@constants';
import {Freeze} from 'react-freeze';
import React, {useState} from 'react';
const {width} = Dimensions.get('window');
import SplashScreen from './SplashScreen';
import LottieView from 'lottie-react-native';
import {RootStackParams} from '@navigators';
import {setItem} from '../utils/asyncStorage';
import {useNavigation} from '@react-navigation/native';
import Onboarding from 'react-native-onboarding-swiper';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const OnBoardingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  const handleDone = () => {
    navigation.replace('Drawer');
    setItem('onboarded', '1');
  };
  const DoneButton = ({...props}) => {
    return (
      <TouchableOpacity
        className="py-[16px] flex-row items-center px-[20] bg-white"
        {...props}>
        <Text className="pr-[10px] text-[20px] color-greenColor font-Primary">
          Home
        </Text>
        <View className="w-[35px] h-[35px]">
          <LottieView
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
    backgroundColorDot = selected ? Colors.DEFAULT_GREEN : 'rgba(0,0,0,0.4)';
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
        className="py-[18px] flex-row item-center px-[40] bg-white"
        style={styles.next}
        {...props}>
        <Text className=" text-[20px] color-greenColor font-Primary">Next</Text>
      </TouchableOpacity>
    );
  };
  const SkipButton = ({...props}) => {
    return (
      <TouchableOpacity
        className="py-[18px] flex-row item-center px-[40] bg-white"
        style={styles.skip}
        {...props}>
        <Text className="text-[20px] color-greenColor font-Primary">Skip</Text>
      </TouchableOpacity>
    );
  };
  return (
    <Freeze freeze={false}>
      {isLoading ? (
        <SplashScreen setIsLoading={setIsLoading} />
      ) : (
        <View style={styles.container}>
          <Onboarding
            skipToPage={2}
            onDone={handleDone}
            bottomBarHeight={110}
            initialNumToRender={0}
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
                title: 'Netflix',
                subtitle: 'Watch Money Heist | Netflix Official Site',
                backgroundColor: Colors.LIGHT_GREEN,
                image: (
                  <View style={styles.lottie}>
                    <LottieView
                      source={require('../assets/OnboardingAnimations/1.json')}
                      autoPlay
                      loop
                    />
                  </View>
                ),
              },
              {
                title: 'HBO_GO',
                subtitle: 'Home to Groundbreaking Series, Movies, Comedies ...',
                backgroundColor: Colors.DARK_FIVE,
                image: (
                  <View style={styles.lottie}>
                    <LottieView
                      source={require('../assets/OnboardingAnimations/2.json')}
                      autoPlay
                      loop
                    />
                  </View>
                ),
              },
              {
                title: 'Sports',
                subtitle: 'F1 - The Official Home of Formula 1® Racing',
                backgroundColor: Colors.DARK_FOUR,
                image: (
                  <View style={styles.lottie}>
                    <LottieView
                      source={require('../assets/OnboardingAnimations/3.json')}
                      autoPlay
                      loop
                    />
                  </View>
                ),
              },
            ]}
          />
        </View>
      )}
    </Freeze>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  lottie: {
    width: width,
    height: width * 0.9,
  },
  skip: {
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  next: {
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  title: {
    fontSize: 50,
    color: Colors.SECONDARY_GREEN,
    fontFamily: 'Shrikhand-Regular',
  },
  subTitle: {
    fontSize: 22,
    color: Colors.SECONDARY_RED,
    fontFamily: 'Rochester-Regular',
  },
  dotButton: {
    borderRadius: 10,
    marginHorizontal: 5,
  },
});
export default OnBoardingScreen;
