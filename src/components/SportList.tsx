/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  ScrollView,
  TouchableWithoutFeedback,
  ImageBackground,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {styles} from '../theme';
import {fallbackMoviePoster, image500} from '../Api/MoviesDb';
const {width, height} = Dimensions.get('window');

export default function SportList({title, logo, symbol, hideSeeAll, data}) {
  const navigation = useNavigation();
  return (
    <View className="mb-5 space-y-4">
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

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingHorizontal: 15, paddingVertical: 10}}>
        {data.map((item, index) => {
          return (
            <TouchableWithoutFeedback
              key={index}
              onPress={() => navigation.push('Movies', item)}>
              {logo === 'sportsTVshow' ? (
                <View className="space-y-1 mr-4">
                  <ImageBackground
                    source={
                      item === 1
                        ? require('../assets/sportsTVshow/1.jpg')
                        : item === 2
                        ? require('../assets/sportsTVshow/2.jpg')
                        : item === 3
                        ? require('../assets/sportsTVshow/3.jpg')
                        : item === 4
                        ? require('../assets/sportsTVshow/4.jpg')
                        : item === 5
                        ? require('../assets/sportsTVshow/5.jpg')
                        : item === 6
                        ? require('../assets/sportsTVshow/6.jpg')
                        : item === 7
                        ? require('../assets/sportsTVshow/7.jpg')
                        : item === 8
                        ? require('../assets/sportsTVshow/8.jpg')
                        : item === 9
                        ? require('../assets/sportsTVshow/9.jpg')
                        : item === 10
                        ? require('../assets/sportsTVshow/10.jpg')
                        : item === 11
                        ? require('../assets/sportsTVshow/11.jpg')
                        : item === 12
                        ? require('../assets/sportsTVshow/12.jpg')
                        : item === 13
                        ? require('../assets/sportsTVshow/13.jpg')
                        : item === 14
                        ? require('../assets/sportsTVshow/14.jpg')
                        : item === 15
                        ? require('../assets/sportsTVshow/15.jpg')
                        : item === 16
                        ? require('../assets/sportsTVshow/16.jpg')
                        : item === 17
                        ? require('../assets/sportsTVshow/17.jpg')
                        : require('../assets/sportsTVshow/18.jpg')
                    }
                    style={{
                      position: 'relative',
                      width: width * 0.5,
                      height: height * 0.13,
                    }}>
                    <Image
                      source={
                        symbol === 'skySport'
                          ? require('../assets/images/skySport.png')
                          : require('../assets/images/espn.png')
                      }
                      style={
                        symbol === 'skySport'
                          ? {
                              position: 'absolute',
                              left: 2,
                              top: 9,
                              width: width * 0.14,
                              height: height * 0.04,
                            }
                          : logo === 'espn'
                          ? {
                              position: 'absolute',
                              top: 4,
                              left: 4,
                              width: width * 0.13,
                              height: height * 0.01,
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
              ) : logo === 'internationalFriendly' ? (
                <View className="space-y-1 mr-4">
                  <ImageBackground
                    source={
                      item === 1
                        ? require('../assets/internationalFriendly/1.jpg')
                        : item === 2
                        ? require('../assets/internationalFriendly/2.jpg')
                        : item === 3
                        ? require('../assets/internationalFriendly/3.jpg')
                        : item === 4
                        ? require('../assets/internationalFriendly/4.jpg')
                        : item === 5
                        ? require('../assets/internationalFriendly/5.jpg')
                        : item === 6
                        ? require('../assets/internationalFriendly/6.jpg')
                        : item === 7
                        ? require('../assets/internationalFriendly/7.jpg')
                        : item === 8
                        ? require('../assets/internationalFriendly/8.jpg')
                        : item === 9
                        ? require('../assets/internationalFriendly/9.jpg')
                        : item === 10
                        ? require('../assets/internationalFriendly/10.jpg')
                        : item === 11
                        ? require('../assets/internationalFriendly/11.jpg')
                        : item === 12
                        ? require('../assets/internationalFriendly/12.jpg')
                        : item === 13
                        ? require('../assets/internationalFriendly/13.jpg')
                        : item === 14
                        ? require('../assets/internationalFriendly/14.jpg')
                        : item === 15
                        ? require('../assets/internationalFriendly/15.jpg')
                        : item === 16
                        ? require('../assets/internationalFriendly/16.jpg')
                        : item === 17
                        ? require('../assets/internationalFriendly/17.jpg')
                        : require('../assets/internationalFriendly/18.jpg')
                    }
                    style={{
                      position: 'relative',
                      width: width * 0.27,
                      height: height * 0.18,
                    }}>
                    <Image
                      source={
                        logo === 'skySport'
                          ? require('../assets/images/skySport.png')
                          : require('../assets/images/espn.png')
                      }
                      style={
                        logo === 'GO'
                          ? {
                              position: 'absolute',
                              left: -2,
                              top: -9,
                              width: width * 0.14,
                              height: height * 0.04,
                            }
                          : logo === 'espn'
                          ? {
                              position: 'absolute',
                              top: 4,
                              left: 4,
                              width: width * 0.13,
                              height: height * 0.01,
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
              ) : logo === 'Roland' ? (
                <View className="space-y-1 mr-4">
                  <ImageBackground
                    source={
                      item === 1
                        ? require('../assets/rolandGarros/1.jpg')
                        : item === 2
                        ? require('../assets/rolandGarros/2.jpg')
                        : item === 3
                        ? require('../assets/rolandGarros/3.jpg')
                        : item === 4
                        ? require('../assets/rolandGarros/4.jpg')
                        : item === 5
                        ? require('../assets/rolandGarros/5.jpg')
                        : item === 6
                        ? require('../assets/rolandGarros/6.jpg')
                        : item === 7
                        ? require('../assets/rolandGarros/7.jpg')
                        : item === 8
                        ? require('../assets/rolandGarros/8.jpg')
                        : item === 9
                        ? require('../assets/rolandGarros/9.jpg')
                        : item === 10
                        ? require('../assets/rolandGarros/10.jpg')
                        : item === 11
                        ? require('../assets/rolandGarros/11.jpg')
                        : item === 12
                        ? require('../assets/rolandGarros/12.jpg')
                        : item === 13
                        ? require('../assets/rolandGarros/13.jpg')
                        : item === 14
                        ? require('../assets/rolandGarros/14.jpg')
                        : item === 15
                        ? require('../assets/rolandGarros/15.jpg')
                        : item === 16
                        ? require('../assets/rolandGarros/16.jpg')
                        : item === 17
                        ? require('../assets/rolandGarros/17.jpg')
                        : require('../assets/rolandGarros/18.jpg')
                    }
                    style={{
                      position: 'relative',
                      width: width * 0.27,
                      height: height * 0.18,
                    }}>
                    <Image
                      source={
                        symbol === 'skySport'
                          ? require('../assets/images/skySport.png')
                          : require('../assets/images/espn.png')
                      }
                      style={
                        symbol === 'skySport'
                          ? {
                              position: 'absolute',
                              left: 4,
                              top: 4,
                              width: width * 0.14,
                              height: height * 0.011,
                            }
                          : symbol === 'espn'
                          ? {
                              position: 'absolute',
                              top: 4,
                              left: 4,
                              width: width * 0.12,
                              height: height * 0.01,
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
              ) : logo === 'vba' ? (
                <View className="space-y-1 mr-4">
                  <ImageBackground
                    source={
                      item === 1
                        ? require('../assets/vba/1.jpg')
                        : item === 2
                        ? require('../assets/vba/2.jpg')
                        : item === 3
                        ? require('../assets/vba/3.jpg')
                        : item === 4
                        ? require('../assets/vba/4.jpg')
                        : item === 5
                        ? require('../assets/vba/5.jpg')
                        : item === 6
                        ? require('../assets/vba/6.jpg')
                        : item === 7
                        ? require('../assets/vba/7.jpg')
                        : item === 8
                        ? require('../assets/vba/8.jpg')
                        : item === 9
                        ? require('../assets/vba/9.jpg')
                        : item === 10
                        ? require('../assets/vba/10.jpg')
                        : item === 11
                        ? require('../assets/vba/11.jpg')
                        : item === 12
                        ? require('../assets/vba/12.jpg')
                        : item === 13
                        ? require('../assets/vba/13.jpg')
                        : item === 14
                        ? require('../assets/vba/14.jpg')
                        : item === 15
                        ? require('../assets/vba/15.jpg')
                        : item === 16
                        ? require('../assets/vba/16.jpg')
                        : item === 17
                        ? require('../assets/vba/17.jpg')
                        : require('../assets/vba/18.jpg')
                    }
                    style={{
                      position: 'relative',
                      width: width * 0.27,
                      height: height * 0.18,
                    }}>
                    <Image
                      source={
                        symbol === 'skySport'
                          ? require('../assets/images/skySport.png')
                          : require('../assets/images/espn.jpg')
                      }
                      style={
                        symbol === 'skySport'
                          ? {
                              position: 'absolute',
                              left: 4,
                              top: 3,
                              width: width * 0.12,
                              height: height * 0.012,
                            }
                          : symbol === 'espn'
                          ? {
                              position: 'absolute',
                              top: 4,
                              left: 3,
                              width: width * 0.12,
                              height: height * 0.012,
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
              ) : logo === 'upComingSport' ? (
                <View className="space-y-1 mr-4">
                  <ImageBackground
                    source={
                      item === 1
                        ? require('../assets/upcomingSports/1.jpg')
                        : item === 2
                        ? require('../assets/upcomingSports/2.jpg')
                        : item === 3
                        ? require('../assets/upcomingSports/3.jpg')
                        : item === 4
                        ? require('../assets/upcomingSports/4.jpg')
                        : item === 5
                        ? require('../assets/upcomingSports/5.jpg')
                        : item === 6
                        ? require('../assets/upcomingSports/6.jpg')
                        : item === 7
                        ? require('../assets/upcomingSports/7.jpg')
                        : item === 8
                        ? require('../assets/upcomingSports/8.jpg')
                        : item === 9
                        ? require('../assets/upcomingSports/9.jpg')
                        : item === 10
                        ? require('../assets/upcomingSports/10.jpg')
                        : item === 11
                        ? require('../assets/upcomingSports/11.jpg')
                        : item === 12
                        ? require('../assets/upcomingSports/12.jpg')
                        : item === 13
                        ? require('../assets/upcomingSports/13.jpg')
                        : item === 14
                        ? require('../assets/upcomingSports/14.jpg')
                        : item === 15
                        ? require('../assets/upcomingSports/15.jpg')
                        : item === 16
                        ? require('../assets/upcomingSports/16.jpg')
                        : item === 17
                        ? require('../assets/upcomingSports/17.jpg')
                        : require('../assets/upcomingSports/18.jpg')
                    }
                    style={{
                      position: 'relative',
                      width: width * 0.45,
                      height: height * 0.12,
                    }}>
                    <Image
                      source={
                        symbol === 'skySport'
                          ? require('../assets/images/skySport.png')
                          : require('../assets/images/espn.jpg')
                      }
                      style={
                        symbol === 'skySport'
                          ? {
                              position: 'absolute',
                              left: 4,
                              top: 3,
                              width: width * 0.12,
                              height: height * 0.012,
                            }
                          : symbol === 'espn'
                          ? {
                              position: 'absolute',
                              top: 4,
                              left: 3,
                              width: width * 0.12,
                              height: height * 0.012,
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
              ) : logo === 'serieA' ? (
                <View className="space-y-1 mr-4">
                  <ImageBackground
                    source={
                      item === 1
                        ? require('../assets/serieA/1.jpg')
                        : item === 2
                        ? require('../assets/serieA/2.jpg')
                        : item === 3
                        ? require('../assets/serieA/3.jpg')
                        : item === 4
                        ? require('../assets/serieA/4.jpg')
                        : item === 5
                        ? require('../assets/serieA/5.jpg')
                        : item === 6
                        ? require('../assets/serieA/6.jpg')
                        : item === 7
                        ? require('../assets/serieA/7.jpg')
                        : item === 8
                        ? require('../assets/serieA/8.jpg')
                        : item === 9
                        ? require('../assets/serieA/9.jpg')
                        : item === 10
                        ? require('../assets/serieA/10.jpg')
                        : item === 11
                        ? require('../assets/serieA/11.jpg')
                        : item === 12
                        ? require('../assets/serieA/12.jpg')
                        : item === 13
                        ? require('../assets/serieA/13.jpg')
                        : item === 14
                        ? require('../assets/serieA/14.jpg')
                        : item === 15
                        ? require('../assets/serieA/15.jpg')
                        : item === 16
                        ? require('../assets/serieA/16.jpg')
                        : item === 17
                        ? require('../assets/serieA/17.jpg')
                        : require('../assets/serieA/18.jpg')
                    }
                    style={{
                      position: 'relative',
                      width: width * 0.45,
                      height: height * 0.12,
                    }}>
                    <Image
                      source={
                        symbol === 'skySport'
                          ? require('../assets/images/skySport.png')
                          : require('../assets/images/espn.jpg')
                      }
                      style={
                        symbol === 'skySport'
                          ? {
                              position: 'absolute',
                              left: 4,
                              top: 3,
                              width: width * 0.12,
                              height: height * 0.012,
                            }
                          : symbol === 'espn'
                          ? {
                              position: 'absolute',
                              top: 4,
                              left: 3,
                              width: width * 0.12,
                              height: height * 0.012,
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
              ) : logo === 'tvChannels' ? (
                <View className="space-y-1 mr-4">
                  <ImageBackground
                    source={
                      item === 1
                        ? require('../assets/tvChannels/1.jpg')
                        : item === 2
                        ? require('../assets/tvChannels/2.jpg')
                        : item === 3
                        ? require('../assets/tvChannels/3.jpg')
                        : item === 4
                        ? require('../assets/tvChannels/4.jpg')
                        : item === 5
                        ? require('../assets/tvChannels/5.jpg')
                        : item === 6
                        ? require('../assets/tvChannels/6.jpg')
                        : item === 7
                        ? require('../assets/tvChannels/7.jpg')
                        : item === 8
                        ? require('../assets/tvChannels/8.jpg')
                        : item === 9
                        ? require('../assets/tvChannels/9.jpg')
                        : item === 10
                        ? require('../assets/tvChannels/10.jpg')
                        : item === 11
                        ? require('../assets/tvChannels/11.jpg')
                        : item === 12
                        ? require('../assets/tvChannels/12.jpg')
                        : item === 13
                        ? require('../assets/tvChannels/13.jpg')
                        : item === 14
                        ? require('../assets/tvChannels/14.jpg')
                        : item === 15
                        ? require('../assets/tvChannels/15.jpg')
                        : item === 16
                        ? require('../assets/tvChannels/16.jpg')
                        : item === 17
                        ? require('../assets/tvChannels/17.jpg')
                        : require('../assets/tvChannels/18.jpg')
                    }
                    style={{
                      position: 'relative',
                      width: width * 0.45,
                      height: height * 0.12,
                    }}>
                    <Image
                      source={
                        symbol === 'skySport'
                          ? require('../assets/images/skySport.png')
                          : require('../assets/images/espn.jpg')
                      }
                      style={
                        symbol === 'skySport'
                          ? {
                              position: 'absolute',
                              left: 4,
                              top: 3,
                              width: width * 0.12,
                              height: height * 0.012,
                            }
                          : symbol === 'espn'
                          ? {
                              position: 'absolute',
                              top: 4,
                              left: 3,
                              width: width * 0.12,
                              height: height * 0.012,
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
              ) : logo === 'bundesliga' ? (
                <View className="space-y-1 mr-4">
                  <ImageBackground
                    source={
                      item === 1
                        ? require('../assets/bundesliga/1.jpg')
                        : item === 2
                        ? require('../assets/bundesliga/2.jpg')
                        : item === 3
                        ? require('../assets/bundesliga/3.jpg')
                        : item === 4
                        ? require('../assets/bundesliga/4.jpg')
                        : item === 5
                        ? require('../assets/bundesliga/5.jpg')
                        : item === 6
                        ? require('../assets/bundesliga/6.jpg')
                        : item === 7
                        ? require('../assets/bundesliga/7.jpg')
                        : item === 8
                        ? require('../assets/bundesliga/8.jpg')
                        : item === 9
                        ? require('../assets/bundesliga/9.jpg')
                        : item === 10
                        ? require('../assets/bundesliga/10.jpg')
                        : item === 11
                        ? require('../assets/bundesliga/11.jpg')
                        : item === 12
                        ? require('../assets/bundesliga/12.jpg')
                        : item === 13
                        ? require('../assets/bundesliga/13.jpg')
                        : item === 14
                        ? require('../assets/bundesliga/14.jpg')
                        : item === 15
                        ? require('../assets/bundesliga/15.jpg')
                        : item === 16
                        ? require('../assets/bundesliga/16.jpg')
                        : item === 17
                        ? require('../assets/bundesliga/17.jpg')
                        : require('../assets/bundesliga/18.jpg')
                    }
                    style={{
                      position: 'relative',
                      width: width * 0.27,
                      height: height * 0.18,
                    }}>
                    <Image
                      source={
                        symbol === 'skySport'
                          ? require('../assets/images/skySport.png')
                          : require('../assets/images/espn.jpg')
                      }
                      style={
                        symbol === 'skySport'
                          ? {
                              position: 'absolute',
                              left: 4,
                              top: 3,
                              width: width * 0.12,
                              height: height * 0.012,
                            }
                          : symbol === 'espn'
                          ? {
                              position: 'absolute',
                              top: 4,
                              left: 3,
                              width: width * 0.12,
                              height: height * 0.012,
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
              ) : (
                <View className="space-y-1 mr-4">
                  <ImageBackground
                    source={
                      item === 1
                        ? require('../assets/vLeague/1.jpg')
                        : item === 2
                        ? require('../assets/vLeague/2.jpg')
                        : item === 3
                        ? require('../assets/vLeague/3.jpg')
                        : item === 4
                        ? require('../assets/vLeague/4.jpg')
                        : item === 5
                        ? require('../assets/vLeague/5.jpg')
                        : item === 6
                        ? require('../assets/vLeague/6.jpg')
                        : item === 7
                        ? require('../assets/vLeague/7.jpg')
                        : item === 8
                        ? require('../assets/vLeague/8.jpg')
                        : item === 9
                        ? require('../assets/vLeague/9.jpg')
                        : item === 10
                        ? require('../assets/vLeague/10.jpg')
                        : item === 11
                        ? require('../assets/vLeague/11.jpg')
                        : item === 12
                        ? require('../assets/vLeague/12.jpg')
                        : item === 13
                        ? require('../assets/vLeague/13.jpg')
                        : item === 14
                        ? require('../assets/vLeague/14.jpg')
                        : item === 15
                        ? require('../assets/vLeague/15.jpg')
                        : item === 16
                        ? require('../assets/vLeague/16.jpg')
                        : item === 17
                        ? require('../assets/vLeague/17.jpg')
                        : require('../assets/vLeague/18.jpg')
                    }
                    style={{
                      position: 'relative',
                      width: width * 0.45,
                      height: height * 0.12,
                    }}>
                    <Image
                      source={
                        symbol === 'skySport'
                          ? require('../assets/images/skySport.png')
                          : require('../assets/images/espn.jpg')
                      }
                      style={
                        symbol === 'skySport'
                          ? {
                              position: 'absolute',
                              left: 4,
                              top: 3,
                              width: width * 0.12,
                              height: height * 0.012,
                            }
                          : symbol === 'espn'
                          ? {
                              position: 'absolute',
                              top: 4,
                              left: 3,
                              width: width * 0.12,
                              height: height * 0.012,
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
              )}
            </TouchableWithoutFeedback>
          );
        })}
      </ScrollView>
    </View>
  );
}
