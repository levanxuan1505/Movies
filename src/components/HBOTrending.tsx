/* eslint-disable curly */
/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Image,
  FlatList,
  Animated,
  Platform,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {RootStackParams} from '@navigators';
const {width, height} = Dimensions.get('window');
import {fetchTopRatedMovies} from '../Api/MoviesDb';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import {image500, fallbackMoviePoster} from '../Api/MoviesDb';
import React, {memo, useCallback, useEffect, useState} from 'react';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
const SPACING = 10;
const ITEM_SIZE = Platform.OS === 'ios' ? width * 0.72 : width * 0.74;
const EMPTY_ITEM_SIZE = (width - ITEM_SIZE) / 2;
const BACKDROP_HEIGHT = height * 0.607;

const Backdrop = ({movies, scrollX}) => {
  return (
    <View style={{height: BACKDROP_HEIGHT, width, position: 'absolute'}}>
      <FlatList
        data={movies.reverse()}
        keyExtractor={item => item.id}
        removeClippedSubviews={false}
        contentContainerStyle={{width, height: BACKDROP_HEIGHT}}
        renderItem={({item, index}) => {
          if (!item.poster_path) {
            return null;
          }
          const translateX = scrollX.interpolate({
            inputRange: [(index - 2) * ITEM_SIZE, (index - 1) * ITEM_SIZE],
            outputRange: [0, width * 1.1],
            extrapolate: 'clamp',
          });
          return (
            <Animated.View
              removeClippedSubviews={false}
              style={{
                position: 'absolute',
                width: translateX,
                height,
                overflow: 'hidden',
              }}>
              <Image
                source={{
                  uri: image500(item.poster_path) || fallbackMoviePoster,
                }}
                style={{
                  width,
                  height: BACKDROP_HEIGHT,
                  position: 'absolute',
                }}
              />
            </Animated.View>
          );
        }}
      />
      <LinearGradient
        colors={['transparent', 'rgba(23, 23, 23, 0.6)', 'rgba(23, 23, 23, 1)']}
        className="absolute bottom-0"
        style={{width, height: height * 0.5}}
        start={{x: 0.5, y: 0}}
        end={{x: 0.5, y: 1}}
      />
    </View>
  );
};

const HBOTrending = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const scrollX = React.useRef(new Animated.Value(0)).current;
  const [data, setHBOMovies] = useState([]);
  const movies = [{id: 'left'}, ...data, {id: 'right'}];
  const getTrendingHBOMovies = useCallback(async () => {
    const data = await fetchTopRatedMovies();
    if (data && data.results) setHBOMovies(data.results);
  }, []);
  useEffect(() => {
    getTrendingHBOMovies();
  }, [getTrendingHBOMovies]);

  return (
    movies && (
      <View style={styles.container}>
        <Backdrop movies={movies} scrollX={scrollX} />
        {/* <StatusBar hidden /> */}
        <Animated.FlatList
          showsHorizontalScrollIndicator={false}
          data={movies}
          keyExtractor={item => item.id}
          horizontal
          bounces={false}
          decelerationRate={Platform.OS === 'ios' ? 0 : 0.98}
          renderToHardwareTextureAndroid
          contentContainerStyle={{alignItems: 'flex-start', paddingTop: 32}}
          snapToInterval={ITEM_SIZE}
          snapToAlignment="start"
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            {useNativeDriver: false},
          )}
          scrollEventThrottle={16}
          renderItem={({item, index}: any) => {
            if (!item.poster_path) {
              return <View style={{width: EMPTY_ITEM_SIZE}} />;
            }
            const inputRange = [
              (index - 2) * ITEM_SIZE,
              (index - 1) * ITEM_SIZE,
              index * ITEM_SIZE,
            ];
            const translateY = scrollX.interpolate({
              inputRange,
              outputRange: [100, 50, 100],
              extrapolate: 'clamp',
            });

            return (
              <TouchableWithoutFeedback
                onPress={() => navigation.push('Movies', item)}
                style={{width: ITEM_SIZE}}>
                <Animated.View
                  className="bg-neutral-800"
                  style={{
                    shadowRadius: 5,
                    shadowOpacity: 0.9,
                    alignItems: 'center',
                    position: 'relative',
                    shadowColor: '#171717',
                    marginHorizontal: SPACING,
                    transform: [{translateY}],
                    shadowOffset: {width: -2, height: 4},
                  }}>
                  <Image
                    source={{
                      uri: image500(item.poster_path) || fallbackMoviePoster,
                    }}
                    style={{
                      width: width * 0.672,
                      height: height * 0.45,
                    }}
                  />
                  <Image
                    source={require('../assets/images/logoHBO.png')}
                    style={{
                      right: 0,
                      top: -10,
                      width: width * 0.2,
                      position: 'absolute',
                      height: height * 0.06,
                    }}
                  />
                </Animated.View>
              </TouchableWithoutFeedback>
            );
          }}
        />
      </View>
    )
  );
};
const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    height: 540,
    marginBottom: 32,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  posterImage: {
    width: '100%',
    height: ITEM_SIZE * 1.3,
  },
});

export default memo(HBOTrending);
