/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable curly */
import {
  View,
  Text,
  Image,
  ScrollView,
  Dimensions,
  RefreshControl,
  ImageBackground,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import {styles} from '../theme';
import {Loading} from '@components';
import {RootStackParams} from '@navigators';
const {width, height} = Dimensions.get('window');
import React, {useEffect, useState} from 'react';
import {fetchNowPlayingMovies} from '../Api/MoviesDb';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {SafeAreaView} from 'react-native-safe-area-context';
import {fallbackMoviePoster, image342} from '../Api/MoviesDb';
import {ChevronLeftIcon} from 'react-native-heroicons/outline';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const WatchingScreen = ({route}) => {
  const title = route.params.title;
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  const [loading, setLoading] = useState(false);
  const [isFavorite, setFavorite] = useState(false);
  const [refreshing, setRefreshing] = React.useState(false);
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  useEffect(() => {
    getNowPlayingMovies();
  }, []);
  const getNowPlayingMovies = async () => {
    const data = await fetchNowPlayingMovies();
    if (data && data.results) setNowPlayingMovies(data.results);
  };
  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 500);
  };

  return (
    <View style={{position: 'relative'}} className="flex-1 bg-neutral-800 ">
      <SafeAreaView
        style={{
          backgroundColor: 'rgba(38, 38, 38, 0.7)',
          position: 'absolute',
          zIndex: 1,
          paddingBottom: -25,
          paddingTop: -8,
        }}
        className="{ios} ? -mb-2 : -mb-3">
        <View
          style={{width: width, paddingHorizontal: 20}}
          className="flex-row justify-between items-center">
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="rounded-xl p-1"
            style={styles.background}>
            <ChevronLeftIcon size="28" strokeWidth={2.5} color="white" />
          </TouchableOpacity>
          <Text className="text-white text-3xl font-bold">
            <Text style={styles.text}>---{title}---</Text>
          </Text>
          <TouchableOpacity onPress={() => setFavorite(!isFavorite)}>
            <Icon name="history" size={40} color="#00AA13" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      {loading ? (
        <Loading />
      ) : nowPlayingMovies.length > 0 ? (
        <ScrollView
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingHorizontal: 15, paddingTop: 100}}
          className="space-y-3">
          <Text className="text-white font-semibold ml-1">
            Results ({nowPlayingMovies.length})
          </Text>
          <View className="flex-row justify-between flex-wrap">
            {nowPlayingMovies.map((item, index): any => {
              return (
                <TouchableWithoutFeedback
                  key={index}
                  onPress={() => navigation.navigate('Movies', item)}>
                  <View className="space-y-2 mb-4">
                    <ImageBackground
                      source={{
                        uri: image342(item.poster_path) || fallbackMoviePoster,
                      }}
                      style={{
                        position: 'relative',
                        width: width * 0.44,
                        height: height * 0.3,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Image
                        style={{
                          position: 'absolute',
                          width: 55,
                          resizeMode: 'cover',
                          height: 55,
                          borderRadius: 100,
                          tintColor: 'white',
                        }}
                        source={require('../assets/images/playButton.png')}
                      />
                      <View
                        style={{
                          position: 'absolute',
                          bottom: 0,
                          left: 0,
                          width: '100%',
                          borderWidth: 3,
                          borderColor: '#C2C2CB',
                        }}></View>
                      <View
                        style={{
                          borderColor: '#00AA13',
                          position: 'absolute',
                          left: 0,
                          bottom: 0,
                          width: Math.floor(Math.random() * 120),
                          borderWidth: 3,
                        }}></View>
                    </ImageBackground>
                    <Text className="text-gray-300 ml-1">
                      {item.title.length > 22
                        ? item.title.slice(0, 22) + '...'
                        : item.title}
                    </Text>
                  </View>
                </TouchableWithoutFeedback>
              );
            })}
          </View>
        </ScrollView>
      ) : (
        <View className="flex-row justify-center">
          <Image
            source={require('../assets/images/movieTime.png')}
            className="h-96 w-96"
          />
        </View>
      )}
    </View>
  );
};
export default WatchingScreen;
