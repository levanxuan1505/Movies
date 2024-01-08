/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import React, {lazy, Suspense} from 'react';
import CustomDrawerScreen from './CustomDrawerScreen';
import {createDrawerNavigator} from '@react-navigation/drawer';
const BottomHomeScreen = lazy(() => import('./BottomHomeScreen'));
import {Freeze} from 'react-freeze';
import Orientation from 'react-native-orientation-locker';
const Drawer = createDrawerNavigator();

const DrawerScreen = () => {
  Orientation.lockToPortrait();
  return (
    <Freeze freeze={false}>
      <Drawer.Navigator
        drawerContent={props => <CustomDrawerScreen {...props} />}
        screenOptions={{headerShown: false}}>
        <Drawer.Screen name="DrawerScreen">
          {props => (
            <Suspense>
              <BottomHomeScreen {...props} />
            </Suspense>
          )}
        </Drawer.Screen>
      </Drawer.Navigator>
    </Freeze>
  );
};
export default DrawerScreen;
