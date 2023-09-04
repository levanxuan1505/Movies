/* eslint-disable react/self-closing-comp */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import {styles} from '../../theme';
import {RootStackParams} from '@navigators';
const {width, height} = Dimensions.get('window');
import {fallbackMoviePoster} from '../../Api/MoviesDb';
import {useNavigation} from '@react-navigation/native';
import {View, Text, Image, Dimensions} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {fetchSimilarMovies, image185} from '../../Api/MoviesDb';
import React, {useEffect, useState} from 'react';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import FastImage from 'react-native-fast-image';
import {FlashList} from '@shopify/flash-list';

interface Props {
  idApi: number;
  logo: string;
  title: string;
  hideSeeAll: boolean;
}
const HBODiscover: React.FC<Props> = ({title, hideSeeAll, idApi, logo}) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const [data, setListMovies] = useState([]);
  const getListMovies = async idApi => {
    const data = await fetchSimilarMovies(idApi);
    if (data && data.results) {
      setListMovies(data.results);
    }
  };
  useEffect(() => {
    getListMovies(idApi);
  }, [idApi]);

  const Movies = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.push('MoviesOphim', item.slug)}>
        <View className="space-y-1 mr-1">
          <FastImage
            defaultSource={require('../../assets/images/Progress.png')}
            source={{
              uri: image185(item.poster_path) || fallbackMoviePoster,
              headers: {Authorization: 'someAuthToken'},
              priority: FastImage.priority.low,
              cache: FastImage.cacheControl.immutable,
            }}
            resizeMode={FastImage.resizeMode.cover}
            style={{
              width: width * 0.65,
              height: height * 0.16,
              position: 'relative',
            }}>
            <Image
              source={
                logo === 'GO'
                  ? require('../../assets/images/logoHBO.png')
                  : logo === 'MAX'
                  ? require('../../assets/images/hboMaxlogo.png')
                  : logo === 'AXN'
                  ? require('../../assets/images/axn.png')
                  : logo === 'FoxMovies'
                  ? require('../../assets/images/foxmovie.png')
                  : logo === 'KBS'
                  ? require('../../assets/images/kbs.png')
                  : require('../../assets/images/hits.png')
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
                  : logo === 'MAX'
                  ? {
                      position: 'absolute',
                      top: 7,
                      left: 7,
                      width: width * 0.12,
                      height: height * 0.009,
                    }
                  : logo === 'AXN'
                  ? {
                      position: 'absolute',
                      top: 7,
                      left: 7,
                      width: width * 0.11,
                      height: height * 0.008,
                    }
                  : logo === 'FoxMovies'
                  ? {
                      position: 'absolute',
                      top: 5,
                      left: 0,
                      width: width * 0.17,
                      height: height * 0.01,
                    }
                  : logo === 'KBS'
                  ? {
                      position: 'absolute',
                      top: 5,
                      left: 3,
                      width: width * 0.16,
                      height: height * 0.01,
                    }
                  : {
                      position: 'absolute',
                      top: 5,
                      left: 3,
                      width: width * 0.17,
                      height: height * 0.005,
                    }
              }
            />
          </FastImage>
          <Text
            style={{width: width * 0.6}}
            numberOfLines={1}
            className="text-neutral-300 ml-1">
            {item.title}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View className="mb-3 space-y-1 w-full">
      <View className="mx-2 flex-row justify-between items-center">
        <Text
          style={{fontFamily: 'Shrikhand-Regular', fontSize: 15}}
          className="text-white ">
          {title}
        </Text>
        {!hideSeeAll && (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('SeeAll', {title: title, data: data})
            }>
            <Text
              style={[
                styles.text,
                {
                  fontFamily: 'Shrikhand-Regular',
                  fontSize: 15,
                },
              ]}
              className="text-lg">
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
          paddingHorizontal: 8,
        }}>
        {data && data.length > 0 && (
          <FlashList
            data={data}
            horizontal={true}
            estimatedItemSize={15}
            keyExtractor={item => item.id}
            estimatedListSize={{
              height: 120,
              width: Dimensions.get('screen').width,
            }}
            showsHorizontalScrollIndicator={false}
            renderItem={({item}: any) => <Movies item={item} />}
          />
        )}
      </View>
    </View>
  );
};
export default HBODiscover;
