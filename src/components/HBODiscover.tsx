/* eslint-disable react/self-closing-comp */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  Image,
  Dimensions,
  VirtualizedList,
  ImageBackground,
} from 'react-native';
import {styles} from '../theme';
import {RootStackParams} from '@navigators';
const {width, height} = Dimensions.get('window');
import {fallbackMoviePoster} from '../Api/MoviesDb';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {fetchMoviesOphim, imageOphim} from '../Api/MoviesDb';
import React, {memo, useCallback, useEffect, useState} from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
interface Props {
  page: number;
  logo: string;
  title: string;
  hideSeeAll: boolean;
}
const HBODiscover: React.FC<Props> = ({title, hideSeeAll, page, logo}) => {
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
            <ImageBackground
              source={{
                uri: imageOphim(item.poster_url) || fallbackMoviePoster,
              }}
              style={{
                width: width * 0.65,
                height: height * 0.16,
                position: 'relative',
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
                        width: width * 0.16,
                        height: height * 0.01,
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
              {item.name.length > 14
                ? item.name.slice(0, 14) + '...'
                : item.name}
            </Text>
          </View>
        </TouchableOpacity>
      );
    },
    [navigation, logo],
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
export default memo(HBODiscover);
