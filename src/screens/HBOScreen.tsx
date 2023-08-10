/* eslint-disable curly */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
import {styles} from '../theme';
import React, {memo} from 'react';
var {width} = Dimensions.get('window');
import {RootStackParams} from '@navigators';
import {HBOBodyComponent} from '@components';
import {FlashList} from '@shopify/flash-list';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {View, Text, RefreshControl, Dimensions} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {MagnifyingGlassIcon, FilmIcon} from 'react-native-heroicons/outline';
const HBOScreen = () => {
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1500);
  }, []);
  const [refreshing, setRefreshing] = React.useState(false);
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const data = [{key: '1'}];
  // const getItem = (data, index) => {
  //   return data[index];
  // };
  return (
    <View style={{position: 'relative'}} className="flex-1 bg-neutral-900 ">
      <SafeAreaView
        style={{
          // backgroundColor: 'rgba(38, 38, 38, 0.7)',
          position: 'absolute',
          paddingBottom: -35,
          paddingTop: -14,
          zIndex: 1,
        }}
        className="{ios} ? -mb-2 : -mb-3">
        <View
          style={{width: width, paddingHorizontal: 20}}
          className="flex-row justify-between items-center ">
          <FilmIcon size={30} strokeWidth={2} color="white" />
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text
              style={[
                styles.secondaryText,
                {
                  fontSize: 32,
                  fontFamily: 'Shrikhand-Regular',
                  textShadowRadius: 10,
                  textShadowColor: 'rgba(0, 0, 0, 0.95)',
                  textShadowOffset: {width: -1, height: 1},
                },
              ]}>
              ---HBO_
            </Text>
            <Text
              style={[
                styles.darkColor,
                {
                  fontSize: 32,
                  fontFamily: 'Shrikhand-Regular',
                  textShadowRadius: 10,
                  textShadowColor: 'rgba(0, 0, 0, 0.1)',
                  textShadowOffset: {width: -1, height: 1},
                },
              ]}>
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
      {/* ScrollView */}
      {/* <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 10, paddingTop: 0}}>
        <HBOBodyComponent />
      </ScrollView> */}
      <FlashList
        data={data}
        estimatedItemSize={1}
        removeClippedSubviews={true}
        keyExtractor={item => item.key}
        showsVerticalScrollIndicator={false}
        renderItem={() => <HBOBodyComponent />}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        // getItemCount={data => data.length}
        // getItem={getItem}
      />
    </View>
  );
};

export default memo(HBOScreen);
