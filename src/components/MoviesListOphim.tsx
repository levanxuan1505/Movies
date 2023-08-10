/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import {styles} from '../theme';
import {RootStackParams} from '@navigators';
const {width, height} = Dimensions.get('window');
import {fallbackMoviePoster} from '../Api/MoviesDb';
import {useNavigation} from '@react-navigation/native';
import {imageOphim, fetchMoviesOphim} from '../Api/MoviesDb';
import {TouchableOpacity} from 'react-native-gesture-handler';
import React, {memo, useCallback, useEffect, useState} from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {View, Text, Image, VirtualizedList, Dimensions} from 'react-native';
interface Props {
  page: number;
  title: string;
  hideSeeAll: boolean;
}
const MoviesListOphim: React.FC<Props> = ({title, hideSeeAll, page}) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const [data, setListMovies] = useState([]);
  const getListMovies = useCallback(async page => {
    const data = await fetchMoviesOphim(page);
    if (data && data.items) {
      setListMovies(data.items);
    }
  }, []);
  useEffect(() => {
    getListMovies(page);
  }, [getListMovies, page]);
  const getItem = (data, index) => {
    return data[index];
  };
  const Movies = useCallback(
    ({item}) => {
      return (
        <TouchableOpacity
          onPress={() => navigation.push('MoviesOphim', item.slug)}>
          <View className="space-y-1 mr-4">
            <Image
              source={{
                uri: imageOphim(item.poster_url) || fallbackMoviePoster,
              }}
              style={{width: width * 0.33, height: height * 0.22}}
            />
            <Text
              style={{width: width * 0.33}}
              numberOfLines={1}
              className="text-neutral-300 ml-1">
              {item.origin_name}
            </Text>
          </View>
        </TouchableOpacity>
      );
    },
    [navigation],
  );
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
      <View
        style={{
          flex: 1,
          minHeight: 2,
          height: 'auto',
          width: Dimensions.get('screen').width,
          paddingHorizontal: 15,
          paddingVertical: 10,
        }}>
        <VirtualizedList
          data={data}
          horizontal={true}
          initialNumToRender={3}
          disableVirtualization={true}
          keyExtractor={item => item._id}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => {
            return <Movies item={item} />;
          }}
          getItemCount={data => data.length}
          getItem={getItem}
        />
      </View>
    </View>
  );
};
export default memo(MoviesListOphim);
