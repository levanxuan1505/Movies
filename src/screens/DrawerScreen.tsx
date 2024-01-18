/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import React, {lazy} from 'react';
import CustomDrawerScreen from './CustomDrawerScreen';
import Orientation from 'react-native-orientation-locker';
import {createDrawerNavigator} from '@react-navigation/drawer';
const BottomHomeScreen = lazy(() => import('./BottomHomeScreen'));
const Drawer = createDrawerNavigator();

const DrawerScreen = () => {
  Orientation.lockToPortrait();
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerScreen {...props} />}
      screenOptions={{headerShown: false}}>
      <Drawer.Screen name="DrawerScreen">
        {props => <BottomHomeScreen {...props} />}
      </Drawer.Screen>
    </Drawer.Navigator>
  );
};
export default DrawerScreen;
