/* eslint-disable curly */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */

import {styles} from '../theme';
import React, {memo} from 'react';
let {width} = Dimensions.get('window');
import {TvBodyComponent} from '@components';
import {RootStackParams} from '@navigators';
import {FlashList} from '@shopify/flash-list';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {View, Text, RefreshControl, Dimensions} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {MagnifyingGlassIcon, TvIcon} from 'react-native-heroicons/outline';

const TelevisionScreen = () => {
  const [refreshing, setRefreshing] = React.useState(false);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 500);
  }, []);
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const data = [{key: '1'}];

  return (
    <View className="flex-1 bg-neutral-900 ">
      <SafeAreaView
        style={{
          // backgroundColor: 'rgba(38, 38, 38, 0.7)',
          position: 'absolute',
          paddingBottom: -35,
          paddingTop: -14,
          zIndex: 1,
        }}
        className="{ios} ? -mb-2 : -mb-3 ">
        <View
          style={{width: width, paddingHorizontal: 20}}
          className="flex-row justify-between items-center ">
          <TvIcon size={30} strokeWidth={2} color="white" />
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text
              style={[
                styles.text,
                {
                  fontSize: 32,
                  fontFamily: 'Shrikhand-Regular',
                  textShadowRadius: 10,
                  textShadowColor: 'rgba(0, 0, 0, 0.95)',
                  textShadowOffset: {width: -1, height: 1},
                },
              ]}>
              ---T
            </Text>
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
              V---
            </Text>
          </View>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('Search', {name: 'TV, Shows...'})
            }>
            <MagnifyingGlassIcon size={30} strokeWidth={2} color="white" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      {/* <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 10,
          paddingTop: 100,
        }}>
        <TvBodyComponent />
      </ScrollView> */}
      <FlashList
        data={data}
        estimatedItemSize={1}
        removeClippedSubviews={true}
        keyExtractor={item => item.key}
        showsVerticalScrollIndicator={false}
        renderItem={() => <TvBodyComponent />}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </View>
  );
};

export default memo(TelevisionScreen);
