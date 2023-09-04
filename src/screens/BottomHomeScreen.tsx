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
import {BottomImage} from '@constants';
import SportScreen from './SportScreen';
import TelevisionScreen from './TelevisionScreen';
import {Platform, Animated, Image, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
//

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
        tabBarStyle: styles.tabBarStyle,
        tabBarLabelStyle: styles.tabBarLabelStyle,
        tabBarActiveTintColor: Colors.DEFAULT_GREEN,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Image source={BottomImage[0].image} style={styles.Icon} />
          ),
        }}
      />
      <Tab.Screen
        name="TV"
        component={TelevisionScreen}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Image source={BottomImage[1].image} style={styles.Icon} />
          ),
        }}
      />
      <Tab.Screen
        name="Sports"
        component={SportScreen}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Image source={BottomImage[2].image} style={styles.Icon} />
          ),
        }}
      />
      <Tab.Screen
        name="HBO GO"
        component={HBOScreen}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Image source={BottomImage[3].image} style={styles.Icon} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default BottomHomeScreen;
const styles = StyleSheet.create({
  Icon: {
    width: 28,
    height: 28,
  },
  tabBarLabelStyle: {
    margin: 0,
    padding: 0,
    fontSize: 13,
    fontFamily: 'Shrikhand-Regular',
  },
  tabBarStyle: {
    display: 'flex',
    paddingTop: 2,
    borderTopWidth: 0,
    backgroundColor: 'rgb(38 38 38)',
    paddingBottom: Display.setWidth(4),
    height: Platform.OS === 'ios' ? 71 : 65,
  },
});
