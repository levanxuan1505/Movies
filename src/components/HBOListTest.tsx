/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  Image,
  Dimensions,
  VirtualizedList,
  ImageBackground,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import {styles} from '../theme';
const {width, height} = Dimensions.get('window');
import {fetchSimilarMovies} from '../Api/MoviesDb';
import {useNavigation} from '@react-navigation/native';
import {fallbackMoviePoster, image500} from '../Api/MoviesDb';
import React, {memo, useCallback, useEffect, useState} from 'react';

const HBOList = ({title, logo, hideSeeAll, idApi}) => {
  const navigation = useNavigation();
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
        <TouchableWithoutFeedback
          onPress={() => navigation.push('Movies', item)}>
          <View className="space-y-1 mr-4">
            <ImageBackground
              source={{
                uri: image500(item.poster_path) || fallbackMoviePoster,
              }}
              style={{
                position: 'relative',
                width: width * 0.33,
                height: height * 0.22,
              }}>
              <Image
                source={
                  logo === 'GO'
                    ? require('../assets/images/logoHBO.png')
                    : logo === 'MAX'
                    ? require('../assets/images/hboMaxlogo.png')
                    : logo === 'AXN'
                    ? require('../assets/images/axn.png')
                    : logo === 'FoxMovies'
                    ? require('../assets/images/foxmovie.png')
                    : logo === 'KBS'
                    ? require('../assets/images/kbs.png')
                    : require('../assets/images/hits.png')
                }
                style={
                  logo === 'GO'
                    ? {
                        position: 'absolute',
                        left: 0,
                        top: -9,
                        width: width * 0.13,
                        height: height * 0.04,
                      }
                    : logo === 'MAX'
                    ? {
                        position: 'absolute',
                        top: 7,
                        left: 7,
                        width: width * 0.12,
                        height: height * 0.009,
                      }
                    : logo === 'AXN'
                    ? {
                        position: 'absolute',
                        top: 7,
                        left: 7,
                        width: width * 0.11,
                        height: height * 0.008,
                      }
                    : logo === 'FoxMovies'
                    ? {
                        position: 'absolute',
                        top: 5,
                        left: 0,
                        width: width * 0.17,
                        height: height * 0.01,
                      }
                    : logo === 'KBS'
                    ? {
                        position: 'absolute',
                        top: 5,
                        left: 3,
                        width: width * 0.17,
                        height: height * 0.011,
                      }
                    : {
                        position: 'absolute',
                        top: 5,
                        left: 3,
                        width: width * 0.17,
                        height: height * 0.005,
                      }
                }
              />
            </ImageBackground>
            <Text className="text-neutral-300 ml-1">
              {item.title.length > 14
                ? item.title.slice(0, 14) + '...'
                : item.title}
            </Text>
          </View>
        </TouchableWithoutFeedback>
      );
    },
    [navigation, logo],
  );
  return (
    data && (
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
            renderItem={({item}: any) => <Movies item={item} />}
          />
        </View>
      </View>
    )
  );
};
export default memo(HBOList);
