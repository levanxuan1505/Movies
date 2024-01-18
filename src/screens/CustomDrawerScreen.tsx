/* eslint-disable react-native/no-inline-styles */
import React, {useContext} from 'react';
import {RootStackParams} from '@navigators';
import Icons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {AuthContext} from '../navigators/AuthProvider';
import Iconsss from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {SafeAreaView} from 'react-native-safe-area-context';
import Iconssss from 'react-native-vector-icons/FontAwesome';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
const CustomDrawerScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  const {logout}: any = useContext(AuthContext);

  const {user}: any = useContext(AuthContext);

  return (
    <View style={{flex: 1, backgroundColor: 'rgb(38 38 38)'}}>
      <SafeAreaView>
        <View style={{alignItems: 'center'}}>
          <View
            style={[
              styles.viewContainer,
              {
                backgroundColor: 'transparent',
              },
            ]}
            className="h-[70px] w-full px-0 justify-center">
            <Text style={{fontFamily: 'Shrikhand-Regular'}}>
              <Text style={styles.textLarge}>--VIE_</Text>
              <Text style={[styles.textLarge, {color: '#F53920'}]}>ON--</Text>
            </Text>
          </View>

          {user?.displayName ? (
            <TouchableOpacity
              style={[
                styles.viewContainer,
                {
                  backgroundColor: 'transparent',
                },
              ]}
              className="h-[55px] px-[14px]">
              <View>
                <Image
                  className="w-[42px] h-[42px] rounded-[30px]"
                  source={{uri: user.photoURL}}
                />
              </View>
              <Text className="text-[26px] color-greenColor font-[700] font-Primary absolute pl-[65px] ">
                {user.displayName}
              </Text>
            </TouchableOpacity>
          ) : user?.email ? (
            <TouchableOpacity
              style={[
                styles.viewContainer,
                {
                  backgroundColor: 'transparent',
                },
              ]}
              className="h-[55px] px-[14px]">
              <View>
                <Image
                  className="w-[42px] h-[42px] rounded-[30px]"
                  source={require('../assets/images/avatar.png')}
                />
              </View>
              <Text
                numberOfLines={1}
                className="text-[20px] w-60 color-greenColor font-[100] font-Primary absolute pl-[65px] ">
                {user?.email}
              </Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => navigation.navigate('LogIn')}
              style={[
                styles.viewContainer,
                {
                  height: 55,
                  backgroundColor: 'transparent',
                  paddingHorizontal: 14,
                },
              ]}>
              <Iconssss name="user-circle" size={40} color="#00AA13" />
              <Text className="font-Primary font-[800] text-[32px] color-greenColor absolute pl-[65px]">
                Log in
              </Text>
            </TouchableOpacity>
          )}
          <TouchableOpacity
            onPress={() => navigation.navigate('User', {title: 'User_Info'})}
            style={styles.viewContainer}>
            <Iconsss name="user" size={30} color="#00AA13" />
            <Text style={styles.text}>User Information</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.viewContainer}
            onPress={() =>
              navigation.navigate('Watching', {title: 'Watching'})
            }>
            <Icon name="history" size={32} color="#00AA13" />
            <Text style={styles.text}>Watching</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.viewContainer}
            onPress={() => navigation.navigate('MyList', {title: 'MyLists'})}>
            <Iconsss name="hearto" size={28} color="#00AA13" />
            <Text style={styles.text}>My Lists</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.viewContainer}
            onPress={() =>
              navigation.navigate('Transaction', {title: 'Transaction'})
            }>
            <Iconssss name="credit-card" size={28} color="#00AA13" />
            <Text style={styles.text}>Transaction</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.viewContainer}
            onPress={() => navigation.navigate('LogInTV', {title: 'LogInTV'})}>
            <Iconssss name="tv" size={28} color="#00AA13" />
            <Text style={styles.text}>Log In SmartTV</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.viewContainer}
            onPress={() =>
              navigation.navigate('ManageDevices', {title: 'ManageDevices'})
            }>
            <Icon name="devices" size={28} color="#00AA13" />
            <Text style={styles.text}>Manage Devices</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.viewContainer}
            onPress={() =>
              navigation.navigate('Settings', {title: 'Settings'})
            }>
            <Icons name="settings-outline" size={28} color="#00AA13" />
            <Text style={styles.text}>Settings</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.viewContainer}
            onPress={() =>
              navigation.navigate('TermsOfUse', {title: 'TermsOfUse'})
            }>
            <Iconssss name="paper-plane-o" size={28} color="#00AA13" />
            <Text style={styles.text}>Terms of Use</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.viewContainer}
            onPress={() =>
              navigation.navigate('PrivacyPolicy', {title: 'Privacy_Policy'})
            }>
            <Icons name="newspaper-outline" size={28} color="#00AA13" />
            <Text style={styles.text}>Privacy Policy</Text>
          </TouchableOpacity>
          {user?.uid ? (
            <TouchableOpacity
              style={[styles.viewContainer, {height: 70}]}
              onPress={() => {
                logout(), navigation.navigate('LogIn');
              }}>
              <Icons name="log-out-outline" size={38} color="#F53920" />
              <Text
                style={[
                  styles.text,
                  {color: 'red', fontSize: 30, fontWeight: '700'},
                ]}>
                Log out
              </Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={[styles.viewContainer, {paddingLeft: 12, height: 70}]}
              onPress={() => navigation.navigate('LogIn')}>
              <Icons name="log-in-outline" size={38} color="#00AA13" />
              <Text
                style={[
                  styles.text,
                  {color: '#00AA13', fontSize: 30, fontWeight: '700'},
                ]}>
                Log in
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </SafeAreaView>
    </View>
  );
};
const styles = StyleSheet.create({
  viewContainer: {
    height: 50,
    width: '90%',
    borderRadius: 10,
    position: 'relative',
    marginVertical: 8.5,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 20,
    backgroundColor: '#121212',
    justifyContent: 'space-between',
  },
  textLarge: {
    fontSize: 38,
    color: '#00AA13',
    fontWeight: '900',
  },
  text: {
    fontSize: 19,
    color: '#ffff',
    paddingLeft: 65,
    position: 'absolute',
    fontFamily: 'Shrikhand-Regular',
  },
});
export default CustomDrawerScreen;
