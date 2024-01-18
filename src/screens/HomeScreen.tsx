import {
  Bars3CenterLeftIcon,
  MagnifyingGlassIcon,
} from 'react-native-heroicons/outline';
import React from 'react';
import {ModalPopUp} from '@components';
import {RootStackParams} from '@navigators';
import {View, Text, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {RouteProp, NavigationProp} from '@react-navigation/native';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
const HomeBody = React.lazy(() => import('../components/Home/HomeBody'));

type HomeScreen = {
  route: RouteProp<RootStackParams, 'Home'>;
  navigation: NavigationProp<RootStackParams, 'Home'>;
};

const HomeScreen: React.FC<HomeScreen> = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  return (
    <View className="flex-1 w-screen bg-neutral-900 position: relative">
      <ModalPopUp />
      <SafeAreaView className="{ios} ? -mb-2 : -mb-3 position: absolute pb-[-35px] pt-[-14px] z-10">
        <View className="flex-row w-screen justify-between px-[20px] items-center">
          <TouchableOpacity
            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
            <Bars3CenterLeftIcon size={30} strokeWidth={2} color="white" />
          </TouchableOpacity>
          <View className="flex-row items-center">
            <Text className="text-[32px] font-Primary color-greenColor">
              ---VIE_
            </Text>

            <Text className="text-[32px] font-Primary color-redColor">
              ON---
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
      <HomeBody />
    </View>
  );
};

export default HomeScreen;
