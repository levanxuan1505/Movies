/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import {
  Image,
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
    id: 31,
    title: 'HBO Trending',
  },
  {
    id: 32,
    title: 'HBO UpComing',
  },
  {
    id: 33,
    title: 'HBO TopRated',
  },
  {
    id: 34,
    title: 'HBO 24H',
  },
  {
    id: 35,
    title: 'HBO Popular',
  },
  {
    id: 36,
    title: 'HITS',
  },
  {
    id: 37,
    title: 'Because You Watched Titanic',
  },
  {
    id: 38,
    title: 'AXN Cinema Worlds',
  },
  {
    id: 39,
    title: 'Ophim Fast & Furious 9',
  },
  {
    id: 40,
    title: 'FOX Discover',
  },
  {
    id: 41,
    title: 'Game Of Thrones',
  },
  {
    id: 42,
    title: 'Disney',
  },
  {
    id: 43,
    title: 'Harry Potter',
  },
  {
    id: 44,
    title: 'The World Around Us',
  },
  {
    id: 45,
    title: 'Anecdotes About Bloodsuckers',
  },
  {
    id: 46,
    title: 'Children And Families',
  },
  {
    id: 47,
    title: 'KBS GO Series',
  },
  {
    id: 48,
    title: 'HBO MAX Cinema',
  },
  {
    id: 49,
    title: 'The Flash 2023',
  },
  {
    id: 50,
    title: 'Fierce Battlefield',
  },
];
const getItem = (data, index) => {
  return data[index];
};
const HBOBodyComponent: React.FC<Props> = ({data}) => {
  const styles = StyleSheet.create({
    text: {
      width:
        data?.pagination.currentPage === 32 ||
        data?.pagination.currentPage === 35 ||
        data?.pagination.currentPage === 37 ||
        data?.pagination.currentPage === 40 ||
        data?.pagination.currentPage === 45 ||
        data?.pagination.currentPage === 48
          ? width * 0.6
          : width * 0.22,
    },
    Image: {
      width:
        data?.pagination.currentPage === 32 ||
        data?.pagination.currentPage === 35 ||
        data?.pagination.currentPage === 37 ||
        data?.pagination.currentPage === 40 ||
        data?.pagination.currentPage === 45 ||
        data?.pagination.currentPage === 48
          ? width * 0.7
          : width * 0.26,
      height: height * 0.17,
    },
    GO: {
      position: 'absolute',
      left: 0,
      top: -14,
      width: width * 0.13,
      height: height * 0.04,
    },
    MAX: {
      position: 'absolute',
      top: 0,
      left: 4,
      width: width * 0.12,
      height: height * 0.009,
    },
    AXN: {
      position: 'absolute',
      top: 0,
      left: 4,
      width: width * 0.11,
      height: height * 0.008,
    },
    FOX: {
      position: 'absolute',
      top: 2,
      left: 0,
      width: width * 0.17,
      height: height * 0.01,
    },
    KBS: {
      position: 'absolute',
      top: 2,
      left: 3,
      width: width * 0.15,
      height: height * 0.009,
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
          <View className="space-y-1 mr-1">
            <FastImage
              defaultSource={require('../../assets/images/Progress.png')}
              source={{
                uri:
                  data.pagination.currentPage === 32 ||
                  data.pagination.currentPage === 35 ||
                  data.pagination.currentPage === 37 ||
                  data.pagination.currentPage === 40 ||
                  data.pagination.currentPage === 45 ||
                  data.pagination.currentPage === 48
                    ? imageOphim(item?.poster_url) || fallbackMoviePoster
                    : imageOphim(item?.thumb_url) || fallbackMoviePoster,
                headers: {Authorization: 'someAuthToken'},
                priority: FastImage.priority.normal,
              }}
              resizeMode={FastImage.resizeMode.cover}
              style={styles.Image}
            />
            <Image
              source={
                data.pagination.currentPage === 48
                  ? require('../../assets/images/hboMaxlogo.png')
                  : data.pagination.currentPage === 38
                  ? require('../../assets/images/axn.png')
                  : data.pagination.currentPage === 40
                  ? require('../../assets/images/foxmovie.png')
                  : data.pagination.currentPage === 47
                  ? require('../../assets/images/kbs.png')
                  : require('../../assets/images/logoHBO.png')
              }
              style={
                data.pagination.currentPage === 48
                  ? styles.MAX
                  : data.pagination.currentPage === 38
                  ? styles.AXN
                  : data.pagination.currentPage === 40
                  ? styles.FOX
                  : data.pagination.currentPage === 47
                  ? styles.KBS
                  : styles.GO
              }
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
                renderItem={renderItems}
                disableVirtualization={true}
                data={data.items.slice(0, 12)}
                keyExtractor={item => item._id}
                extraData={item => item._id.toString()}
                getItemCount={data => data.length}
                showsHorizontalScrollIndicator={false}
              />
            )}
          </View>

          {/* <View className="px-[8px]">
              {data.items && data.items.length > 0 && (
                <FlashList
                  data={data.items.slice(0, 12)}
                  horizontal={true}
                  estimatedItemSize={10}
                  // keyExtractor={item => item._id}
                  showsHorizontalScrollIndicator={false}
                  renderItem={({item}: any) => <Movies item={item} />}
                />
              )}
            </View> */}
        </View>
      </>
    )
  );
};
export default React.memo(HBOBodyComponent);
