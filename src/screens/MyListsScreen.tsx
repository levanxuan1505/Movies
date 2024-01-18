/* eslint-disable react-native/no-inline-styles */
/* eslint-disable curly */
import {
  View,
  Text,
  Image,
  ScrollView,
  Dimensions,
  RefreshControl,
  TouchableOpacity,
} from 'react-native';
import {styles, theme} from '../theme';
const {width, height} = Dimensions.get('window');
import {AuthContext} from '../navigators/AuthProvider';
import {useNavigation} from '@react-navigation/native';
import {HeartIcon} from 'react-native-heroicons/solid';
import {SafeAreaView} from 'react-native-safe-area-context';
import React, {useEffect, useContext, useState} from 'react';
import {ChevronLeftIcon} from 'react-native-heroicons/outline';
import firestore from '@react-native-firebase/firestore';
import FastImage from 'react-native-fast-image';
const MyListsScreen = ({route}) => {
  const title = route.params.title;
  const navigation = useNavigation();
  const [isFavorite, setFavorite] = useState(false);
  const [refreshing, setRefreshing] = React.useState(false);
  const {user}: any = useContext(AuthContext);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 500);
  }, []);

  const [posts, setPosts] = useState([]);
  useEffect(() => {
    firestore()
      .collection('users')
      .doc(user?.email)
      .collection('listMovies')
      .onSnapshot(snap => {
        if (!snap.empty) {
          console.log('OK');
          const items = [];
          snap.forEach(item => items.push({id: item.id, ...item.data()}));
          setPosts(items);
        } else {
          setPosts([]);
          console.log('Data not found');
        }
      });
  }, []);
  return (
    <View style={{position: 'relative'}} className="flex-1 bg-neutral-800 ">
      <SafeAreaView
        style={{
          backgroundColor: 'rgba(38, 38, 38, 0.7)',
          position: 'absolute',
          zIndex: 1,
          paddingBottom: -25,
          paddingTop: -8,
        }}
        className="{ios} ? -mb-2 : -mb-3">
        <View
          style={{width: width, paddingHorizontal: 20}}
          className="flex-row justify-between items-center">
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="rounded-xl p-1"
            style={styles.background}>
            <ChevronLeftIcon size="28" strokeWidth={2.5} color="white" />
          </TouchableOpacity>
          <Text className="text-white text-3xl font-bold">
            <Text style={styles.text}>---{title}---</Text>
          </Text>
          <TouchableOpacity onPress={() => setFavorite(!isFavorite)}>
            <HeartIcon size="35" color={theme.background} />
          </TouchableOpacity>
        </View>
      </SafeAreaView>

      {user && posts ? (
        <ScrollView
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingTop: 90,
            paddingBottom: 20,
            paddingHorizontal: 15,
          }}
          className="space-y-2">
          <Text className="text-white font-semibold ml-1">
            Results ({posts.length})
          </Text>
          <View className="flex-row justify-between flex-wrap">
            {posts.map((item, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => navigation.navigate('MoviesOphim', item.slug)}>
                  <View className="space-y-2 mb-4">
                    <FastImage
                      defaultSource={require('../assets/images/Progress.png')}
                      source={{
                        uri: item?.poster_url || item?.thumb_url,
                        headers: {Authorization: 'someAuthToken'},
                        priority: FastImage.priority.normal,
                      }}
                      resizeMode={FastImage.resizeMode.cover}
                      className="rounded-2xl"
                      style={{width: width * 0.44, height: height * 0.3}}
                    />
                    <Text
                      numberOfLines={1}
                      style={{width: width * 0.4}}
                      className="text-gray-300 ml-1">
                      {item?.title || item?.name}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        </ScrollView>
      ) : (
        <View className="flex-row justify-center">
          <Image
            source={require('../assets/images/movieTime.png')}
            className="h-96 w-96"
          />
        </View>
      )}
    </View>
  );
};
export default MyListsScreen;
