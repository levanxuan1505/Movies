/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  TouchableWithoutFeedback,
  ImageBackground,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, {memo} from 'react';
import {styles} from '../theme';
import {FlashList} from '@shopify/flash-list';
const {width, height} = Dimensions.get('window');
import {useNavigation} from '@react-navigation/native';
import {fallbackMoviePoster, image500} from '../Api/MoviesDb';

const HBOList = ({title, logo, hideSeeAll, data}) => {
  const navigation = useNavigation();
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
          renderItem={({item, index}: any) => (
            <TouchableWithoutFeedback
              key={index}
              onPress={() => navigation.push('Movies', item)}>
              <View className="space-y-1 mr-4">
                <ImageBackground
                  source={{
                    uri: image500(item.poster_path) || fallbackMoviePoster,
                  }}
                  style={{
                    position: 'relative',
                    width: width * 0.33,
                    height: height * 0.22,
                  }}>
                  <Image
                    source={
                      logo === 'GO'
                        ? require('../assets/images/logoHBO.png')
                        : require('../assets/images/hboMaxlogo.png')
                    }
                    style={
                      logo === 'GO'
                        ? {
                            position: 'absolute',
                            left: 0,
                            top: -9,
                            width: width * 0.13,
                            height: height * 0.04,
                          }
                        : {
                            position: 'absolute',
                            top: 7,
                            left: 7,
                            width: width * 0.12,
                            height: height * 0.009,
                          }
                    }
                  />
                </ImageBackground>
                <Text className="text-neutral-300 ml-1">
                  {item.title.length > 14
                    ? item.title.slice(0, 14) + '...'
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
export default memo(HBOList);
