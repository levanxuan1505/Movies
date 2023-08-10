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
import {styles, theme} from '../theme';
const {width} = Dimensions.get('window');
import {RootStackParams} from '@navigators';
import LottieView from 'lottie-react-native';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ChevronLeftIcon, CreditCardIcon} from 'react-native-heroicons/outline';

const TransactionScreen = ({route}) => {
  const title = route.params.title;
  const [refreshing, setRefreshing] = React.useState(false);
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

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

          <CreditCardIcon size="35" color={theme.background} />
        </View>
      </SafeAreaView>
      <ScrollView>
        <View style={{alignItems: 'center'}}>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 100,
            }}>
            <Image
              style={{
                width: width * 0.9,
                height: width * 0.56,
                borderRadius: 10,
              }}
              source={require('../assets/images/NFC.jpg')}
            />
          </View>
          <View style={{width: width, height: width}}>
            <LottieView
              source={require('../assets/OnboardingAnimations/NFC.json')}
              autoPlay
              loop
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
export default TransactionScreen;
