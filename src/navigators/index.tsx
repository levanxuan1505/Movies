import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  ActorScreen,
  MoviesScreen,
  SearchScreen,
  SeeAllScreen,
  DrawerScreen,
  SeeAllHBOScreen,
  OnBoardingScreen,
  LogInSmartTVScreen,
  ManageDevicesScreen,
  PrivacyPolicyScreen,
  SettingScreen,
  TermsOfUseScreen,

  // BottomHomeScreen,
  UserScreen,
} from '@screens';

const Stack = createStackNavigator();

const Navigators = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {/* <Stack.Screen name="BottomHome" component={BottomHomeScreen} /> */}
        <Stack.Screen name="OnBoarding" component={OnBoardingScreen} />
        <Stack.Screen name="Drawer" component={DrawerScreen} />
        <Stack.Screen name="Movies" component={MoviesScreen} />
        <Stack.Screen name="Actor" component={ActorScreen} />
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="SeeAll" component={SeeAllScreen} />
        <Stack.Screen name="SeeAllHBO" component={SeeAllHBOScreen} />
        <Stack.Screen name="User" component={UserScreen} />
        <Stack.Screen name="LogInTV" component={LogInSmartTVScreen} />
        <Stack.Screen name="ManageDevice" component={ManageDevicesScreen} />
        <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicyScreen} />
        <Stack.Screen name="Setting" component={SettingScreen} />
        <Stack.Screen name="TermsOfUse" component={TermsOfUseScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigators;
