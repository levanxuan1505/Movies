/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import {styles, theme} from '../theme';
import {VideoComponent} from '@components';
import {RootStackParams} from '@navigators';
var {width, height} = Dimensions.get('window');
import {HeartIcon} from 'react-native-heroicons/solid';
import {ScrollView} from 'react-native-virtualized-view';
import LinearGradient from 'react-native-linear-gradient';
import {View, Text, Dimensions, Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {ChevronLeftIcon} from 'react-native-heroicons/outline';
import {useNavigation, useRoute} from '@react-navigation/native';
import React, {memo, useCallback, useEffect, useMemo, useState} from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {fetchDetailsMoviesOphim, fallbackMoviePoster} from '../Api/MoviesDb';
export interface Data {
  id: string;
  password: number;
  slug: string;
}
const MoviesOphimScreen = () => {
  const {params: slug} = useRoute();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const [dataOphim, setMovie] = useState([[]]);
  useEffect(() => {
    getMovieDetails(slug);
  }, [slug]);
  const getMovieDetails = useCallback(
    async slug => {
      const data = await fetchDetailsMoviesOphim(slug);
      if (data) {
        setMovie({...data?.episodes[0], ...data?.movie});
      }
    },
    [slug],
  );

  const moviesId = dataOphim?.server_data?.slug && dataOphim?.server_data?.slug;

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
                uri: dataOphim.thumb_url || fallbackMoviePoster,
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

        <View style={{marginTop: -(height * 0.09)}} className="space-y-3">
          <Text className="text-white text-center text-3xl font-bold tracking-wider">
            {dataOphim.name}
          </Text>
          {dataOphim?._id ? (
            <Text className="text-neutral-400 font-semibold text-2xl  text-center">
              {dataOphim?.type.charAt(0).toUpperCase() +
                dataOphim?.type.slice(1).toLowerCase() +
                ' '}
              •
              {' ' +
                dataOphim?.status.charAt(0).toUpperCase() +
                dataOphim?.status.slice(1).toLowerCase() +
                ' '}
              •{' ' + dataOphim?.year}
            </Text>
          ) : null}
          <View className="flex-row justify-center mx-4 space-x-2">
            {dataOphim?._id ? (
              <Text className="text-neutral-400 font-semibold text-base text-center">
                {dataOphim?.category[0]?.name} • {dataOphim?.country[0]?.name} •
                {' ' + dataOphim?.view + ' View'}
              </Text>
            ) : null}
          </View>
          <Text className="text-neutral-400 mx-4 tracking-wide">
            {dataOphim?.content}
          </Text>
        </View>
      </>
    );
  };
  const [idVideo, setIdVideo] = useState(moviesId);
  const [isChoose, setIsChoose] = useState('0');
  const Footer = () => {
    return (
      <>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            paddingHorizontal: 16,
            marginBottom: 20,
          }}>
          <Text
            style={{
              fontSize: 24,
              fontFamily: 'Shrikhand-Regular',
            }}
            className="text-neutral-200 font-semibold">
            <Text>Total Episodes: </Text>
            <Text>
              {dataOphim?.server_data ? dataOphim?.server_data.length : null}
            </Text>
          </Text>
        </View>

        {dataOphim?.server_data ? (
          <View className="flex-row flex-start flex-wrap">
            {dataOphim?.server_data.map((items, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => {
                    setIsChoose(items.name), setIdVideo(items.link_m3u8);
                  }}
                  style={{
                    width: 77,
                    height: 50,
                    borderRadius: 7,
                    marginBottom: 30,
                    alignItems: 'center',
                    marginHorizontal: 15,
                    paddingHorizontal: 20,
                    justifyContent: 'center',
                    backgroundColor: items.name === isChoose ? 'green' : 'red',
                  }}>
                  <Text
                    style={{
                      fontSize: 22,
                      color: 'white',
                      fontFamily: 'Shrikhand-Regular',
                    }}>
                    {items.name}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        ) : null}
      </>
    );
  };
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{paddingBottom: 20}}
      className=" bg-neutral-900">
      <Header />
      <VideoComponent idVideo={idVideo} />
      <Footer />
    </ScrollView>
  );
};

export default MoviesOphimScreen;
