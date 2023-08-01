/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import {View, Text, Image, Dimensions} from 'react-native';
import React, {memo} from 'react';
import {styles} from '../theme';
import {RootStackParams} from '@navigators';
import {FlashList} from '@shopify/flash-list';
const {width, height} = Dimensions.get('window');
import {useNavigation} from '@react-navigation/native';
import {image500, fallbackMoviePoster} from '../Api/MoviesDb';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {TouchableOpacity} from 'react-native-gesture-handler';

interface Props {
  title: string;
  hideSeeAll: boolean;
  data: Array[];
}
const MovieList: React.FC<Props> = ({title, hideSeeAll, data}) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const Movies = ({item, index}) => {
    return (
      <TouchableOpacity
        key={index}
        onPress={() => navigation.push('Movies', item)}>
        <View className="space-y-1 mr-4">
          <Image
            // source={require('../assets/images/moviePoster1.png')}
            source={{
              uri: image500(item.poster_path) || fallbackMoviePoster,
            }}
            className="rounded-3xl"
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
              navigation.navigate('SeeAll', {title: title, data: data})
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
        <FlashList
          data={data}
          horizontal={true}
          estimatedItemSize={4}
          disableAutoLayout={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) => {
            return <Movies item={item} index={index} />;
          }}
        />
      </View>
    </View>
  );
};
export default memo(MovieList);
