/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  VirtualizedList,
} from 'react-native';
import {styles} from '../theme';
import {RootStackParams} from '@navigators';
const {width, height} = Dimensions.get('window');
import {fetchSimilarMovies} from '../Api/MoviesDb';
import React, {memo, useCallback, useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {image500, fallbackMoviePoster} from '../Api/MoviesDb';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const TvList = ({name, title, hideSeeAll, idApi}) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const getItem = (data, index) => {
    return data[index];
  };
  //   Call API
  const [tv, setTv] = useState([]);
  const getSimilarMovies = useCallback(async id => {
    const data = await fetchSimilarMovies(id);
    if (data && data.results) {
      setTv(data.results);
    }
  }, []);
  useEffect(() => {
    getSimilarMovies(idApi);
  }, [getSimilarMovies, idApi]);
  const Tv = useCallback(
    ({item}) => {
      return (
        <TouchableOpacity onPress={() => navigation.push('Movies', item)}>
          <View className="space-y-1 mr-4">
            <Image
              source={{
                uri: image500(item.poster_path) || fallbackMoviePoster,
              }}
              className="rounded-xl"
              style={{width: width * 0.33, height: height * 0.22}}
            />
            <Text className="text-neutral-300 ml-1">
              {item.title.length > 14
                ? item.title.slice(0, 14) + '...'
                : item.title}
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
          <TouchableOpacity>
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
          data={tv}
          horizontal={true}
          initialNumToRender={3}
          keyExtractor={item => item.id}
          showsHorizontalScrollIndicator={false}
          getItemCount={data => data.length}
          getItem={getItem}
          renderItem={({item}: any) => <Tv item={item} />}
        />
      </View>
    </View>
  );
};
export default memo(TvList);
