/* eslint-disable react-native/no-inline-styles */
/* eslint-disable curly */
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Dimensions,
  RefreshControl,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import {Loading} from '@components';
import {styles, theme} from '../theme';
import {RootStackParams} from '@navigators';
const {width, height} = Dimensions.get('window');
import React, {useEffect, useContext, useState} from 'react';
import {fetchTrendingMovies} from '../Api/MoviesDb';
import {UserCircleIcon} from 'react-native-heroicons/solid';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';
import {AuthContext} from '../navigators/AuthProvider';

import {
  ChevronLeftIcon,
  ChevronRightIcon,
  EnvelopeIcon,
  PhoneIcon,
  KeyIcon,
  CalendarDaysIcon,
  BoltSlashIcon,
} from 'react-native-heroicons/outline';
import {fallbackMoviePoster, image500} from '../Api/MoviesDb';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
const {user}: any = useContext(AuthContext);
const userName = user?.displayName ? user.displayName : 'Anonymous';
const userEmail = user?.email ? user.email : 'Anonymous';
const UserScreen = ({route}) => {
  const title = route.params.title;
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  const [loading, setLoading] = useState(false);
  const [isFavorite, setFavorite] = useState(false);
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 500);
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
            <UserCircleIcon
              size="35"
              color={isFavorite ? theme.background : 'white'}
            />
          </TouchableOpacity>
        </View>
      </SafeAreaView>

      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingHorizontal: 15, paddingTop: 100}}
        className="space-y-3">
        <View style={{paddingHorizontal: 5}} className="flex-column">
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingVertical: 5,
              position: 'relative',
            }}>
            <UserCircleIcon
              size="32"
              color={isFavorite ? theme.background : 'white'}
            />
            <Text style={styless.text}>Name</Text>
            <Text style={styless.text2}>{userName}</Text>
            <ChevronRightIcon
              size="32"
              color={isFavorite ? theme.background : 'white'}
            />
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingVertical: 5,
            }}>
            <EnvelopeIcon
              size="32"
              color={isFavorite ? theme.background : 'white'}
            />
            <Text style={styless.text}>Email</Text>
            <Text style={[styless.text2, {color: '#00AA13'}]}>{userEmail}</Text>
            <ChevronRightIcon
              size="32"
              color={isFavorite ? theme.background : 'white'}
            />
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingVertical: 5,
            }}>
            <PhoneIcon
              size="32"
              color={isFavorite ? theme.background : 'white'}
            />
            <Text style={styless.text}>Phone</Text>
            <Text style={styless.text2}>0975179546</Text>
            <ChevronRightIcon
              size="32"
              color={isFavorite ? theme.background : 'white'}
            />
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingVertical: 5,
            }}>
            <KeyIcon
              size="32"
              color={isFavorite ? theme.background : 'white'}
            />
            <Text style={styless.text}>Password</Text>
            <Text style={styless.text2}>**********</Text>
            <ChevronRightIcon
              size="32"
              color={isFavorite ? theme.background : 'white'}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingVertical: 5,
            }}>
            <CalendarDaysIcon
              size="32"
              color={isFavorite ? theme.background : 'white'}
            />
            <Text style={styless.text}>Date of birth</Text>
            <Text style={styless.text2}>15/05/2001</Text>
            <ChevronRightIcon
              size="32"
              color={isFavorite ? theme.background : 'white'}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingVertical: 5,
            }}>
            <BoltSlashIcon
              size="32"
              color={isFavorite ? theme.background : 'white'}
            />
            <Text style={styless.text}>Gender</Text>
            <Text style={styless.text2}>Male</Text>
            <ChevronRightIcon
              size="32"
              color={isFavorite ? theme.background : 'white'}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
const styless = StyleSheet.create({
  text: {
    color: '#ffff',
    fontSize: 18,
    fontWeight: '400',
    position: 'absolute',
    left: 40,
  },
  text2: {
    color: '#ffff',
    fontSize: 18,
    fontWeight: '400',
    position: 'absolute',
    right: 30,
  },
});
export default UserScreen;
