/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {styles} from '../theme';
import {RootStackParams} from '@navigators';
const {width, height} = Dimensions.get('window');
import {useNavigation} from '@react-navigation/native';
import {image500, fallbackMoviePoster} from '../Api/MoviesDb';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {View, Text, Image, FlatList, Dimensions} from 'react-native';
import {FlashList} from '@shopify/flash-list';
import {TouchableOpacity} from 'react-native-gesture-handler';
//
export default function Discover({title, hideSeeAll, data}) {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  return (
    <View className="mb-8 space-y-4 w-full">
      <View className="mx-4 flex-row justify-between items-center">
        <Text className="text-white text-lg">{title}</Text>
        {!hideSeeAll && (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('SeeAll', {title: title, data: data})
            }>
            <Text style={styles.text} className="text-lg">
              See All
            </Text>
          </TouchableOpacity>
        )}
      </View>
      <View style={{flex: 1, paddingHorizontal: 15, paddingVertical: 10}}>
        <FlatList
          data={data}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}: any) => (
            <TouchableOpacity
              key={index}
              onPress={() => navigation.push('Movies', item)}>
              <View className="space-y-1 mr-4">
                <Image
                  // source={require('../assets/images/moviePoster1.png')}
                  source={{
                    uri: image500(item.backdrop_path) || fallbackMoviePoster,
                  }}
                  className="rounded-3xl"
                  style={{
                    width: width * 0.6,
                    height: height * 0.16,
                  }}
                />
                <Text className="text-neutral-300 ml-1">
                  {item.title.length > 33
                    ? item.title.slice(0, 33) + '...'
                    : item.title}
                </Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
}
