/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import React from 'react';
import {styles} from '../theme';
import {RootStackParams} from '@navigators';
const {width, height} = Dimensions.get('window');
import {useNavigation} from '@react-navigation/native';
import {image500, fallbackMoviePoster} from '../Api/MoviesDb';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export default function Tv({name, title, hideSeeAll, data}) {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  return (
    <View className="mb-8 space-y-4">
      <View className="mx-4 flex-row justify-between items-center">
        <Text className="text-white text-lg">{title}</Text>
        {!hideSeeAll && (
          <TouchableOpacity>
            <Text style={styles.text} className="text-lg">
              See All
            </Text>
          </TouchableOpacity>
        )}
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingHorizontal: 15, paddingVertical: 10}}>
        {data.map((item, index) => {
          return (
            <TouchableWithoutFeedback
              key={index}
              onPress={() => navigation.push('Movies', item)}>
              <View className="space-y-1 mr-4 justify-center">
                <Image
                  // source={require('../assets/images/moviePoster1.png')}
                  source={{
                    uri: image500(item[name]) || fallbackMoviePoster,
                  }}
                  className="rounded-3xl"
                  style={{
                    width: item.name ? width * 0.7 : width * 0.46,
                    height: item.name ? height * 0.17 : height * 0.14,
                  }}
                />
                <Text className="text-neutral-300 ml-1">
                  {item.provider_name
                    ? item.provider_name.length > 18
                      ? item.provider_name.slice(0, 18) + '...'
                      : item.provider_name
                    : item.name.length > 30
                    ? item.name.slice(0, 30) + '...'
                    : item.name}
                </Text>
              </View>
            </TouchableWithoutFeedback>
          );
        })}
      </ScrollView>
    </View>
  );
}
