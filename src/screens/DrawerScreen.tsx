/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import React, {memo} from 'react';
import {BottomHomeScreen} from '@screens';
import CustomDrawerScreen from './CustomDrawerScreen';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

const DrawerScreen = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerScreen {...props} />}
      screenOptions={{headerShown: false}}>
      <Drawer.Screen name="DrawerScreen" component={BottomHomeScreen} />
    </Drawer.Navigator>
  );
};
export default memo(DrawerScreen);
