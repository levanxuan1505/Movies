/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import {
  image185,
  fetchPersonMovies,
  fallbackMoviePoster,
} from '../Api/MoviesDb';
import {RootStackParams} from '@navigators';
// import {FlashList} from '@shopify/flash-list';
import React, {Suspense, useEffect, useState} from 'react';
const {width, height} = Dimensions.get('window');
import {useNavigation} from '@react-navigation/native';
import {
  View,
  Text,
  Image,
  Dimensions,
  VirtualizedList,
  StyleSheet,
} from 'react-native';
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
      <Suspense>
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
      </Suspense>
    );
  };
  const getItem = (data, index) => {
    return data[index];
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
      <View className="px-[8px]">
        {personMovies && personMovies.length > 0 && (
          <VirtualizedList
            data={personMovies}
            horizontal={true}
            getItem={getItem}
            initialNumToRender={4}
            disableVirtualization={true}
            keyExtractor={item => item.id}
            getItemCount={data => data.length}
            showsHorizontalScrollIndicator={false}
            renderItem={({item}: any) => <Movies item={item} />}
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
