/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  Image,
  Dimensions,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {styles} from '../theme';
import {image500, fallbackMoviePoster} from '../Api/MoviesDb';
const {width, height} = Dimensions.get('window');

export default function HBODiscover({title, hideSeeAll, data}) {
  const navigation = useNavigation();
  // const moviesName = 'Ant-Man and the Wasp: Quantumania';
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
                <ImageBackground
                  source={{
                    uri: image500(item.backdrop_path) || fallbackMoviePoster,
                  }}
                  style={{
                    position: 'relative',
                    width: width * 0.72,
                    height: height * 0.18,
                  }}>
                  <Image
                    source={require('../assets/images/logoHBO.png')}
                    style={{
                      position: 'absolute',
                      left: 4,
                      top: 0,
                      width: width * 0.14,
                      height: height * 0.04,
                    }}
                  />
                </ImageBackground>
                <Text className="text-neutral-300 ml-1">
                  {item.title.length > 14
                    ? item.title.slice(0, 14) + '...'
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
