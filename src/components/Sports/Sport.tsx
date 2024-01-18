/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet,
  VirtualizedList,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
const {width, height} = Dimensions.get('window');
import {
  image185,
  fetchSimilarMovies,
  fallbackMoviePoster,
} from '../../Api/MoviesDb';
import {useNavigation} from '@react-navigation/native';
import React, {Suspense, useEffect, useState} from 'react';
import FastImage from 'react-native-fast-image';

const Sport = ({title, logo, hideSeeAll, idApi}) => {
  const navigation = useNavigation();
  const [data, setListMovies] = useState([]);
  const getListMovies = async id => {
    const data = await fetchSimilarMovies(id);
    if (data && data.results) {
      setListMovies(data.results);
    }
  };

  useEffect(() => {
    getListMovies(idApi);
  }, [idApi]);
  const getItem = (data, index) => {
    return data[index];
  };

  const Movies = ({item}) => {
    return (
      <Suspense>
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate('Movies', item)}>
          <View className="space-y-1 mr-1">
            <FastImage
              source={{
                uri: image185(item.poster_path) || fallbackMoviePoster,
                headers: {Authorization: 'someAuthToken'},
                priority: FastImage.priority.low,
                cache: FastImage.cacheControl.immutable,
              }}
              defaultSource={require('../../assets/images/Progress.png')}
              resizeMode={FastImage.resizeMode.cover}
              style={styles.Image}>
              <Image
                source={
                  logo === 'GO'
                    ? require('../../assets/images/logoHBO.png')
                    : logo === 'MAX'
                    ? require('../../assets/images/hboMaxlogo.png')
                    : logo === 'AXN'
                    ? require('../../assets/images/axn.png')
                    : logo === 'FoxMovies'
                    ? require('../../assets/images/foxmovie.png')
                    : require('../../assets/images/kbs.png')
                }
                style={
                  logo === 'GO'
                    ? styles.GO
                    : logo === 'MAX'
                    ? styles.MAX
                    : logo === 'AXN'
                    ? styles.AXN
                    : logo === 'FoxMovies'
                    ? styles.FOX
                    : logo === 'KBS'
                    ? styles.KBS
                    : styles.HIT
                }
              />
            </FastImage>
            <Text numberOfLines={1} className="text-neutral-300 ml-1 w-24">
              {item.title}
            </Text>
          </View>
        </TouchableWithoutFeedback>
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
            data={data}
            horizontal={true}
            getItem={getItem}
            initialNumToRender={4}
            disableVirtualization={true}
            keyExtractor={item => item.id}
            getItemCount={data => data.length}
            showsHorizontalScrollIndicator={false}
            renderItem={({item}: any) => <Movies item={item} />}
          />
        )}
      </View>
    </View>
  );
};
export default Sport;
const styles = StyleSheet.create({
  Image: {
    width: width * 0.26,
    height: height * 0.17,
  },
  GO: {
    position: 'absolute',
    left: 0,
    top: -9,
    width: width * 0.13,
    height: height * 0.04,
  },
  MAX: {
    position: 'absolute',
    top: 7,
    left: 7,
    width: width * 0.12,
    height: height * 0.009,
  },
  AXN: {
    position: 'absolute',
    top: 7,
    left: 7,
    width: width * 0.11,
    height: height * 0.008,
  },
  FOX: {
    position: 'absolute',
    top: 5,
    left: 0,
    width: width * 0.17,
    height: height * 0.01,
  },
  KBS: {
    position: 'absolute',
    top: 5,
    left: 3,
    width: width * 0.13,
    height: height * 0.01,
  },
  HIT: {
    position: 'absolute',
    top: 5,
    left: 3,
    width: width * 0,
    height: height * 0,
  },
});
