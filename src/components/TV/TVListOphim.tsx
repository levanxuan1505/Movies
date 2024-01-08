/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import {RootStackParams} from '@navigators';
const {width, height} = Dimensions.get('window');
import {fallbackMoviePoster} from '../../Api/MoviesDb';
import {useNavigation} from '@react-navigation/native';
import {imageOphim, fetchMoviesOphim} from '../../Api/MoviesDb';
import {TouchableOpacity} from 'react-native-gesture-handler';
import React, {Suspense, useEffect, useState} from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  VirtualizedList,
} from 'react-native';
import FastImage from 'react-native-fast-image';

interface Props {
  page: number;
  title: string;
  hideSeeAll: boolean;
}
const TVListOphim: React.FC<Props> = ({title, hideSeeAll, page}) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const [data, setListMovies] = useState([]);
  const getListMovies = async page => {
    const data = await fetchMoviesOphim(page);
    if (data && data.items) {
      setListMovies(data.items);
    }
  };
  useEffect(() => {
    getListMovies(page);
  }, [page]);
  const getItem = (data, index) => {
    return data[index];
  };
  const Movies = ({item}) => {
    return (
      <Suspense>
        <TouchableOpacity
          onPress={() => navigation.push('MoviesOphim', item.slug)}>
          <View className="space-y-1 mr-1">
            <FastImage
              defaultSource={require('../../assets/images/Progress.png')}
              source={{
                uri: imageOphim(item.thumb_url) || fallbackMoviePoster,
                headers: {Authorization: 'someAuthToken'},
                priority: FastImage.priority.high,
              }}
              resizeMode={FastImage.resizeMode.cover}
              style={styles.Image}
            />
            <Text numberOfLines={1} className="text-neutral-300 ml-1 w-24">
              {item.origin_name}
            </Text>
          </View>
        </TouchableOpacity>
      </Suspense>
    );
  };
  return (
    <View className="mb-3 space-y-1 w-full">
      <View className="mx-2 flex-row justify-between items-center">
        <Text className="text-white font-Primary text-[15px]">{title}</Text>
        {!hideSeeAll && (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('SeeAll', {title: title, data: data})
            }>
            <Text className="text-lg font-Primary text-[15px] color-greenColor">
              See All
            </Text>
          </TouchableOpacity>
        )}
      </View>
      <View className="px-[8px]">
        {data && data.length > 0 && (
          <VirtualizedList
            data={data.slice(0, 12)}
            horizontal={true}
            getItem={getItem}
            initialNumToRender={4}
            disableVirtualization={true}
            keyExtractor={item => item._id}
            getItemCount={data => data.length}
            showsHorizontalScrollIndicator={false}
            renderItem={({item}: any) => <Movies item={item} />}
          />
        )}
      </View>
    </View>
  );
};
export default TVListOphim;
const styles = StyleSheet.create({
  Image: {
    width: width * 0.26,
    height: height * 0.17,
  },
});
