/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable curly */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
import {
  Bars3CenterLeftIcon,
  MagnifyingGlassIcon,
} from 'react-native-heroicons/outline';
import React from 'react';
import {View, Text} from 'react-native';
import {RootStackParams} from '@navigators';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const HBOList = React.lazy(() => import('../components/HBO/HBOList'));
const HomeScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  return (
    <View className="flex-1 w-screen bg-neutral-900 position: relative">
      <SafeAreaView className="{ios} ? -mb-2 : -mb-3 position: absolute pb-[-35px] pt-[-14px] z-10">
        <View className="flex-row w-screen justify-between px-[20px] items-center">
          <TouchableOpacity
            onPress={() => navigation.dispatch(DrawerActions.closeDrawer())}>
            <Bars3CenterLeftIcon size={30} strokeWidth={2} color="white" />
          </TouchableOpacity>
          <View className="flex-row items-center">
            <Text className="text-[32px] font-Primary color-greenColor">
              ---HBO_
            </Text>

            <Text className="text-[32px] font-Primary color-redColor">
              GO---
            </Text>
          </View>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('Search', {name: 'Movies, HBO Shows...'})
            }>
            <MagnifyingGlassIcon size={30} strokeWidth={2} color="white" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>

      <HBOList />
    </View>
  );
};

export default HomeScreen;
