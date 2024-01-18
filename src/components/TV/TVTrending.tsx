/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable curly */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
/**
 *
 * Inspiration: https://dribbble.com/shots/3731362-Event-cards-iOS-interaction
 */

import {
  Text,
  View,
  FlatList,
  Animated,
  Dimensions,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {
  State,
  Directions,
  FlingGestureHandler,
} from 'react-native-gesture-handler';
import React from 'react';
const {width} = Dimensions.get('screen');
import {image500} from '../../Api/MoviesDb';
import {RootStackParams} from '@navigators';
import FastImage from 'react-native-fast-image';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {fallbackMoviePoster, fetchTvChannelsMovies} from '../../Api/MoviesDb';
const OVERFLOW_HEIGHT = 70;
const SPACING = 10;
const ITEM_WIDTH = width * 0.62;
const ITEM_HEIGHT = ITEM_WIDTH * 1.45;
const VISIBLE_ITEMS = 3;
const OverflowItems = ({data, scrollXAnimated}) => {
  const inputRange = [-1, 0, 1];
  const translateY = scrollXAnimated.interpolate({
    inputRange,
    outputRange: [OVERFLOW_HEIGHT, 0, -OVERFLOW_HEIGHT],
  });
  return (
    <View style={styles.overflowContainer}>
      <Animated.View style={{transform: [{translateY}]}}>
        {data.map((item, index) => {
          return (
            <View key={index} style={styles.itemContainer}>
              <View style={styles.itemContainerRow}>
                <Text style={[styles.title]} numberOfLines={1}>
                  {item?.name}
                </Text>
              </View>
            </View>
          );
        })}
      </Animated.View>
    </View>
  );
};

const TVTrending = () => {
  const [data, setData] = React.useState([]);
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  React.useEffect(() => {
    setTimeout(() => {}, 1000);
  }, []);
  //   Call API
  React.useEffect(() => {
    getTvChannelsMovies();
  }, []);
  const getTvChannelsMovies = React.useCallback(async () => {
    const tv = await fetchTvChannelsMovies();
    if (tv && tv.results) setData(tv.results);
  }, []);

  const scrollXIndex = React.useRef(new Animated.Value(0)).current;
  const scrollXAnimated = React.useRef(new Animated.Value(0)).current;
  const [index, setIndex] = React.useState(0);
  const setActiveIndex = React.useCallback(activeIndex => {
    scrollXIndex.setValue(activeIndex);
    setIndex(activeIndex);
  }, []);

  React.useEffect(() => {
    if (index === data.length - VISIBLE_ITEMS - 1) {
      // get new data
      // fetch more data
      const newData = [...data, ...data];
      setData(newData);
    }
  });

  React.useEffect(() => {
    Animated.spring(scrollXAnimated, {
      toValue: scrollXIndex,
      useNativeDriver: true,
    }).start();
  });

  return (
    <FlingGestureHandler
      key="left"
      direction={Directions.LEFT}
      onHandlerStateChange={ev => {
        if (ev.nativeEvent.state === State.END) {
          if (index === data.length - 1) {
            return;
          }
          setActiveIndex(index + 1);
        }
      }}>
      <FlingGestureHandler
        key="right"
        direction={Directions.RIGHT}
        onHandlerStateChange={ev => {
          if (ev.nativeEvent.state === State.END) {
            if (index === 0) {
              return;
            }
            setActiveIndex(index - 1);
          }
        }}>
        <SafeAreaView style={styles.container}>
          {/* <StatusBar hidden /> */}
          <OverflowItems data={data} scrollXAnimated={scrollXAnimated} />
          <FlatList
            data={data}
            keyExtractor={(_, index) => String(index)}
            horizontal
            inverted
            contentContainerStyle={{
              flex: 1,
              justifyContent: 'center',
              padding: SPACING * 2,
              marginTop: 5,
            }}
            scrollEnabled={false}
            removeClippedSubviews={false}
            CellRendererComponent={({
              item,
              index,
              style,
              children,
              ...props
            }) => {
              const newStyle = [style, {zIndex: data.length - index}];
              return (
                <View style={newStyle} index={index} {...props}>
                  {children}
                </View>
              );
            }}
            renderItem={({item, index}) => {
              const inputRange = [index - 1, index, index + 1];
              const translateX = scrollXAnimated.interpolate({
                inputRange,
                outputRange: [50, 0, -100],
              });
              const scale = scrollXAnimated.interpolate({
                inputRange,
                outputRange: [0.8, 1, 1.3],
              });
              const opacity = scrollXAnimated.interpolate({
                inputRange,
                outputRange: [1 - 1 / VISIBLE_ITEMS, 1, 0],
              });

              return (
                <TouchableOpacity
                  onPress={() => navigation.push('Movies', item)}>
                  <Animated.View
                    style={{
                      position: 'absolute',
                      left: -ITEM_WIDTH / 2,
                      opacity,
                      transform: [
                        {
                          translateX,
                        },
                        {scale},
                      ],
                    }}>
                    <FastImage
                      defaultSource={require('../../assets/images/Progress.png')}
                      source={{
                        uri: image500(item.poster_path) || fallbackMoviePoster,
                        headers: {Authorization: 'someAuthToken'},
                        priority: FastImage.priority.high,
                        cache: FastImage.cacheControl.immutable,
                      }}
                      resizeMode={FastImage.resizeMode.cover}
                      style={{
                        width: ITEM_WIDTH,
                        height: ITEM_HEIGHT,
                        borderRadius: 12,
                      }}
                    />
                  </Animated.View>
                </TouchableOpacity>
              );
            }}
          />
        </SafeAreaView>
      </FlingGestureHandler>
    </FlingGestureHandler>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 460,
    marginTop: 110,
    justifyContent: 'center',
    backgroundColor: 'rgb(23, 23, 23)',
  },
  title: {
    fontSize: 24,
    color: 'white',
    letterSpacing: -1,
    textTransform: 'uppercase',
    fontFamily: 'Shrikhand-Regular',
  },
  location: {
    fontSize: 16,
    color: 'white',
  },
  date: {
    fontSize: 12,
    color: 'white',
  },
  itemContainer: {
    padding: SPACING * 2,
    height: OVERFLOW_HEIGHT,
  },
  itemContainerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  overflowContainer: {
    marginTop: -42,
    overflow: 'hidden',
    height: OVERFLOW_HEIGHT - 18,
  },
});
export default TVTrending;
