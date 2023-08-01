/* eslint-disable react/self-closing-comp */
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

interface Props {
  title: string;
  hideSeeAll: boolean;
  data: Array<String>; //
}
const WatchingList: React.FC<Props> = ({title, hideSeeAll, data}) => {
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
          horizontal
          estimatedItemSize={20}
          disableAutoLayout={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}: any) => (
            <TouchableWithoutFeedback
              key={index}
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
          )}
        />
      </View>
    </View>
  );
};
export default memo(WatchingList);
