/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable curly */
import {
  View,
  Text,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  Switch,
  StyleSheet,
} from 'react-native';
import {styles, theme} from '../theme';
import React, {useState} from 'react';
const {width} = Dimensions.get('window');
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  ChevronLeftIcon,
  Cog6ToothIcon,
  ChevronRightIcon,
} from 'react-native-heroicons/outline';
import {Colors, Search} from '@constants';
const SettingScreen = ({route}) => {
  const title = route.params.title;
  const navigation = useNavigation();
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const [isEnabled1, setIsEnabled1] = useState(false);
  const toggleSwitch1 = () => setIsEnabled1(previousState => !previousState);

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
          <Cog6ToothIcon size="35" color={theme.background} />
        </View>
      </SafeAreaView>

      <ScrollView>
        <View style={{paddingHorizontal: 20, marginTop: 100}}>
          {/*  Thong bao */}
          <View>
            <Text style={stylesSetting.textHeader}>Message</Text>
            <View
              style={{
                borderWidth: 0.35,
                borderColor: Colors.DEFAULT_GREY,
              }}></View>

            <View
              style={{
                paddingVertical: 10,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-start',
              }}>
              <Image style={stylesSetting.image} source={Search[0].image} />
              <Text style={stylesSetting.text}>
                Get notification from VieOn
              </Text>
              <View style={{position: 'absolute', right: 0}}>
                <Switch
                  trackColor={{false: '#767577', true: '#00AA13'}}
                  thumbColor={isEnabled ? '#f4f3f4' : '#f4f3f4'}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={toggleSwitch}
                  value={isEnabled}
                />
              </View>
            </View>
          </View>
          {/* Bao mat */}
          <View>
            <Text style={stylesSetting.textHeader}>Security</Text>
            <View
              style={{
                borderWidth: 0.35,
                borderColor: Colors.DEFAULT_GREY,
              }}></View>
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-start',

                  alignItems: 'center',
                  paddingVertical: 10,
                }}>
                <Image style={stylesSetting.image} source={Search[1].image} />
                <Text style={stylesSetting.text}> Log In With Face ID</Text>
                <View style={{position: 'absolute', right: 0}}>
                  <Switch
                    trackColor={{false: '#767577', true: '#00AA13'}}
                    thumbColor={isEnabled ? '#f4f3f4' : '#f4f3f4'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch1}
                    value={isEnabled1}
                  />
                </View>
              </View>
              <View
                style={{
                  paddingVertical: 10,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                }}>
                <Image style={stylesSetting.image} source={Search[2].image} />
                <Text style={stylesSetting.text}>Delete Account Vie On</Text>
                <View style={{position: 'absolute', right: 0}}>
                  <ChevronRightIcon size="20" color={Colors.DEFAULT_WHITE} />
                </View>
              </View>
            </View>
          </View>
          {/* history */}
          <View>
            <Text style={stylesSetting.textHeader}>History</Text>
            <View
              style={{
                borderWidth: 0.35,
                borderColor: Colors.DEFAULT_GREY,
              }}></View>
            <View>
              <View
                style={{
                  paddingVertical: 10,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                }}>
                <Image style={stylesSetting.image} source={Search[3].image} />
                <Text style={stylesSetting.text}>Delete History</Text>
                <View style={{position: 'absolute', right: 0}}>
                  <ChevronRightIcon size="20" color={Colors.DEFAULT_WHITE} />
                </View>
              </View>
              <View
                style={{
                  paddingVertical: 10,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                }}>
                <Image style={stylesSetting.image} source={Search[4].image} />
                <Text style={stylesSetting.text}>Delete History Search</Text>
                <View style={{position: 'absolute', right: 0}}>
                  <ChevronRightIcon size="20" color={Colors.DEFAULT_WHITE} />
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
const stylesSetting = StyleSheet.create({
  textHeader: {
    fontSize: 18,
    color: '#00AA13',
    paddingVertical: 10,
  },
  text: {
    fontSize: 16,
    color: 'white',
    paddingLeft: 15,
  },
  image: {
    width: 30,
    height: 30,
  },
});
export default SettingScreen;
