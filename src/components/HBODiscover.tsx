/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  Image,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import React, {memo} from 'react';
import {styles} from '../theme';
import {RootStackParams} from '@navigators';
import {FlashList} from '@shopify/flash-list';
const {width, height} = Dimensions.get('window');
import {useNavigation} from '@react-navigation/native';
import {image500, fallbackMoviePoster} from '../Api/MoviesDb';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const HBODiscover = ({title, hideSeeAll, data}) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
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
          estimatedItemSize={20}
          disableAutoLayout={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}: any) => (
            <TouchableWithoutFeedback
              key={index}
              onPress={() => navigation.push('Movies', item)}>
              <View className="space-y-1 mr-4">
                <ImageBackground
                  source={{
                    uri: image500(item.backdrop_path) || fallbackMoviePoster,
                  }}
                  style={{
                    position: 'relative',
                    width: width * 0.72,
                    height: height * 0.18,
                  }}>
                  <Image
                    source={require('../assets/images/logoHBO.png')}
                    style={{
                      position: 'absolute',
                      left: 0,
                      top: -7,
                      width: width * 0.135,
                      height: height * 0.04,
                    }}
                  />
                </ImageBackground>
                <Text className="text-neutral-300 ml-1">
                  {item.title.length > 40
                    ? item.title.slice(0, 40) + '...'
                    : item.title}
                </Text>
              </View>
            </TouchableWithoutFeedback>
          )}
        />
      </View>
    </View>
  );
};
export default memo(HBODiscover);
