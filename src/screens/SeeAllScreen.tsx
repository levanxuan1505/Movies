/* eslint-disable react-native/no-inline-styles */
/* eslint-disable curly */
import {
  View,
  Text,
  Image,
  ScrollView,
  Dimensions,
  RefreshControl,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import {Loading} from '@components';
import React, {useState} from 'react';
import {styles, theme} from '../theme';
import {RootStackParams} from '@navigators';
const {width, height} = Dimensions.get('window');
import {useNavigation} from '@react-navigation/native';
import {HeartIcon} from 'react-native-heroicons/solid';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ChevronLeftIcon} from 'react-native-heroicons/outline';
import {fallbackMoviePoster, image500} from '../Api/MoviesDb';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const SeeAllScreen = ({route}) => {
  const data = route.params.data;
  const title = route.params.title;
  const [isFavorite, setFavorite] = useState(false);
  const [refreshing, setRefreshing] = React.useState(false);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 500);
  }, []);
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  const [loading, setLoading] = useState(false);
  // const results = data;
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
            <HeartIcon
              size="35"
              color={isFavorite ? theme.background : 'white'}
            />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      {loading ? (
        <Loading />
      ) : data.length > 0 ? (
        <ScrollView
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingHorizontal: 15, paddingTop: 100}}
          className="space-y-3">
          <Text className="text-white font-semibold ml-1">
            Results ({data.length})
          </Text>
          {data[0].slug ? (
            <View className="flex-row justify-between flex-wrap">
              {data.map((item, index) => {
                return (
                  <TouchableWithoutFeedback
                    key={index}
                    onPress={() =>
                      navigation.navigate('MoviesOphim', item.slug)
                    }>
                    <View className="space-y-2 mb-4">
                      <Image
                        source={{
                          uri:
                            `https://img.ophim8.cc/uploads/movies/${item.thumb_url}` ||
                            fallbackMoviePoster,
                        }}
                        className="rounded-3xl"
                        style={{width: width * 0.44, height: height * 0.3}}
                      />
                      <Text className="text-gray-300 ml-1">
                        {item?.title
                          ? item?.title.length > 22
                            ? item?.title.slice(0, 22) + '...'
                            : item?.title
                          : item?.name.length > 22
                          ? item?.name.slice(0, 22) + '...'
                          : item?.name}
                      </Text>
                    </View>
                  </TouchableWithoutFeedback>
                );
              })}
            </View>
          ) : (
            <View className="flex-row justify-between flex-wrap">
              {data.map((item, index) => {
                return (
                  <TouchableWithoutFeedback
                    key={index}
                    onPress={() => navigation.navigate('Movies', item)}>
                    <View className="space-y-2 mb-4">
                      <Image
                        source={{
                          uri:
                            image500(item.poster_path) || fallbackMoviePoster,
                        }}
                        className="rounded-3xl"
                        style={{width: width * 0.44, height: height * 0.3}}
                      />
                      <Text className="text-gray-300 ml-1">
                        {item?.title
                          ? item?.title.length > 22
                            ? item?.title.slice(0, 22) + '...'
                            : item?.title
                          : item?.name.length > 22
                          ? item?.name.slice(0, 22) + '...'
                          : item?.name}
                      </Text>
                    </View>
                  </TouchableWithoutFeedback>
                );
              })}
            </View>
          )}
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
export default SeeAllScreen;
