import {View, Text, ScrollView, Dimensions, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {ChevronLeftIcon} from 'react-native-heroicons/outline';
import LinearGradient from 'react-native-linear-gradient';
import {HeartIcon} from 'react-native-heroicons/solid';
var {width, height} = Dimensions.get('window');
import {styles, theme} from '../theme';
import {Cast, MoviesList} from '@components';
import {
  fallbackMoviePoster,
  fetchMovieCredits,
  fetchMovieDetails,
  fetchSimilarMovies,
  image500,
} from '../Api/MoviesDb';
const MoviesScreen = () => {
  const {params: item} = useRoute();
  const navigation = useNavigation();
  const [movie, setMovie] = useState({});
  const [cast, setCast] = useState([]);
  const [similarMovies, setSimilarMovies] = useState([]);
  const [isFavourite, setFavourite] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getMovieDetials(item.id);
    getMovieCredits(item.id);
    getSimilarMovies(item.id);
  }, [item]);
  console.log(item.id);
  const getMovieDetials = async id => {
    const data = await fetchMovieDetails(id);
    // console.log('got movie details');
    setLoading(false);
    if (data) {
      setMovie({...movie, ...data});
    }
  };
  const getMovieCredits = async id => {
    const data = await fetchMovieCredits(id);
    // console.log('got movie credits');
    if (data && data.cast) {
      setCast(data.cast);
    }
  };
  const getSimilarMovies = async id => {
    const data = await fetchSimilarMovies(id);
    // console.log('got similar movies');
    if (data && data.results) {
      setSimilarMovies(data.results);
    }
  };
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{paddingBottom: 20}}
      className="flex-1 bg-neutral-900">
      <View className="w-full">
        <SafeAreaView className="absolute z-20 w-full flex-row justify-between item-center px-4">
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="rounded-xl p-1"
            style={styles.background}>
            <ChevronLeftIcon size="28" strokeWidth={2.5} color="white" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setFavourite(!isFavourite)}>
            <HeartIcon
              size="35"
              color={isFavourite ? theme.background : 'white'}
            />
          </TouchableOpacity>
        </SafeAreaView>
        <View>
          <Image
            source={{
              uri:
                image500(movie.poster_path) ||
                image500(item.logo_path) ||
                fallbackMoviePoster,
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
          {item.title}
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
            let showDot = index + 1 != movie.genres.length;
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
      {/* Cast */}
      <Cast cast={cast} navigation={navigation} />
      <MoviesList
        title="Similar Movies"
        hideSeeAll={true}
        data={similarMovies}
      />
    </ScrollView>
  );
};

export default MoviesScreen;
