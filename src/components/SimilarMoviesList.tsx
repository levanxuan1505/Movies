/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import {
  image185,
  fetchSimilarMovies,
  fallbackMoviePoster,
} from '../Api/MoviesDb';
import {styles} from '../theme';
import {RootStackParams} from '@navigators';
const {width, height} = Dimensions.get('window');
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {View, Text, Dimensions} from 'react-native';
import {FlashList} from '@shopify/flash-list';
import FastImage from 'react-native-fast-image';

interface Props {
  title: string;
  hideSeeAll: boolean;
  idApi: number;
}
const SimilarMoviesList: React.FC<Props> = ({title, hideSeeAll, idApi}) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const [similarMovies, setSimilarMovies] = useState([]);
  const getSimilarMovies = async id => {
    const data = await fetchSimilarMovies(id);
    if (data && data.results) {
      setSimilarMovies(data.results);
    }
  };
  useEffect(() => {
    getSimilarMovies(idApi);
  }, [idApi]);

  const Movies = ({item}) => {
    return (
      <TouchableOpacity onPress={() => navigation.push('Movies', item)}>
        <View className="space-y-1 mr-2">
          <FastImage
            source={{
              uri: image185(item.poster_path) || fallbackMoviePoster,
              headers: {Authorization: 'someAuthToken'},
              priority: FastImage.priority.normal,
              cache: FastImage.cacheControl.immutable,
            }}
            resizeMode={FastImage.resizeMode.center}
            className="rounded-xl"
            style={{width: width * 0.26, height: height * 0.17}}
          />
          <Text
            style={{width: width * 0.25}}
            numberOfLines={1}
            className="text-neutral-300 ml-1">
            {item.title}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View className="mb-3 space-y-1 w-full">
      <View className="mx-4 flex-row justify-between items-center">
        <Text className="text-white text-lg">{title}</Text>
        {!hideSeeAll && (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('SeeAll', {title: title, data: similarMovies})
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
        {similarMovies && similarMovies.length > 0 && (
          <FlashList
            data={similarMovies}
            horizontal={true}
            estimatedItemSize={15}
            estimatedListSize={{
              height: 120,
              width: Dimensions.get('screen').width,
            }}
            keyExtractor={item => item.id}
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => {
              return <Movies item={item} />;
            }}
          />
        )}
      </View>
    </View>
  );
};
export default SimilarMoviesList;
