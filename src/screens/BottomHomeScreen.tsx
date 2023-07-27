/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
const av = new Animated.Value(0);
av.addListener(() => {
  return;
});
import React from 'react';
import {Display} from '@utils';
import {Colors} from '@constants';
import HBOScreen from './HBOScreen';
import HomeScreen from './HomeScreen';
import SportScreen from './SportScreen';
import {Platform, Animated} from 'react-native';
import TelevisionScreen from './TelevisionScreen';
import Iconss from 'react-native-vector-icons/Fontisto';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

//
const Tab = createBottomTabNavigator();
export default function BottomHomeScreen() {
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
        tabBarStyle: [
          {
            backgroundColor: 'rgb(38 38 38)',
            display: 'flex',
            paddingTop: 5,
            paddingBottom: Display.setWidth(5),
            borderTopWidth: 0,
            height: Platform.OS === 'ios' ? 70 : 65,
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
            <Icon name="home-filled" size={28} color={color} />
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
            <Icons name="youtube-tv" size={28} color={color} />
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
            <Icon name="sports-esports" size={32} color={color} />
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
            <Iconss name="film" size={28} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
