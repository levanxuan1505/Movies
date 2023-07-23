import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  ActorScreen,
  BottomHomeScreen,
  MoviesScreen,
  SearchScreen,
  SeeAllScreen,
} from '@screens';

const Stack = createStackNavigator();

const Navigators = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="BottomHome" component={BottomHomeScreen} />
        <Stack.Screen name="Movies" component={MoviesScreen} />
        <Stack.Screen name="Actor" component={ActorScreen} />
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="SeeAll" component={SeeAllScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigators;
