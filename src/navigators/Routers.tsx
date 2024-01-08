/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable curly */
import React, {useContext, lazy, Suspense, useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const UserScreen = lazy(() => import('../screens/UserScreen'));
const ActorScreen = lazy(() => import('../screens/ActorScreen'));
const LogInScreen = lazy(() => import('../screens/LogInScreen'));
const MoviesScreen = lazy(() => import('../screens/MoviesScreen'));
const SearchScreen = lazy(() => import('../screens/SearchScreen'));
const SeeAllScreen = lazy(() => import('../screens/SeeAllScreen'));
const SettingScreen = lazy(() => import('../screens/SettingScreen'));
const MyListsScreen = lazy(() => import('../screens/MyListsScreen'));
const DrawerScreen = lazy(() => import('../screens/DrawerScreen'));
const WatchingScreen = lazy(() => import('../screens/WatchingScreen'));
const RegisterScreen = lazy(() => import('../screens/RegisterScreen'));
const SeeAllHBOScreen = lazy(() => import('../screens/SeeAllHBOScreen'));
const VideoFullScreen = lazy(() => import('../screens/VideoFullScreen'));
const TermsOfUseScreen = lazy(() => import('../screens/TermsOfUseScreen'));
const OnBoardingScreen = lazy(() => import('../screens/OnBoardingScreen'));
const TransactionScreen = lazy(() => import('../screens/TransactionScreen'));
const MoviesOphimScreen = lazy(() => import('../screens/MoviesOphimScreen'));
const LogInSmartTVScreen = lazy(() => import('../screens/LogInSmartTVScreen'));
const ManageDevicesScreen = lazy(
  () => import('../screens/ManageDevicesScreen'),
);
const PrivacyPolicyScreen = lazy(
  () => import('../screens/PrivacyPolicyScreen'),
);
const SeeAllCoreAPIScreen = lazy(
  () => import('../screens/SeeAllCoreAPIScreen'),
);
import {getItem} from '../utils/asyncStorage';
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
  const [showOnboarding, setShowOnboarding] = useState(null);

  const onAuthStateChanged = (user: any) => {
    setUser(user);
    if (initializing) setInitializing(false);
  };

  const checkIfAlreadyOnboarded = async () => {
    let onboarded = await getItem('onboarded');
    if (onboarded == 1) {
      // hide onboarding
      setShowOnboarding(false);
    } else {
      // show onboarding
      setShowOnboarding(true);
    }
  };
  useEffect(() => {
    checkIfAlreadyOnboarded();
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  if (showOnboarding == null) {
    return null;
  }
  if (showOnboarding) {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="OnBoarding"
          detachInactiveScreens={true}
          screenOptions={{headerShown: false}}>
          <Stack.Screen name="User">
            {props => (
              <Suspense>
                <UserScreen {...props} />
              </Suspense>
            )}
          </Stack.Screen>

          <Stack.Screen name="Actor">
            {props => (
              <Suspense>
                <ActorScreen {...props} />
              </Suspense>
            )}
          </Stack.Screen>

          <Stack.Screen name="LogIn">
            {props => (
              <Suspense>
                <LogInScreen {...props} />
              </Suspense>
            )}
          </Stack.Screen>

          <Stack.Screen name="Movies">
            {props => (
              <Suspense>
                <MoviesScreen {...props} />
              </Suspense>
            )}
          </Stack.Screen>

          <Stack.Screen name="SeeAll">
            {props => (
              <Suspense>
                <SeeAllScreen {...props} />
              </Suspense>
            )}
          </Stack.Screen>

          <Stack.Screen name="Search">
            {props => (
              <Suspense>
                <SearchScreen {...props} />
              </Suspense>
            )}
          </Stack.Screen>

          <Stack.Screen name="Settings">
            {props => (
              <Suspense>
                <SettingScreen {...props} />
              </Suspense>
            )}
          </Stack.Screen>

          <Stack.Screen name="MyList">
            {props => (
              <Suspense>
                <MyListsScreen {...props} />
              </Suspense>
            )}
          </Stack.Screen>

          <Stack.Screen name="Drawer">
            {props => (
              <Suspense>
                <DrawerScreen {...props} />
              </Suspense>
            )}
          </Stack.Screen>

          <Stack.Screen name="Watching">
            {props => (
              <Suspense>
                <WatchingScreen {...props} />
              </Suspense>
            )}
          </Stack.Screen>

          <Stack.Screen name="Register">
            {props => (
              <Suspense>
                <RegisterScreen {...props} />
              </Suspense>
            )}
          </Stack.Screen>

          <Stack.Screen name="SeeAllHBO">
            {props => (
              <Suspense>
                <SeeAllHBOScreen {...props} />
              </Suspense>
            )}
          </Stack.Screen>

          <Stack.Screen name="VideoFull">
            {props => (
              <Suspense>
                <VideoFullScreen {...props} />
              </Suspense>
            )}
          </Stack.Screen>

          <Stack.Screen name="TermsOfUse">
            {props => (
              <Suspense>
                <TermsOfUseScreen {...props} />
              </Suspense>
            )}
          </Stack.Screen>

          <Stack.Screen name="OnBoarding">
            {props => (
              <Suspense>
                <OnBoardingScreen {...props} />
              </Suspense>
            )}
          </Stack.Screen>

          <Stack.Screen name="Transaction">
            {props => (
              <Suspense>
                <TransactionScreen {...props} />
              </Suspense>
            )}
          </Stack.Screen>

          <Stack.Screen name="MoviesOphim">
            {props => (
              <Suspense>
                <MoviesOphimScreen {...props} />
              </Suspense>
            )}
          </Stack.Screen>

          <Stack.Screen name="LogInTV">
            {props => (
              <Suspense>
                <LogInSmartTVScreen {...props} />
              </Suspense>
            )}
          </Stack.Screen>

          <Stack.Screen name="ManageDevices">
            {props => (
              <Suspense>
                <ManageDevicesScreen {...props} />
              </Suspense>
            )}
          </Stack.Screen>

          <Stack.Screen name="PrivacyPolicy">
            {props => (
              <Suspense>
                <PrivacyPolicyScreen {...props} />
              </Suspense>
            )}
          </Stack.Screen>
          <Stack.Screen name="SeeAllCoreAPIS">
            {props => (
              <Suspense>
                <SeeAllCoreAPIScreen {...props} />
              </Suspense>
            )}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    );
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Drawer"
          detachInactiveScreens={true}
          screenOptions={{headerShown: false}}>
          <Stack.Screen name="User">
            {props => (
              <Suspense>
                <UserScreen {...props} />
              </Suspense>
            )}
          </Stack.Screen>

          <Stack.Screen name="Actor">
            {props => (
              <Suspense>
                <ActorScreen {...props} />
              </Suspense>
            )}
          </Stack.Screen>

          <Stack.Screen name="LogIn">
            {props => (
              <Suspense>
                <LogInScreen {...props} />
              </Suspense>
            )}
          </Stack.Screen>

          <Stack.Screen name="Movies">
            {props => (
              <Suspense>
                <MoviesScreen {...props} />
              </Suspense>
            )}
          </Stack.Screen>

          <Stack.Screen name="SeeAll">
            {props => (
              <Suspense>
                <SeeAllScreen {...props} />
              </Suspense>
            )}
          </Stack.Screen>

          <Stack.Screen name="Search">
            {props => (
              <Suspense>
                <SearchScreen {...props} />
              </Suspense>
            )}
          </Stack.Screen>

          <Stack.Screen name="Settings">
            {props => (
              <Suspense>
                <SettingScreen {...props} />
              </Suspense>
            )}
          </Stack.Screen>

          <Stack.Screen name="MyList">
            {props => (
              <Suspense>
                <MyListsScreen {...props} />
              </Suspense>
            )}
          </Stack.Screen>

          <Stack.Screen name="Drawer">
            {props => (
              <Suspense>
                <DrawerScreen {...props} />
              </Suspense>
            )}
          </Stack.Screen>

          <Stack.Screen name="Watching">
            {props => (
              <Suspense>
                <WatchingScreen {...props} />
              </Suspense>
            )}
          </Stack.Screen>

          <Stack.Screen name="Register">
            {props => (
              <Suspense>
                <RegisterScreen {...props} />
              </Suspense>
            )}
          </Stack.Screen>

          <Stack.Screen name="Animation">
            {props => (
              <Suspense>
                <AnimationScreen {...props} />
              </Suspense>
            )}
          </Stack.Screen>

          <Stack.Screen name="SeeAllHBO">
            {props => (
              <Suspense>
                <SeeAllHBOScreen {...props} />
              </Suspense>
            )}
          </Stack.Screen>

          <Stack.Screen name="VideoFull">
            {props => (
              <Suspense>
                <VideoFullScreen {...props} />
              </Suspense>
            )}
          </Stack.Screen>

          <Stack.Screen name="TermsOfUse">
            {props => (
              <Suspense>
                <TermsOfUseScreen {...props} />
              </Suspense>
            )}
          </Stack.Screen>

          <Stack.Screen name="OnBoarding">
            {props => (
              <Suspense>
                <OnBoardingScreen {...props} />
              </Suspense>
            )}
          </Stack.Screen>

          <Stack.Screen name="Transaction">
            {props => (
              <Suspense>
                <TransactionScreen {...props} />
              </Suspense>
            )}
          </Stack.Screen>

          <Stack.Screen name="MoviesOphim">
            {props => (
              <Suspense>
                <MoviesOphimScreen {...props} />
              </Suspense>
            )}
          </Stack.Screen>

          <Stack.Screen name="LogInTV">
            {props => (
              <Suspense>
                <LogInSmartTVScreen {...props} />
              </Suspense>
            )}
          </Stack.Screen>

          <Stack.Screen name="ManageDevices">
            {props => (
              <Suspense>
                <ManageDevicesScreen {...props} />
              </Suspense>
            )}
          </Stack.Screen>

          <Stack.Screen name="PrivacyPolicy">
            {props => (
              <Suspense>
                <PrivacyPolicyScreen {...props} />
              </Suspense>
            )}
          </Stack.Screen>
          <Stack.Screen name="SeeAllCoreAPIS">
            {props => (
              <Suspense>
                <SeeAllCoreAPIScreen {...props} />
              </Suspense>
            )}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
};

export default Routes;
