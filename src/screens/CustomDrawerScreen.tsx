/* eslint-disable react-native/no-inline-styles */
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icons from 'react-native-vector-icons/Ionicons';
import Iconss from 'react-native-vector-icons/Fontisto';
import Iconsss from 'react-native-vector-icons/AntDesign';
import Iconssss from 'react-native-vector-icons/FontAwesome';
// import {Navigation} from 'react-native-feather';
import {useNavigation} from '@react-navigation/native';

const CustomDrawerScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, backgroundColor: 'rgb(38 38 38)'}}>
      <SafeAreaView>
        <View style={{alignItems: 'center'}}>
          <View
            style={[
              styles.viewContainer,
              {
                width: '100%',
                height: 80,
                paddingHorizontal: 0,
                justifyContent: 'center',
                backgroundColor: 'transparent',
              },
            ]}>
            <Text style={styles.textLarge}>--VIE_</Text>
            <Text style={[styles.textLarge, {color: '#F53920'}]}>ON---</Text>
          </View>

          <TouchableOpacity style={styles.viewContainer}>
            <Text style={styles.text}>User Name</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('User')}
            style={styles.viewContainer}>
            <Iconsss name="user" size={28} color="#00AA13" />
            <Text style={styles.text}>User Information</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.viewContainer}
            onPress={() => navigation.navigate('Watching')}>
            <Icon name="history" size={28} color="#00AA13" />
            <Text style={styles.text}>Watching</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.viewContainer}
            onPress={() => navigation.navigate('MyList')}>
            <Iconsss name="hearto" size={28} color="#00AA13" />
            <Text style={styles.text}>My Lists</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.viewContainer}
            onPress={() => navigation.navigate('Transaction')}>
            <Iconssss name="credit-card" size={28} color="#00AA13" />
            <Text style={styles.text}>Transaction</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.viewContainer}
            onPress={() => navigation.navigate('LogInTV')}>
            <Iconssss name="tv" size={28} color="#00AA13" />
            <Text style={styles.text}>Log In SmartTV</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.viewContainer}
            onPress={() => navigation.navigate('ManageDevices')}>
            <Icon name="devices" size={28} color="#00AA13" />
            <Text style={styles.text}>Manage Devices</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.viewContainer}
            onPress={() => navigation.navigate('Settings')}>
            <Icons name="settings-outline" size={28} color="#00AA13" />
            <Text style={styles.text}>Settings</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.viewContainer}
            onPress={() => navigation.navigate('TermsOfUse')}>
            <Iconssss name="paper-plane-o" size={28} color="#00AA13" />
            <Text style={styles.text}>Terms of Use</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.viewContainer}
            onPress={() => navigation.navigate('Privary')}>
            <Icons name="newspaper-outline" size={28} color="#00AA13" />
            <Text style={styles.text}>Privacy policy</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.viewContainer, {height: 70}]}
            onPress={() => navigation.navigate('LogInTV')}>
            <Icons name="log-out-outline" size={38} color="#F53920" />
            <Text
              style={[
                styles.text,
                {color: 'red', fontSize: 30, fontWeight: '700'},
              ]}>
              Log out
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
};
const styles = StyleSheet.create({
  viewContainer: {
    backgroundColor: '#121212',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 7,
    position: 'relative',
    width: '90%',
    height: 50,
    borderRadius: 10,
  },
  textLarge: {
    fontSize: 42,
    color: '#00AA13',
    fontWeight: '900',
  },
  text: {
    fontSize: 22,
    color: '#ffff',
    fontWeight: '400',
    position: 'absolute',
    paddingLeft: 70,
  },
});
export default CustomDrawerScreen;
