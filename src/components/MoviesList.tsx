/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import {
  image500,
  fetchSimilarMovies,
  fallbackMoviePoster,
} from '../Api/MoviesDb';
import {styles} from '../theme';
import {RootStackParams} from '@navigators';
const {width, height} = Dimensions.get('window');
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import React, {memo, useCallback, useEffect, useState} from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {View, Text, Image, Dimensions, VirtualizedList} from 'react-native';
interface Props {
  title: string;
  idApi: number;
  hideSeeAll: boolean;
}
const MoviesList: React.FC<Props> = ({title, hideSeeAll, idApi}) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const [data, setListMovies] = useState([]);
  const getListMovies = useCallback(async id => {
    const data = await fetchSimilarMovies(id);
    if (data && data.results) {
      setListMovies(data.results);
    }
  }, []);
  useEffect(() => {
    getListMovies(idApi);
  }, [getListMovies, idApi]);
  const getItem = (data, index) => {
    return data[index];
  };
  const Movies = useCallback(
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
          paddingVertical: 10,
          paddingHorizontal: 15,
          width: Dimensions.get('screen').width,
        }}>
        <VirtualizedList
          data={data}
          horizontal={true}
          getItem={getItem}
          initialNumToRender={3}
          disableVirtualization={true}
          keyExtractor={item => item.id}
          getItemCount={data => data.length}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => {
            return <Movies item={item} />;
          }}
        />
      </View>
    </View>
  );
};
export default memo(MoviesList);
