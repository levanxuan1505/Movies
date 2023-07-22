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
import tw from 'twrnc';
import {styles} from '../theme';
const {width, height} = Dimensions.get('window');

export default function MovieList({title, hideSeeAll, data}) {
  const navigation = useNavigation();
  const moviesName = 'Ant-Man and the Wasp: Quantumania';
  return (
    <View style={tw`mb-8 space-y-4`}>
      <View style={tw`mx-4 flex-row justify-between items-center`}>
        <Text style={tw`text-white text-lg`}>{title}</Text>
        {!hideSeeAll && (
          <TouchableOpacity>
            <Text style={[tw`text-lg`, styles.text]}>See All</Text>
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
              onPress={() => navigation.navigate('Movies', item)}>
              <View style={tw`space-y-1 mr-4`}>
                <Image
                  source={require('../assets/images/moviePoster1.png')}
                  //   source={{
                  //     uri: image185(item.poster_path) || fallbackMoviePoster,
                  //   }}
                  style={[
                    tw`rounded-3xl`,
                    {width: width * 0.33, height: height * 0.22},
                  ]}
                />
                <Text style={tw`text-neutral-300 ml-1`}>
                  {moviesName.length > 14
                    ? moviesName.slice(0, 14) + '...'
                    : moviesName}
                </Text>
              </View>
            </TouchableWithoutFeedback>
          );
        })}
      </ScrollView>
    </View>
  );
}
