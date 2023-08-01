/* eslint-disable react-native/no-inline-styles */
import React, {memo} from 'react';
import {FlashList} from '@shopify/flash-list';
import {image185, fallbackPersonImage} from '../Api/MoviesDb';
import {
  View,
  Text,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

const Cast = ({cast, navigation}) => {
  console.log(cast);
  return !cast ? (
    <View className="my-6 w-full">
      <Text className="text-white text-lg mx-4 mb-5">Top Cast</Text>
      <View
        style={{
          flex: 1,
          minHeight: 2,
          height: 'auto',
          paddingVertical: 10,
          paddingHorizontal: 15,
          width: Dimensions.get('screen').width,
        }}>
        <FlashList
          data={cast}
          horizontal={true}
          estimatedItemSize={7}
          disableAutoLayout={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({person, index}: any) => (
            <TouchableOpacity
              key={index}
              onPress={() => navigation.navigate('Actor', person)}
              className="mr-4 items-center">
              <View className="overflow-hidden rounded-full h-20 w-20 items-center border border-neutral-500">
                <Image
                  className="rounded-2xl h-24 w-20"
                  // source={require('../assets/images/castImage1.png')}
                  source={{
                    uri: image185(person?.profile_path) || fallbackPersonImage,
                  }}
                />
              </View>

              <Text className="text-white text-xs mt-1">
                {person?.character.length > 10
                  ? person.character.slice(0, 10) + '...'
                  : person?.character}
              </Text>
              <Text className="text-neutral-400 text-xs">
                {person?.original_name.length > 10
                  ? person.original_name.slice(0, 10) + '...'
                  : person?.original_name}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  ) : (
    <View className="my-6 w-full">
      <Text className="text-white text-lg mx-4 mb-5">Top Cast</Text>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingHorizontal: 15}}>
        {cast &&
          cast.map((person, index) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => navigation.navigate('Actor', person)}
                className="mr-4 items-center">
                <View className="overflow-hidden rounded-full h-20 w-20 items-center border border-neutral-500">
                  <Image
                    className="rounded-2xl h-24 w-20"
                    // source={require('../assets/images/castImage1.png')}
                    source={{
                      uri:
                        image185(person?.profile_path) || fallbackPersonImage,
                    }}
                  />
                </View>

                <Text className="text-white text-xs mt-1">
                  {person?.character.length > 10
                    ? person.character.slice(0, 10) + '...'
                    : person?.character}
                </Text>
                <Text className="text-neutral-400 text-xs">
                  {person?.original_name.length > 10
                    ? person.original_name.slice(0, 10) + '...'
                    : person?.original_name}
                </Text>
              </TouchableOpacity>
            );
          })}
      </ScrollView>
    </View>
  );
};
export default memo(Cast);
