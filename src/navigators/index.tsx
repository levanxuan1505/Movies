import React, {useContext, useEffect} from 'react';
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
  SeeAllHBOScreen,
  TermsOfUseScreen,
  OnBoardingScreen,
  TransactionScreen,
  LogInSmartTVScreen,
  ManageDevicesScreen,
  PrivacyPolicyScreen,
  SeeAllCoreAPIScreen,
} from '@screens';
export type RootStackParams = {
  openDrawer(): any;
  User;
  Actor;
  LogIn;
  Movies;
  Drawer;
  Search;
  SeeAll;
  MyList;
  LogInTV;
  Settings;
  Register;
  Watching;
  SeeAllHBO;
  TermsOfUse;
  OnBoarding;
  Transaction;
  ManageDevices;
  PrivacyPolicy;
  SeeAllCoreAPIS;
};
const Stack = createStackNavigator<RootStackParams>();
//
import {AuthContext, AuthProvider} from './AuthProvider';
import auth from '@react-native-firebase/auth';

const Navigators = () => {
  const {user, setUser} = useContext(AuthContext);
  const [initializing, setInitializing] = useState(true);
  const onAuthStateChanged = user => {
    setUser(user);
    if (initializing) setInitializing(false);
  };
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);
  if (initializing) return null;
  return (
    <AuthProvider>
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
          <Stack.Screen name="SeeAllHBO" component={SeeAllHBOScreen} />
          <Stack.Screen name="LogInTV" component={LogInSmartTVScreen} />
          <Stack.Screen name="OnBoarding" component={OnBoardingScreen} />
          <Stack.Screen name="TermsOfUse" component={TermsOfUseScreen} />
          <Stack.Screen name="Transaction" component={TransactionScreen} />
          <Stack.Screen name="ManageDevices" component={ManageDevicesScreen} />
          <Stack.Screen name="SeeAllCoreAPIS" component={SeeAllCoreAPIScreen} />
          <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicyScreen} />
          {/* <Stack.Screen name="BottomHome" component={BottomHomeScreen} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
};

export default Navigators;
