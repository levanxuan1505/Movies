/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {BottomHomeScreen} from '@screens';
import CustomDrawerScreen from './CustomDrawerScreen';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

export default function DrawerScreen() {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerScreen {...props} />}
      screenOptions={{headerShown: false}}>
      <Drawer.Screen name="DrawerScreen" component={BottomHomeScreen} />
    </Drawer.Navigator>
  );
}
