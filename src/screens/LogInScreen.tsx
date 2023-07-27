/* eslint-disable react-native/no-inline-styles */

import React, {useState} from 'react';
import {
  View,
  Text,
  Alert,
  Keyboard,
  StatusBar,
  Dimensions,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {Display} from '@utils';
import {Colors} from '@constants';
import {useDispatch} from 'react-redux';
const {width} = Dimensions.get('window');
import {RootStackParams} from '@navigators';
import LottieView from 'lottie-react-native';
import {changeName} from '../redux/userSlice';
import {useNavigation} from '@react-navigation/native';
import {Button, ButtonSocial, Input, Loader} from '@components';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
export interface ISignUpData {
  email: string;
  password: string;
}
export interface Error {
  email: string;
  password: number;
}
const SignInScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  const [inputs, setInputs] = useState<ISignUpData>({email: '', password: ''});
  const [errors, setErrors] = useState<Error>({});
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const validate = async () => {
    Keyboard.dismiss();
    let isValid = true;
    if (!inputs.email) {
      handleError('Please input email', 'email');
      isValid = false;
    }
    if (!inputs.password) {
      handleError('Please input password', 'password');
      isValid = false;
    }
    if (isValid) {
      login();
    }
  };

  const login = () => {
    setLoading(true);
    setTimeout(async () => {
      setLoading(false);
      let userData = await AsyncStorage.getItem('userData');
      if (userData) {
        userData = JSON.parse(userData);
        if (
          inputs.email === userData?.email &&
          inputs.password === userData?.password
        ) {
          dispatch(changeName({userName: userData.fullname}));
          navigation.replace('Drawer');
          AsyncStorage.setItem(
            'userData',
            JSON.stringify({...userData, loggedIn: true}),
          );
        } else {
          Alert.alert('Error', 'Invalid Details');
        }
      } else {
        Alert.alert('Error', 'User does not exist');
      }
    }, 3000);
  };

  const handleOnchange = (text: string, input: string) => {
    setInputs(prevState => ({...prevState, [input]: text}));
  };

  const handleError = (error: any, input: string) => {
    setErrors(prevState => ({...prevState, [input]: error}));
  };
  return (
    <SafeAreaView className="flex-1 bg-neutral-800">
      <StatusBar barStyle="light-content" />
      <Loader visible={loading} />
      <View style={{paddingTop: Display.setWidth(0), paddingHorizontal: 20}}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <Text
            style={{
              color: Colors.DEFAULT_GREEN,
              fontSize: Display.setWidth(8),
              fontWeight: 'bold',
            }}>
            Log In
          </Text>
          <View style={{width: width * 0.2, height: width * 0.15}}>
            <LottieView
              source={require('../assets/OnboardingAnimations/6.json')}
              autoPlay
              loop
            />
          </View>
        </View>

        <View
          style={{
            width: width * 0.9,
            alignItems: 'center',
            height: width * 0.62,
          }}>
          <LottieView
            source={require('../assets/OnboardingAnimations/5.json')}
            autoPlay
            loop
          />
        </View>
        <View>
          <Input
            label="Email"
            password={false}
            iconName="email-outline"
            error={errors.email}
            placeholder="Enter Your Email"
            onFocus={() => handleError(null, 'email')}
            onChangeText={(text: string) => handleOnchange(text, 'email')}
          />
          <Input
            label="Password"
            password={true}
            iconName="lock-outline"
            error={errors.password}
            placeholder="Enter Your Password"
            onChangeText={(text: string) => handleOnchange(text, 'password')}
            onFocus={() => handleError(null, 'password')}
          />
          <Button logo="login" title="Log in" onPress={validate} />
          <ButtonSocial logo="facebook" title="Log In with Facebook" />
          <ButtonSocial logo="google" title="Log In with Google" />
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text
              style={{
                fontSize: 18,
                paddingTop: 20,
                fontWeight: '700',
                textAlign: 'center',
                color: Colors.DEFAULT_YELLOW,
              }}>
              You don't have an account? Register here
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignInScreen;
