/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
  VirtualizedList,
} from 'react-native';
import {RootStackParams} from '@navigators';
import FastImage from 'react-native-fast-image';
const {width, height} = Dimensions.get('window');
import React, {Suspense, useEffect, useState} from 'react';
import {fetchSimilarMovies} from '../../Api/MoviesDb';
import {useNavigation} from '@react-navigation/native';
import {image185, fallbackMoviePoster} from '../../Api/MoviesDb';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const TvList = ({title, hideSeeAll, idApi}) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  //   Call API
  const [tv, setTv] = useState([]);

  const getSimilarMovies = async id => {
    const data = await fetchSimilarMovies(id);
    if (data && data.results) {
      setTv(data.results);
    }
  };
  useEffect(() => {
    getSimilarMovies(idApi);
  }, [idApi]);
  const getItem = (data, index) => {
    return data[index];
  };
  const Tv = ({item}) => {
    return (
      <Suspense>
        <TouchableOpacity onPress={() => navigation.push('Movies', item)}>
          <View className="space-y-1 mr-1">
            <FastImage
              defaultSource={require('../../assets/images/Progress.png')}
              source={{
                uri: image185(item.poster_path) || fallbackMoviePoster,
                headers: {Authorization: 'someAuthToken'},
                priority: FastImage.priority.high,
              }}
              style={styles.Image}
              resizeMode={FastImage.resizeMode.cover}
            />
            <Text numberOfLines={1} className="text-neutral-300 ml-1 w-24">
              {item.title}
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
              navigation.navigate('SeeAll', {title: title, data: tv})
            }>
            <Text className="text-lg font-Primary text-[15px] color-greenColor">
              See All
            </Text>
          </TouchableOpacity>
        )}
      </View>
      <View className="px-[8px]">
        {tv && tv.length > 0 && (
          <VirtualizedList
            data={tv.slice(0, 12)}
            horizontal={true}
            getItem={getItem}
            initialNumToRender={4}
            disableVirtualization={true}
            keyExtractor={item => item.id}
            getItemCount={data => data.length}
            showsHorizontalScrollIndicator={false}
            renderItem={({item}: any) => <Tv item={item} />}
          />
        )}
      </View>
    </View>
  );
};
export default TvList;
const styles = StyleSheet.create({
  Image: {
    width: width * 0.26,
    height: height * 0.17,
  },
});
