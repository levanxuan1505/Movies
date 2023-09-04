/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import {
  image185,
  fetchMovieCredits,
  fallbackPersonImage,
} from '../Api/MoviesDb';
import {FlashList} from '@shopify/flash-list';
import React, {useEffect, useState} from 'react';
import {View, Text, Image, Dimensions, TouchableOpacity} from 'react-native';
interface Props {
  idCast: any;
  navigation: any;
}
const Cast: React.FC<Props> = ({idCast, navigation}) => {
  const [cast, setCast] = useState([]);
  useEffect(() => {
    getMovieCredits(idCast);
  }, [idCast]);
  const getMovieCredits = async id => {
    const data = await fetchMovieCredits(id);
    if (data && data.cast) {
      setCast(data.cast);
    }
  };
  const Actor = ({person}) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('Actor', person)}
        className="mr-4 items-center">
        <View className="overflow-hidden rounded-full h-20 w-20 items-center border border-neutral-500">
          <Image
            className="rounded-2xl h-24 w-20"
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
    );
  };
  return (
    <View className="my-6 w-full">
      <Text className="text-white text-lg mx-4 mb-5">Top Cast</Text>
      <View>
        {cast && cast.length > 0 && (
          <FlashList
            data={cast}
            horizontal={true}
            estimatedItemSize={15}
            keyExtractor={person => person.id}
            estimatedListSize={{
              height: 120,
              width: Dimensions.get('screen').width,
            }}
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => {
              return <Actor person={item} />;
            }}
          />
        )}
      </View>
    </View>
  );
};
export default Cast;
