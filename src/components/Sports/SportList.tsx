/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {RootStackParams} from '@navigators';
const {width, height} = Dimensions.get('window');
import {useNavigation} from '@react-navigation/native';
import {ProgressiveImage} from '../ProgressiveComponent';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import {FlashList} from '@shopify/flash-list';
interface Props {
  data: any;
  logo: string;
  title: string;
  symbol: string;
  hideSeeAll: boolean;
}
const SportList: React.FC<Props> = ({
  logo,
  data,
  title,
  symbol,
  hideSeeAll,
}) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  return (
    <View className="mb-3 space-y-1 w-full">
      <View className="mx-2 flex-row justify-between items-center">
        <Text className="text-white font-Primary text-[15px] ">{title}</Text>
        {!hideSeeAll && (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('SeeAllCoreAPIS', {data, title, logo})
            }>
            <Text className="text-lg font-Primary text-[15px] color-greenColor">
              See All
            </Text>
          </TouchableOpacity>
        )}
      </View>
      <View>
        {data && data.length > 0 && (
          <FlashList
            data={data}
            horizontal={true}
            estimatedItemSize={15}
            keyExtractor={item => item.id}
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => (
              <TouchableOpacity>
                <View className="space-y-1 mr-1">
                  <ProgressiveImage
                    thumbnailSource={require('../../assets/images/Progress.png')}
                    source={item.image}
                    style={{
                      width: logo === 'bigSize' ? width * 0.42 : width * 0.26,
                      height:
                        logo === 'bigSize' ? height * 0.111 : height * 0.17,
                    }}
                    resizeMode="cover"
                  />
                  <Image
                    source={
                      symbol === 'skySport'
                        ? require('../../assets/images/skySport.png')
                        : symbol === 'espn'
                        ? require('../../assets/images/espn.png')
                        : require('../../assets/images/beinSport.png')
                    }
                    style={
                      symbol === 'skySport'
                        ? styles.skySport
                        : symbol === 'espn'
                        ? styles.espn
                        : symbol === 'beinSport'
                        ? styles.beinSport
                        : styles.other
                    }
                  />
                </View>
              </TouchableOpacity>
            )}
          />
        )}
      </View>
    </View>
  );
};
export default SportList;
const styles = StyleSheet.create({
  skySport: {
    position: 'absolute',
    left: 4,
    top: 0,
    width: width * 0.1,
    height: height * 0.009,
  },
  espn: {
    position: 'absolute',
    top: 4,
    left: 4,
    width: width * 0.1,
    height: height * 0.009,
  },
  beinSport: {
    position: 'absolute',
    top: 0,
    left: 4,
    width: width * 0.1,
    height: height * 0.008,
  },
  other: {
    position: 'absolute',
    width: 0,
    height: 0,
  },
});
