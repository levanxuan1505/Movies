/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  VirtualizedList,
} from 'react-native';
import React from 'react';
import {RootStackParams} from '@navigators';
import {imageOphim} from '../../Api/MoviesDb';
const {width, height} = Dimensions.get('window');
import FastImage from 'react-native-fast-image';
import {fallbackMoviePoster} from '../../Api/MoviesDb';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
interface Props {
  data: any;
}
const Array = [
  {
    id: 1,
    title: 'Trending',
  },
  {
    id: 2,
    title: 'UpComing',
  },
  {
    id: 3,
    title: 'TopRated',
  },
  {
    id: 4,
    title: 'Now Playing',
  },
  {
    id: 5,
    title: 'Popular',
  },
  {
    id: 6,
    title: 'Maybe You Love',
  },
  {
    id: 7,
    title: 'Because You Watched Titanic',
  },
  {
    id: 8,
    title: 'Just For You',
  },
  {
    id: 9,
    title: 'Good Film Today',
  },
  {
    id: 10,
    title: 'Fantasy Adventure Movies',
  },
  {
    id: 11,
    title: 'Movies Theater',
  },
  {
    id: 12,
    title: 'Disney',
  },
  {
    id: 13,
    title: 'Movies For Kids',
  },
  {
    id: 14,
    title: 'Special Anime',
  },
  {
    id: 15,
    title: 'Special Anime',
  },
  {
    id: 16,
    title: 'The Green Arrow 2024',
  },
  {
    id: 17,
    title: 'Action Movies',
  },
  {
    id: 18,
    title: 'Asian Drama Max',
  },
  {
    id: 19,
    title: 'American Movies',
  },
  {
    id: 20,
    title: 'The World Around Us',
  },
  {
    id: 21,
    title: 'Russia Drama Movies',
  },
  {
    id: 22,
    title: 'ThaiLand Movies',
  },
];
const getItem = (data, index) => {
  return data[index];
};
const HomeBodyComponent: React.FC<Props> = ({data}) => {
  const styles = StyleSheet.create({
    text: {
      width:
        data?.pagination.currentPage === 3 ||
        data?.pagination.currentPage === 6 ||
        data?.pagination.currentPage === 10 ||
        data?.pagination.currentPage === 13 ||
        data?.pagination.currentPage === 15 ||
        data?.pagination.currentPage === 18 ||
        data?.pagination.currentPage === 22
          ? width * 0.6
          : width * 0.22,
    },
    Image: {
      width:
        data.pagination.currentPage === 3 ||
        data.pagination.currentPage === 6 ||
        data.pagination.currentPage === 10 ||
        data.pagination.currentPage === 13 ||
        data.pagination.currentPage === 15 ||
        data.pagination.currentPage === 18 ||
        data.pagination.currentPage === 22
          ? width * 0.7
          : width * 0.26,
      height: height * 0.17,
    },
  });
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  const Movies = ({item}) => {
    return (
      item &&
      item.origin_name && (
        <TouchableOpacity
          onPress={() => navigation.push('MoviesOphim', item.slug)}>
          <View className="space-y-1 w-full mr-1">
            <FastImage
              defaultSource={require('../../assets/images/Progress.png')}
              source={{
                uri:
                  data.pagination.currentPage === 3 ||
                  data.pagination.currentPage === 6 ||
                  data.pagination.currentPage === 10 ||
                  data.pagination.currentPage === 13 ||
                  data.pagination.currentPage === 15 ||
                  data.pagination.currentPage === 18 ||
                  data.pagination.currentPage === 22
                    ? imageOphim(item?.poster_url) || fallbackMoviePoster
                    : imageOphim(item?.thumb_url) || fallbackMoviePoster,
                headers: {Authorization: 'someAuthToken'},
                priority: FastImage.priority.normal,
              }}
              resizeMode={FastImage.resizeMode.cover}
              style={styles.Image}
            />
            <Text
              numberOfLines={1}
              style={styles.text}
              className="text-neutral-300 ml-1">
              {item?.origin_name}
            </Text>
          </View>
        </TouchableOpacity>
      )
    );
  };

  const renderItems = ({item}) => {
    return item && <Movies item={item} />;
  };

  return (
    data.items &&
    data.items.length > 0 && (
      <>
        <View className="mb-3 space-y-1 w-full">
          <View className="mx-2 flex-row justify-between items-center">
            <Text className="text-white font-Primary text-[15px]">
              {Array.map(item => {
                if (item.id === data.pagination.currentPage) {
                  return item.title;
                }
              })}
            </Text>

            <TouchableOpacity
              onPress={() =>
                navigation.navigate('SeeAll', {
                  title: Array.map(item => {
                    if (item.id === data.pagination.currentPage) {
                      return item.title;
                    }
                  }),
                  data: data.items,
                })
              }>
              <Text className="text-lg font-Primary text-[15px] color-greenColor">
                See All
              </Text>
            </TouchableOpacity>
          </View>

          <View className="px-[8px]">
            {data.items && data.items.length > 0 && (
              <VirtualizedList
                horizontal={true}
                getItem={getItem}
                initialNumToRender={4}
                disableVirtualization={true}
                data={data.items.slice(0, 10)}
                keyExtractor={item => item._id}
                getItemCount={data => data.length}
                extraData={item => item._id.toString()}
                showsHorizontalScrollIndicator={false}
                renderItem={renderItems}
              />
            )}
          </View>
        </View>
      </>
    )
  );
};

export default React.memo(HomeBodyComponent);
