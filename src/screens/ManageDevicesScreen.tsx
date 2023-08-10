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
import React from 'react';
import {styles} from '../theme';
import {StyleSheet} from 'react-native';
const {width} = Dimensions.get('window');
import {Colors, ManageDevice} from '@constants';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {ChevronLeftIcon} from 'react-native-heroicons/outline';
import {ChevronRightIcon} from 'react-native-heroicons/outline';
const ManageDevicesScreen = ({route}) => {
  const title = route.params.title;
  const navigation = useNavigation();
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
          <Icon name="devices" size={28} color="#00AA13" />
        </View>
      </SafeAreaView>
      <ScrollView>
        <View style={{marginTop: 100, paddingHorizontal: 20}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-start',
            }}>
            <Image
              style={{width: 30, height: 30}}
              source={ManageDevice[2].image}
            />
            <Text style={styleManager.text}>Macbook Pro 2018</Text>
            <View style={{position: 'absolute', right: 0}}>
              <ChevronRightIcon size="20" color={Colors.DEFAULT_WHITE} />
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-start',
            }}>
            <Image
              style={{width: 30, height: 30}}
              source={ManageDevice[0].image}
            />
            <Text style={styleManager.text}>Iphone 12 PRO MAX</Text>
            <View style={{position: 'absolute', right: 0}}>
              <ChevronRightIcon size="20" color={Colors.DEFAULT_WHITE} />
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-start',
            }}>
            <Image
              style={{width: 30, height: 30}}
              source={ManageDevice[0].image}
            />
            <Text style={styleManager.text}>Iphone 11 PRO MAX</Text>
            <View style={{position: 'absolute', right: 0}}>
              <ChevronRightIcon size="20" color={Colors.DEFAULT_WHITE} />
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-start',
            }}>
            <Image
              style={{width: 30, height: 30}}
              source={ManageDevice[3].image}
            />
            <Text style={styleManager.text}>Dell Express 2018</Text>
            <View style={{position: 'absolute', right: 0}}>
              <ChevronRightIcon size="20" color={Colors.DEFAULT_WHITE} />
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-start',
            }}>
            <Image
              style={{width: 30, height: 30}}
              source={ManageDevice[0].image}
            />
            <Text style={styleManager.text}>Iphone X </Text>
            <View style={{position: 'absolute', right: 0}}>
              <ChevronRightIcon size="20" color={Colors.DEFAULT_WHITE} />
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-start',
            }}>
            <Image
              style={{width: 30, height: 30}}
              source={ManageDevice[1].image}
            />
            <Text style={styleManager.text}>SAMSUNG GALAXY S8</Text>
            <View style={{position: 'absolute', right: 0}}>
              <ChevronRightIcon size="20" color={Colors.DEFAULT_WHITE} />
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-start',
            }}>
            <Image
              style={{width: 30, height: 30}}
              source={ManageDevice[1].image}
            />
            <Text style={styleManager.text}>HUAWEI TAB S6</Text>
            <View style={{position: 'absolute', right: 0}}>
              <ChevronRightIcon size="20" color={Colors.DEFAULT_WHITE} />
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-start',
            }}>
            <Image
              style={{width: 30, height: 30}}
              source={ManageDevice[1].image}
            />
            <Text style={styleManager.text}>NOKIA A53</Text>
            <View style={{position: 'absolute', right: 0}}>
              <ChevronRightIcon size="20" color={Colors.DEFAULT_WHITE} />
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-start',
            }}>
            <Image
              style={{width: 30, height: 30}}
              source={ManageDevice[1].image}
            />
            <Text style={styleManager.text}>XIAOMI K30 5G</Text>
            <View style={{position: 'absolute', right: 0}}>
              <ChevronRightIcon size="20" color={Colors.DEFAULT_WHITE} />
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-start',
            }}>
            <Image
              style={{width: 30, height: 30}}
              source={ManageDevice[3].image}
            />
            <Text style={styleManager.text}>MSI G14</Text>
            <View style={{position: 'absolute', right: 0}}>
              <ChevronRightIcon size="20" color={Colors.DEFAULT_WHITE} />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
const styleManager = StyleSheet.create({
  text: {
    fontSize: 20,
    paddingLeft: 20,
    paddingVertical: 18,
    color: Colors.DEFAULT_WHITE,
  },
});
export default ManageDevicesScreen;
