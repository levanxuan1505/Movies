/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  VirtualizedList,
  TouchableWithoutFeedback,
} from 'react-native';
import {styles} from '../theme';
import {RootStackParams} from '@navigators';
import React, {memo, useCallback} from 'react';
const {width, height} = Dimensions.get('window');
import {useNavigation} from '@react-navigation/native';
import {image500, fallbackMoviePoster} from '../Api/MoviesDb';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
const Tv = ({name, title, hideSeeAll, data}) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const getItem = (data, index) => {
    return data[index];
  };
  const Tv = useCallback(
    ({item}) => {
      return (
        <TouchableWithoutFeedback
          onPress={() => navigation.push('Movies', item)}>
          <View className="space-y-1 mr-4 justify-center">
            <Image
              source={{
                uri: image500(item[name]) || fallbackMoviePoster,
              }}
              className="rounded-3xl"
              style={{
                width: item.name ? width * 0.7 : width * 0.46,
                height: item.name ? height * 0.17 : height * 0.14,
              }}
            />
            <Text className="text-neutral-300 ml-1">
              {item.provider_name
                ? item.provider_name.length > 18
                  ? item.provider_name.slice(0, 18) + '...'
                  : item.provider_name
                : item.name.length > 30
                ? item.name.slice(0, 30) + '...'
                : item.name}
            </Text>
          </View>
        </TouchableWithoutFeedback>
      );
    },
    [navigation, name],
  );
  return (
    <View className="mb-8 space-y-4 w-full">
      <View className="mx-4 flex-row justify-between items-center">
        <Text className="text-white text-lg">{title}</Text>
        {!hideSeeAll && (
          <TouchableOpacity>
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
          data={data}
          horizontal={true}
          initialNumToRender={3}
          keyExtractor={item => item.id}
          getItemCount={data => data.length}
          showsHorizontalScrollIndicator={false}
          getItem={getItem}
          renderItem={({item}: any) => <Tv item={item} />}
        />
      </View>
    </View>
  );
};
export default memo(Tv);
