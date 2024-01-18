/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import {
  image342,
  fetchMovieDetails,
  fallbackMoviePoster,
} from '../Api/MoviesDb';
import {styles, theme} from '../theme';
import {RootStackParams} from '@navigators';
var {width, height} = Dimensions.get('window');
import {Cast, SimilarMoviesList} from '@components';
import {HeartIcon} from 'react-native-heroicons/solid';
import {ScrollView} from 'react-native-virtualized-view';
import LinearGradient from 'react-native-linear-gradient';
import {View, Text, Dimensions, Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import React, {useCallback, useEffect, useState} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {ChevronLeftIcon} from 'react-native-heroicons/outline';
import {useNavigation, useRoute} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RouteProp, NavigationProp} from '@react-navigation/native';

type MoviesScreen = {
  route: RouteProp<RootStackParams, 'Movies'>;
  navigation: NavigationProp<RootStackParams, 'Movies'>;
};

const MoviesScreen: React.FC<MoviesScreen> = () => {
  const {params: item} = useRoute();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(false);

  const getMovieDetails = useCallback(async id => {
    const data = await fetchMovieDetails(id);
    setLoading(false);
    if (data) {
      setMovie({...movie, ...data});
    }
  }, []);
  useEffect(() => {
    setLoading(true);
    getMovieDetails(item?.id);
  }, [getMovieDetails, item?.id]);

  const Header = () => {
    const [isFavorite, setFavorite] = useState(false);
    return (
      <>
        <View>
          <SafeAreaView className="absolute z-20 w-full flex-row justify-between item-center px-4">
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              className="rounded-xl p-1"
              style={styles.background}>
              <ChevronLeftIcon size="28" strokeWidth={2.5} color="white" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setFavorite(!isFavorite)}>
              <HeartIcon
                size="35"
                color={isFavorite ? theme.background : 'white'}
              />
            </TouchableOpacity>
          </SafeAreaView>
          <View>
            <Image
              source={{
                uri: image342(movie?.poster_path) || fallbackMoviePoster,
              }}
              style={{width, height: height * 0.55}}
            />
            <LinearGradient
              colors={[
                'transparent',
                'rgba(23, 23, 23, 0.6)',
                'rgba(23, 23, 23, 1)',
              ]}
              className="absolute bottom-0"
              style={{width, height: height * 0.4}}
              start={{x: 0.5, y: 0}}
              end={{x: 0.5, y: 1}}
            />
          </View>
        </View>
        {/* Movie details */}
        <View style={{marginTop: -(height * 0.09)}} className="space-y-3">
          {/* title */}
          <Text className="text-white text-center text-3xl font-bold tracking-wider">
            {item?.title}
          </Text>
          {/* status release runtiime */}
          {movie?.id ? (
            <Text className="text-neutral-400 font-semibold text-base text-center">
              {movie?.status} • {movie?.release_date?.split('-')[0] || 'N/A'} •{' '}
              {movie?.runtime} min
            </Text>
          ) : null}
          <View className="flex-row justify-center mx-4 space-x-2">
            {movie?.genres?.map((genre, index) => {
              let showDot = index + 1 !== movie?.genres.length;
              return (
                <Text
                  key={index}
                  className="text-neutral-400 font-semibold text-base text-center">
                  {genre?.name} {showDot ? '•' : null}
                </Text>
              );
            })}
          </View>
          {/* description */}
          <Text className="text-neutral-400 mx-4 tracking-wide">
            {movie?.overview}
          </Text>
        </View>
      </>
    );
  };
  const handleScroll = event => {
    const offsetY = event.nativeEvent.contentOffset.y;
    // Define a threshold for when to trigger the action (e.g., 100 pixels)
    if (offsetY < -52) {
      navigation.goBack();
    }
  };
  return (
    <ScrollView
      onScroll={handleScroll}
      scrollEventThrottle={16}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{paddingBottom: 20}}
      className=" bg-neutral-900">
      {/* Cast */}
      <Header />
      {item?.id && <Cast idCast={item?.id} />}
      <View>
        <SimilarMoviesList
          title="Similar Movies"
          hideSeeAll={true}
          idApi={item?.id}
        />
      </View>
    </ScrollView>
  );
};

export default MoviesScreen;
