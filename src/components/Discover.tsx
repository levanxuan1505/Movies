/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  ScrollView,
  TouchableWithoutFeedback,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {styles} from '../theme';
import {image500, fallbackMoviePoster} from '../Api/MoviesDb';
const {width, height} = Dimensions.get('window');

export default function Discover({title, hideSeeAll, data}) {
  const navigation = useNavigation();
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
            </TouchableWithoutFeedback>
          );
        })}
      </ScrollView>
    </View>
  );
}
