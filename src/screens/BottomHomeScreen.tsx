/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
const av = new Animated.Value(0);
av.addListener(() => {
  return;
});
import React, {memo} from 'react';
import {Display} from '@utils';
import {Colors} from '@constants';
import HBOScreen from './HBOScreen';
import {BottomImage} from '@constants';
import HomeScreen from './HomeScreen';
import SportScreen from './SportScreen';
import {Platform, Animated, Image} from 'react-native';
import TelevisionScreen from './TelevisionScreen';
import Iconss from 'react-native-vector-icons/Fontisto';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
//
console.log(BottomImage);
const Tab = createBottomTabNavigator();
const BottomHomeScreen = () => {
  return (
    <Tab.Navigator
      screenListeners={{
        focus: () => {
          Animated.timing(av, {
            toValue: 1,
            duration: 200,
            useNativeDriver: true,
          }).start();
        },
      }}
      screenOptions={{
        tabBarActiveTintColor: Colors.DEFAULT_GREEN,
        // tabBarShowLabel: false,

        tabBarLabelStyle: {
          margin: 0,
          padding: 0,
          fontSize: 13,
          fontFamily: 'Shrikhand-Regular',
        },
        tabBarStyle: [
          {
            backgroundColor: 'rgb(38 38 38)',
            display: 'flex',
            paddingTop: 2,
            paddingBottom: Display.setWidth(4),
            borderTopWidth: 0,

            height: Platform.OS === 'ios' ? 71 : 65,
          },
          null,
        ],
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          // tabBarBadge: badgeHome ? badgeHome : null,
          headerShown: false,
          tabBarIcon: ({color}) => (
            // <Icon name="home-filled" size={28} color={color} />
            <Image
              // source={require('../assets/images/home.png')}
              source={BottomImage[0].image}
              // tintColor={color}
              style={{width: 28, height: 28}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="TV"
        component={TelevisionScreen}
        options={{
          // tabBarBadge: badgeCart ? badgeCart : null,
          headerShown: false,
          tabBarIcon: ({color}) => (
            // <Icons name="youtube-tv" size={28} color={color} />
            <Image
              source={BottomImage[1].image}
              // tintColor={color}
              style={{width: 28, height: 28}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Sports"
        component={SportScreen}
        options={{
          // tabBarBadge: enoughBookmark ? badgeBookmark : null,
          headerShown: false,
          tabBarIcon: ({color}) => (
            // <Icon name="sports-esports" size={32} color={color} />
            <Image
              source={BottomImage[2].image}
              // tintColor={color}
              style={{width: 28, height: 28}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="HBO GO"
        component={HBOScreen}
        options={{
          // tabBarBadge: badgeHome ? badgeHome : null,
          headerShown: false,
          tabBarIcon: ({color}) => (
            // <Iconss name="film" size={28} color={color} />
            <Image
              source={BottomImage[3].image}
              // tintColor={color}
              style={{width: 28, height: 28}}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default memo(BottomHomeScreen);
