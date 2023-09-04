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
} from 'react-native';
import {styles, theme} from '../theme';
const {width} = Dimensions.get('window');
import {RootStackParams} from '@navigators';
import React, {useContext, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {AuthContext} from '../navigators/AuthProvider';
import {SafeAreaView} from 'react-native-safe-area-context';
import {UserCircleIcon} from 'react-native-heroicons/solid';

import {
  KeyIcon,
  PhoneIcon,
  EnvelopeIcon,
  BoltSlashIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  CalendarDaysIcon,
} from 'react-native-heroicons/outline';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const UserScreen = ({route}) => {
  const title = route?.params?.title;
  const {user}: any = useContext(AuthContext);
  const userName = user?.displayName ? user?.displayName : 'Anonymous';
  const userEmail = user?.email || 'Anonymous';
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
          <UserCircleIcon size="35" color={theme.background} />
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
            {user?.displayName ? (
              <View>
                <Image
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: 30,
                  }}
                  source={{uri: user.photoURL}}
                />
              </View>
            ) : (
              <UserCircleIcon
                size="32"
                color={isFavorite ? theme.background : 'white'}
              />
            )}
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
