/* eslint-disable react/self-closing-comp */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable curly */
import {
  View,
  Text,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {Loading} from '@components';
import React, {useState} from 'react';
import {styles, theme} from '../theme';
// import YouTube from 'react-native-youtube';
const {width} = Dimensions.get('window');
import Carousel from 'react-native-snap-carousel';
import {useNavigation} from '@react-navigation/native';
import {HeartIcon} from 'react-native-heroicons/solid';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ChevronLeftIcon} from 'react-native-heroicons/outline';

const SeeAllHBOScreen = ({route}) => {
  const data = route.params.data;
  const title = route.params.title;
  const firstItem = route.params.firstItem;
  const [isFavorite, setFavorite] = useState(false);

  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const MovieCard = ({item}) => {
    return (
      <View
        className="flex-row justify-center flex-wrap"
        style={{paddingVertical: 10}}>
        <Text
          className="text-white font-semibold ml-1"
          style={{
            fontSize: 16,
            paddingLeft: 10,
            fontWeight: '300',
            paddingTop: 10,
            color: 'white',
          }}>
          {item.title}
        </Text>
      </View>
    );
  };
  // return
  return (
    <View className="flex-1 bg-neutral-800 ">
      <SafeAreaView className="{ios} ? -mb-2 : -mb-3 bg-transparent">
        <View className="flex-row justify-between items-center mx-4">
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

      {/* Carousel */}
      {loading ? (
        <Loading />
      ) : data.length > 0 ? (
        <View>
          <Text
            style={{paddingHorizontal: 20}}
            className="text-white font-semibold ml-1">
            Results: ({data.length})
          </Text>
          <Carousel
            data={data}
            sliderWidth={width}
            firstItem={firstItem}
            itemWidth={width * 0.69}
            inactiveSlideScale={0.55}
            inactiveSlideOpacity={0.6}
            slideStyle={{
              display: 'flex',
              alignItems: 'center',
              paddingHorizontal: 15,
              marginVertical: 25,
              paddingBottom: 70,
            }}
            renderItem={({item}) => <MovieCard item={item} />}
          />
          <ScrollView showsVerticalScrollIndicator={false}>
            <View className="flex-row justify-center flex-wrap">
              {data.map((item, index) => {
                return (
                  <View
                    key={index}
                    className="flex-row justify-center flex-wrap">
                    <MovieCard item={item} />
                  </View>
                );
              })}
            </View>
            <View style={{marginTop: 600}}></View>
          </ScrollView>
        </View>
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
export default SeeAllHBOScreen;
