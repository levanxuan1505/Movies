/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  Image,
  ScrollView,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {styles} from '../theme';
const {width, height} = Dimensions.get('window');
interface Props {
  title: string;
  logo: string;
  symbol: string;
  hideSeeAll: boolean;
  data: Array;
}
const SportList: React.FC<Props> = ({
  title,
  logo,
  symbol,
  hideSeeAll,
  data,
}) => {
  return (
    <View className="mb-5 space-y-4">
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

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingHorizontal: 15, paddingVertical: 10}}>
        {data.map((item, index) => {
          return (
            <TouchableOpacity key={index}>
              <View className="space-y-1 mr-4">
                <ImageBackground
                  // source={require('../assets/images/moviePoster1.png')}
                  source={item.image}
                  style={{
                    width: logo === 'bigSize' ? width * 0.5 : width * 0.31,
                    height: logo === 'bigSize' ? height * 0.133 : height * 0.2,
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
          );
        })}
      </ScrollView>
    </View>
  );
};
export default SportList;
