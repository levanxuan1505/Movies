/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import {
  image500,
  fetchPersonMovies,
  fallbackMoviePoster,
} from '../Api/MoviesDb';
import {styles} from '../theme';
import {RootStackParams} from '@navigators';
const {width, height} = Dimensions.get('window');
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import React, {memo, useCallback, useEffect, useState} from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {View, Text, Image, Dimensions, VirtualizedList} from 'react-native';
interface Props {
  title: string;
  hideSeeAll: boolean;
  idApi: number;
}
const ActorMoviesList: React.FC<Props> = ({title, hideSeeAll, idApi}) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const [personMovies, setPersonMovies] = useState([]);
  const getPersonMovies = useCallback(async id => {
    const data = await fetchPersonMovies(id);
    if (data && data.cast) {
      setPersonMovies(data.cast);
    }
  }, []);
  useEffect(() => {
    getPersonMovies(idApi);
  }, [getPersonMovies, idApi]);

  const getItem = (data, index) => {
    return data[index];
  };
  const Movies = ({item}) => {
    return (
      <TouchableOpacity onPress={() => navigation.push('Movies', item)}>
        <View className="space-y-1 mr-4">
          <Image
            source={{
              uri: image500(item.poster_path) || fallbackMoviePoster,
            }}
            className="rounded-xl"
            style={{width: width * 0.33, height: height * 0.22}}
          />
          <Text className="text-neutral-300 ml-1">
            {item.title.length > 14
              ? item.title.slice(0, 14) + '...'
              : item.title}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View className="mb-8 space-y-4 w-full">
      <View className="mx-4 flex-row justify-between items-center">
        <Text className="text-white text-lg">{title}</Text>
        {!hideSeeAll && (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('SeeAll', {title: title, data: personMovies})
            }>
            <Text style={styles.text} className="text-lg">
              See All
            </Text>
          </TouchableOpacity>
        )}
      </View>
      <View
        style={{
          flex: 1,
          minHeight: 2,
          height: 'auto',
          paddingVertical: 10,
          paddingHorizontal: 15,
          width: Dimensions.get('screen').width,
        }}>
        <VirtualizedList
          data={personMovies}
          horizontal={true}
          getItem={getItem}
          initialNumToRender={3}
          keyExtractor={item => item.id}
          getItemCount={DATA => DATA.length}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => {
            return <Movies item={item} />;
          }}
        />
      </View>
    </View>
  );
};
export default memo(ActorMoviesList);
