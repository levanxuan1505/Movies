/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {Button, View} from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {BottomHomeScreen} from '@screens';
import CustomDrawerScreen from './CustomDrawerScreen';
// import {NavigationContainer} from '@react-navigation/native';

const Drawer = createDrawerNavigator();

export default function DrawerScreen() {
  return (
    <Drawer.Navigator
      // useLegacyImplementation
      drawerContent={props => <CustomDrawerScreen {...props} />}
      screenOptions={{headerShown: false}}>
      <Drawer.Screen name="DrawerScreen" component={BottomHomeScreen} />
      {/* <Drawer.Screen name="Bottom" component={BottomHomeScreen} /> */}
      {/* <Drawer.Screen name="Notifications" component={NotificationsScreen} /> */}
    </Drawer.Navigator>
  );
}
