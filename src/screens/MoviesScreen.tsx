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
const MoviesScreen = () => {
  const navigation = useNavigation();
  const [isFavorite, setIsFavorite] = useState(false);
  const [cast, setCast] = useState([1, 2, 3, 4]);
  const [similarMovies, setSimilarMovies] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9,
  ]);
  let moviesName = 'Ant-Man and the Wasp: Quantumania';
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
          <TouchableOpacity onPress={() => setIsFavorite(!isFavorite)}>
            <HeartIcon
              size="35"
              color={isFavorite ? theme.background : 'white'}
            />
          </TouchableOpacity>
        </SafeAreaView>
        <View>
          <Image
            source={require('../assets/images/moviePoster1.png')}
            style={{width, height: height * 0.55}}
          />
          <LinearGradient
            colors={[
              'transparent',
              'rgba(23, 23, 23, 0.8)',
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
          {moviesName}
        </Text>
        {/* status release runtiime */}
        <Text className="text-neutral-400 text-center text-base font-bold font-semibold">
          Released * 2020 * 170 min
        </Text>
        <View className="flex-row justify-center mx-4 space-x-2">
          <Text className="text-neutral-400 text-center text-base font-bold font-semibold">
            Action *
          </Text>
          <Text className="text-neutral-400 text-center text-base font-bold font-semibold">
            Thrill *
          </Text>
          <Text className="text-neutral-400 text-center text-base font-bold font-semibold">
            Comendy
          </Text>
        </View>
        {/* description */}
        <Text className="text-neutral-400 mx-4 tracking-wide">Abc</Text>
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
