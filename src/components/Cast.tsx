/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  Image,
  Dimensions,
  VirtualizedList,
  TouchableOpacity,
} from 'react-native';
import React, {memo, useEffect, useState} from 'react';
const getItem = (cast, index) => {
  return cast[index];
};
import {
  image500,
  fetchMovieCredits,
  fallbackPersonImage,
} from '../Api/MoviesDb';
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
              uri: image500(person?.profile_path) || fallbackPersonImage,
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
      <View
        style={{
          flex: 1,
          minHeight: 2,
          height: 'auto',
          paddingVertical: 10,
          paddingHorizontal: 15,
          width: Dimensions.get('screen').width,
        }}>
        <VirtualizedList
          data={cast}
          horizontal={true}
          getItem={getItem}
          initialNumToRender={3}
          keyExtractor={person => person.id}
          getItemCount={cast => cast.length}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => {
            return <Actor person={item} />;
          }}
        />
      </View>
    </View>
  );
};
export default memo(Cast);
