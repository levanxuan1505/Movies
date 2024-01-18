/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  Image,
  Platform,
  Dimensions,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {
  image342,
  fetchPersonDetails,
  fallbackPersonImage,
} from '../Api/MoviesDb';
import {RootStackParams} from '@navigators';
import React, {useEffect, useState} from 'react';
import {ActorMoviesList, Loading} from '@components';
import {HeartIcon} from 'react-native-heroicons/solid';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ChevronLeftIcon} from 'react-native-heroicons/outline';
import {useNavigation, useRoute} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RouteProp, NavigationProp} from '@react-navigation/native';
// Assuming RootStackParams is the type for your stack
type ActorScreen = {
  route: RouteProp<RootStackParams, 'Actor'>;
  navigation: NavigationProp<RootStackParams, 'Actor'>;
};
const ios = Platform.OS === 'ios';
const verticalMargin = ios ? '' : ' my-3';
let {width, height} = Dimensions.get('window');
const ActorScreen: React.FC<ActorScreen> = () => {
  const {params: item} = useRoute();
  const [person, setPerson] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isFavorite, toggleFavorite] = useState(false);
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  useEffect(() => {
    getPersonDetails(item);
  }, [item]);

  const getPersonDetails = async id => {
    setLoading(true);
    const data = await fetchPersonDetails(id);
    if (data) {
      setPerson(data);
      setLoading(false);
    }
  };

  const Body = () => {
    return (
      <View className="flex-1 w-screen bg-neutral-900 position: relative">
        <SafeAreaView
          className={
            'flex-row justify-between items-center mx-4 z-10 ' + verticalMargin
          }>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="rounded-xl p-1"
            style={styles.background}>
            <ChevronLeftIcon size="28" strokeWidth={2.5} color="white" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => toggleFavorite(!isFavorite)}>
            <HeartIcon size="35" color={isFavorite ? 'green' : 'white'} />
          </TouchableOpacity>
        </SafeAreaView>

        {loading ? (
          <Loading />
        ) : (
          <View>
            <View className="flex-row justify-center" style={styles.Background}>
              <View className="items-center rounded-full overflow-hidden h-72 w-72 border-neutral-500 border-2">
                <Image
                  source={{
                    uri: image342(person?.profile_path) || fallbackPersonImage,
                  }}
                  style={styles.Image}
                />
              </View>
            </View>
            <View className="mt-6">
              <Text className="text-3xl text-white font-bold text-center">
                {person?.name}
              </Text>
              <Text className="text-neutral-500 text-base text-center">
                {person?.place_of_birth}
              </Text>
            </View>
            <View className="mx-3 p-4 mt-6 flex-row justify-between items-center bg-neutral-700 rounded-full ">
              <View className="border-r-2 border-r-neutral-400 px-2 items-center">
                <Text className="text-white font-semibold ">Gender</Text>
                <Text className="text-neutral-300 text-sm">
                  {person?.gender === 1 ? 'Female' : 'Male'}
                </Text>
              </View>
              <View className="border-r-2 border-r-neutral-400 px-2 items-center">
                <Text className="text-white font-semibold">Birthday</Text>
                <Text className="text-neutral-300 text-sm">
                  {person?.birthday}
                </Text>
              </View>
              <View className="border-r-2 border-r-neutral-400 px-2 items-center">
                <Text className="text-white font-semibold">Known for</Text>
                <Text className="text-neutral-300 text-sm">
                  {person?.known_for_department}
                </Text>
              </View>
              <View className="px-2 items-center">
                <Text className="text-white font-semibold">Popularity</Text>
                <Text className="text-neutral-300 text-sm">
                  {person?.popularity?.toFixed(2)} %
                </Text>
              </View>
            </View>
            <View className="my-6 mx-4 space-y-2">
              <Text className="text-white text-lg">Biography</Text>
              <Text className="text-neutral-400 tracking-wide">
                {person?.biography ? person?.biography : 'N/A'}
              </Text>
            </View>
            <View>
              {item && (
                <ActorMoviesList
                  title="Movies"
                  hideSeeAll={true}
                  idApi={item}
                />
              )}
            </View>
          </View>
        )}
      </View>
    );
  };
  const handleScroll = event => {
    const offsetY = event.nativeEvent.contentOffset.y;
    if (offsetY < -70) {
      navigation.goBack();
    }
  };
  return (
    <ScrollView
      onScroll={handleScroll}
      scrollEventThrottle={16}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.scroll}
      className=" bg-neutral-900">
      <Body />
    </ScrollView>
  );
};
export default ActorScreen;
const styles = StyleSheet.create({
  Image: {
    height: height * 0.43,
    width: width * 0.74,
  },
  Background: {
    shadowOpacity: 1,
    shadowColor: 'gray',
    shadowRadius: 40,
    shadowOffset: {width: 0, height: 5},
  },
  background: {
    backgroundColor: '#00AA13',
  },
  scroll: {
    paddingBottom: 20,
  },
});
