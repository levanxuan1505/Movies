/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {Platform} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icons from 'react-native-vector-icons/Ionicons';
import Iconss from 'react-native-vector-icons/Fontisto';
import {Colors} from '@constants';
import HomeScreen from './HomeScreen';
import SportScreen from './SportScreen';
import HBOScreen from './HBOScreen';
import TelevisionScreen from './TelevisionScreen';
// redux import
// import {useSelector} from 'react-redux';
import {Display} from '@utils';
//
const Tab = createBottomTabNavigator();
export default function BottomHomeScreen() {
  //reduxSelector
  //   const notification = useSelector((state: any) => state.notification);
  //   const bookmark = useSelector((state: any) => state.bookmark);
  //   const userName = useSelector((state: any) => state.user);
  //   const cart = useSelector((state: any) => state.cart);
  //   const enoughCondition = userName[0].userName && cart.length;
  //   const enoughBookmark = userName[0].userName && bookmark.length;
  //   //using Redux Toolkit
  //   const badgeHome = userName[0].userName && notification.length;
  //   const badgeCart = enoughCondition;
  //   const badgeBookmark = bookmark.length;
  //
  return (
    <Tab.Navigator
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
          tabBarIcon: ({color}) => <Icons name="tv" size={28} color={color} />,
        }}
      />
      <Tab.Screen
        name="Sport"
        component={SportScreen}
        options={{
          // tabBarBadge: enoughBookmark ? badgeBookmark : null,
          headerShown: false,
          tabBarIcon: ({color}) => (
            <Icon name="sports-rugby" size={28} color={color} />
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
