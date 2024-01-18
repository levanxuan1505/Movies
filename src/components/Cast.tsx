/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import {
  image185,
  fetchMovieCredits,
  fallbackPersonImage,
} from '../Api/MoviesDb';
import {RootStackParams} from '@navigators';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  VirtualizedList,
} from 'react-native';
interface Props {
  idCast: any;
}
const Cast: React.FC<Props> = ({idCast}) => {
  const [cast, setCast] = useState([]);
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  useEffect(() => {
    getMovieCredits(idCast);
  }, [idCast]);
  const getMovieCredits = async id => {
    const data = await fetchMovieCredits(id);
    if (data && data.cast) {
      setCast(data.cast);
    }
  };
  const getItem = (data, index) => {
    return data[index];
  };
  const Actor = ({person}) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('Actor', person.id)}
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
      <View className="px-[8px]">
        {cast && cast.length > 0 && (
          <VirtualizedList
            data={cast}
            horizontal={true}
            getItem={getItem}
            initialNumToRender={5}
            disableVirtualization={true}
            keyExtractor={item => item.id}
            getItemCount={data => data.length}
            showsHorizontalScrollIndicator={false}
            renderItem={({item}: any) => <Actor person={item} />}
          />
        )}
      </View>
    </View>
  );
};
export default Cast;
