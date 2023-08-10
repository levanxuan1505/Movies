/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable curly */
import React, {useContext, useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  UserScreen,
  ActorScreen,
  LogInScreen,
  MoviesScreen,
  SearchScreen,
  SeeAllScreen,
  DrawerScreen,
  SettingScreen,
  MyListsScreen,
  WatchingScreen,
  RegisterScreen,
  AnimationScreen,
  SeeAllHBOScreen,
  VideoFullScreen,
  TermsOfUseScreen,
  OnBoardingScreen,
  TransactionScreen,
  MoviesOphimScreen,
  LogInSmartTVScreen,
  ManageDevicesScreen,
  PrivacyPolicyScreen,
  SeeAllCoreAPIScreen,
} from '@screens';

import auth from '@react-native-firebase/auth';
import {AuthContext} from './AuthProvider';

export type RootStackParams = {
  openDrawer(): any;
  User;
  Home;
  Actor;
  LogIn;
  Movies: {
    item: Object;
  };
  Drawer;
  Search;
  SeeAll;
  MyList;
  LogInTV;
  Settings;
  Register;
  Watching;
  Animation;
  SeeAllHBO: {
    title: string;
    data: any;
    firstItem: number;
  };
  VideoFull;
  TermsOfUse;
  OnBoarding;
  Transaction;
  MoviesOphim;
  ManageDevices;
  PrivacyPolicy;
  SeeAllCoreAPIS;
};
const Stack = createStackNavigator<RootStackParams>();
//

const Routes = () => {
  const {user, setUser}: any = useContext(AuthContext);
  const [initializing, setInitializing] = useState(true);

  const onAuthStateChanged = (user: any) => {
    setUser(user);
    if (initializing) setInitializing(false);
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="OnBoarding"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="User" component={UserScreen} />
        <Stack.Screen name="Actor" component={ActorScreen} />
        <Stack.Screen name="LogIn" component={LogInScreen} />
        <Stack.Screen name="Movies" component={MoviesScreen} />
        <Stack.Screen name="Drawer" component={DrawerScreen} />
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="SeeAll" component={SeeAllScreen} />
        <Stack.Screen name="MyList" component={MyListsScreen} />
        <Stack.Screen name="Settings" component={SettingScreen} />
        <Stack.Screen name="Watching" component={WatchingScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Animation" component={AnimationScreen} />
        <Stack.Screen name="SeeAllHBO" component={SeeAllHBOScreen} />
        <Stack.Screen name="LogInTV" component={LogInSmartTVScreen} />
        <Stack.Screen name="OnBoarding" component={OnBoardingScreen} />
        <Stack.Screen name="VideoFull" component={VideoFullScreen} />
        <Stack.Screen name="TermsOfUse" component={TermsOfUseScreen} />
        <Stack.Screen name="MoviesOphim" component={MoviesOphimScreen} />
        <Stack.Screen name="Transaction" component={TransactionScreen} />
        <Stack.Screen name="ManageDevices" component={ManageDevicesScreen} />
        <Stack.Screen name="SeeAllCoreAPIS" component={SeeAllCoreAPIScreen} />
        <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicyScreen} />
        {/* <Stack.Screen name="BottomHome" component={BottomHomeScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
