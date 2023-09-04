/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import {
  image185,
  fetchPersonMovies,
  fallbackMoviePoster,
} from '../Api/MoviesDb';
import {RootStackParams} from '@navigators';
import {FlashList} from '@shopify/flash-list';
import React, {useEffect, useState} from 'react';
const {width, height} = Dimensions.get('window');
import {useNavigation} from '@react-navigation/native';
import {View, Text, Image, Dimensions, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
interface Props {
  title: string;
  hideSeeAll: boolean;
  idApi: number;
}
const ActorMoviesList: React.FC<Props> = ({title, hideSeeAll, idApi}) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const [personMovies, setPersonMovies] = useState([]);
  const getPersonMovies = async id => {
    const data = await fetchPersonMovies(id);
    if (data && data.cast) {
      setPersonMovies(data.cast);
    }
  };
  useEffect(() => {
    getPersonMovies(idApi);
  }, [idApi]);

  const Movies = ({item}) => {
    return (
      <TouchableOpacity onPress={() => navigation.push('Movies', item)}>
        <View className="space-y-1 mr-1">
          <Image
            source={{
              uri: image185(item.poster_path) || fallbackMoviePoster,
            }}
            className="rounded-xl"
            style={styles.Image}
          />
          <Text numberOfLines={1} className="text-neutral-300 ml-1 w-24">
            {item.title}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View className="mb-3 space-y-1 w-full">
      <View className="mx-2 flex-row justify-between items-center">
        <Text className="text-white text-lg">{title}</Text>
        {!hideSeeAll && (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('SeeAll', {title: title, data: personMovies})
            }>
            <Text className="text-lg font-Primary text-[15px] color-greenColor">
              See All
            </Text>
          </TouchableOpacity>
        )}
      </View>
      <View>
        {personMovies && personMovies.length > 0 && (
          <FlashList
            data={personMovies}
            horizontal={true}
            estimatedItemSize={15}
            estimatedListSize={{
              height: 100,
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
export default ActorMoviesList;
const styles = StyleSheet.create({
  Image: {
    width: width * 0.26,
    height: height * 0.17,
  },
});
