/* eslint-disable curly */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
import React, {memo} from 'react';
import {styles} from '../theme';
var {width} = Dimensions.get('window');
import {RootStackParams} from '@navigators';
import {HBOBodyComponent} from '@components';
import {useNavigation} from '@react-navigation/native';
import {ScrollView} from 'react-native-virtualized-view';
import {SafeAreaView} from 'react-native-safe-area-context';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {View, Text, RefreshControl, Dimensions} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {MagnifyingGlassIcon, FilmIcon} from 'react-native-heroicons/outline';

const HBOScreen = () => {
  const [refreshing, setRefreshing] = React.useState(false);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 500);
  }, []);
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  return (
    <View className="flex-1 bg-neutral-800 ">
      <SafeAreaView
        style={{
          backgroundColor: 'rgba(38, 38, 38, 0.7)',
          position: 'absolute',
          zIndex: 1,
          paddingBottom: -25,
          paddingTop: -8,
        }}
        className="{ios} ? -mb-2 : -mb-3">
        <View
          style={{width: width, paddingHorizontal: 20}}
          className="flex-row justify-between items-center ">
          <FilmIcon size={30} strokeWidth={2} color="white" />
          <Text
            style={{fontFamily: 'KaushanScript-Regular'}}
            className="text-white text-3xl font-bold">
            <Text style={styles.text}>---HBO_</Text>
            <Text style={styles.darkColor}>GO---</Text>
          </Text>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('Search', {name: 'Movies, HBO Shows...'})
            }>
            <MagnifyingGlassIcon size={30} strokeWidth={2} color="white" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 10, paddingTop: 100}}>
        <HBOBodyComponent />
      </ScrollView>
    </View>
  );
};

export default memo(HBOScreen);
