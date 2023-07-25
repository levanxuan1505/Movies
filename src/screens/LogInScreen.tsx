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
} from 'react-native';
import {Colors} from '@constants';
// import {useDispatch} from 'react-redux';
// import {changeName} from '../redux/userSlice';
const {width} = Dimensions.get('window');
import LottieView from 'lottie-react-native';
import {Button, ButtonSocial, Input, Loader} from '@components';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Display} from '@utils';
import {useNavigation} from '@react-navigation/native';
export interface ISignUpData {
  email: string;
  password: string;
}
const SignInScreen = () => {
  const navigation = useNavigation();
  const [inputs, setInputs] = useState<ISignUpData>({email: '', password: ''});
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  //   const dispatch = useDispatch();
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
          //   dispatch(changeName({userName: userData.fullname}));
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
    <SafeAreaView style={{backgroundColor: Colors.DEFAULT_WHITE, flex: 1}}>
      <StatusBar barStyle="dark-content" />
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
            onChangeText={(text: string) => handleOnchange(text, 'email')}
            onFocus={() => handleError(null, 'email')}
            iconName="email-outline"
            label="Email"
            placeholder="Nhập email của bạn"
            error={errors.email}
          />
          <Input
            onChangeText={(text: string) => handleOnchange(text, 'password')}
            onFocus={() => handleError(null, 'password')}
            iconName="lock-outline"
            label="Password"
            placeholder="Nhập mật khẩu của bạn"
            error={errors.password}
            password
          />
          <Button logo="login" title="Log in" onPress={validate} />
          <ButtonSocial logo="facebook" title="Log In with Facebook" />
          <ButtonSocial logo="google" title="Log In with Google" />
          <Text
            onPress={() => navigation.navigate('Register')}
            style={{
              color: Colors.DEFAULT_YELLOW,
              fontWeight: '700',
              textAlign: 'center',
              fontSize: 18,
              paddingTop: 20,
            }}>
            Bạn chưa có tài khoản? Đăng ký ngay
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignInScreen;
