/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  Image,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
  VirtualizedList,
  TouchableWithoutFeedback,
} from 'react-native';
import {styles} from '../theme';
import {RootStackParams} from '@navigators';
const {width, height} = Dimensions.get('window');
import {fetchSimilarMovies} from '../Api/MoviesDb';
import React, {memo, useCallback, useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {image500, fallbackMoviePoster} from '../Api/MoviesDb';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

interface Props {
  title: string;
  hideSeeAll: boolean;
  idApi: number;
}
const WatchingList: React.FC<Props> = ({title, hideSeeAll, idApi}) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const [data, setListMovies] = useState([]);

  const getListMovies = useCallback(async id => {
    const data = await fetchSimilarMovies(id);
    if (data && data.results) {
      setListMovies(data.results);
    }
  }, []);
  useEffect(() => {
    getListMovies(idApi);
  }, [idApi, getListMovies]);
  const getItem = (data, index) => {
    return data[index];
  };
  const Watching = useCallback(
    ({item}) => {
      return (
        <TouchableWithoutFeedback
          onPress={() => navigation.push('Movies', item)}>
          <View>
            <ImageBackground
              source={{
                uri: image500(item.poster_path) || fallbackMoviePoster,
              }}
              className=" space-y-1 mr-4  rounded-3xl"
              style={{
                position: 'relative',
                width: width * 0.33,
                height: height * 0.22,
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: 5,
              }}>
              <Image
                style={{
                  position: 'absolute',
                  width: 45,
                  resizeMode: 'cover',
                  height: 45,
                  borderRadius: 100,
                }}
                source={require('../assets/images/pause.png')}
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
            <Text className="text-neutral-300 ml-1">
              {item.title.length > 14
                ? item.title.slice(0, 14) + '...'
                : item.title}
            </Text>
          </View>
        </TouchableWithoutFeedback>
      );
    },
    [navigation],
  );
  return (
    <View className="mb-8 space-y-4 w-full">
      <View className="mx-4 flex-row justify-between items-center">
        <Text className="text-white text-lg">{title}</Text>
        {!hideSeeAll && (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('Watching', {title: 'Watching'})
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
          width: Dimensions.get('screen').width,
          paddingHorizontal: 15,
          paddingVertical: 10,
        }}>
        <VirtualizedList
          data={data}
          horizontal={true}
          initialNumToRender={3}
          keyExtractor={item => item.id}
          getItemCount={data => data.length}
          getItem={getItem}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}: any) => <Watching item={item} />}
        />
      </View>
    </View>
  );
};
export default memo(WatchingList);
