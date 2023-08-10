/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  Image,
  Dimensions,
  ImageBackground,
  VirtualizedList,
  TouchableOpacity,
} from 'react-native';
import {styles} from '../theme';
import React, {memo} from 'react';
import {RootStackParams} from '@navigators';
const {width, height} = Dimensions.get('window');
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

interface Props {
  title: string;
  logo: string;
  symbol: string;
  hideSeeAll: boolean;
  data: any;
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
  const getItem = (data, index) => {
    return data[index];
  };
  return (
    <View className="mb-5 space-y-4 w-full">
      <View className="mx-4 flex-row justify-between items-center">
        <Text className="text-white text-lg">{title}</Text>
        {!hideSeeAll && (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('SeeAllCoreAPIS', {data, title, logo})
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
          paddingVertical: 10,
          paddingHorizontal: 15,
          width: Dimensions.get('screen').width,
        }}>
        <VirtualizedList
          data={data}
          horizontal={true}
          getItem={getItem}
          initialNumToRender={3}
          keyExtractor={item => item.id}
          getItemCount={data => data.length}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => (
            <TouchableOpacity>
              <View className="space-y-1 mr-4">
                <ImageBackground
                  source={item.image}
                  style={{
                    width: logo === 'bigSize' ? width * 0.5 : width * 0.3,
                    height: logo === 'bigSize' ? height * 0.133 : height * 0.21,
                  }}>
                  <Image
                    source={
                      symbol === 'skySport'
                        ? require('../assets/images/skySport.png')
                        : symbol === 'espn'
                        ? require('../assets/images/espn.png')
                        : require('../assets/images/beinSport.png')
                    }
                    style={
                      symbol === 'skySport'
                        ? {
                            position: 'absolute',
                            left: 4,
                            top: 4,
                            width: width * 0.1,
                            height: height * 0.009,
                          }
                        : symbol === 'espn'
                        ? {
                            position: 'absolute',
                            top: 4,
                            left: 4,
                            width: width * 0.1,
                            height: height * 0.009,
                          }
                        : symbol === 'beinSport'
                        ? {
                            position: 'absolute',
                            top: 5,
                            left: 4,
                            width: width * 0.11,
                            height: height * 0.009,
                          }
                        : {
                            position: 'absolute',
                            width: 0,
                            height: 0,
                          }
                    }
                  />
                </ImageBackground>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};
export default memo(SportList);
