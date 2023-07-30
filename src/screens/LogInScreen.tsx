/* eslint-disable react-native/no-inline-styles */

import React, {useState, useContext} from 'react';
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
import {AuthContext} from '../navigators/AuthProvider';
const {login}: any = useContext(AuthContext);
const {user}: any = useContext(AuthContext);
console.log(user);

export interface ISignUpData {
  email: string;
  password: string;
}
export interface Error {
  email: string;
  password: number;
}
const LogInScreen = () => {
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
      setLoading(true);
      setTimeout(async () => {
        login(inputs.email, inputs.password);
        user === null
          ? (Alert.alert('Error', 'Email or password is not exactly'),
            setLoading(false))
          : (console.log(login(inputs.email, inputs.password), 'inputNull'),
            setLoading(false),
            navigation.navigate('Home'));
      }, 1000);
    }
  };

  const loginAccess = (email, password) => {
    setTimeout(async () => {
      let userData = await AsyncStorage.getItem('userData');
      if (userData) {
        userData = JSON.parse(userData);
        if (
          inputs.email === userData?.email &&
          inputs.password === userData?.password
        ) {
          login(inputs.email, inputs.password);
          // dispatch(changeName({userName: userData.fullname}));
          navigation.replace('Drawer');
          AsyncStorage.setItem(
            'userData',
            JSON.stringify({...userData, loggedIn: true}),
          );
        } else {
          Alert.alert('Error', 'Invalid Detailssss');
        }
      } else {
        Alert.alert('Error', 'User does not exist');
      }
      // if (login(email, password)) {
      //   setLoading(false);
      //   console.log(login(email, password));
      //   login(inputs.email, inputs.password);
      // } else {
      //   Alert.alert('Error', 'User does not exist or wrong password');
      // }
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
          <View
            style={{
              // flex: 1,
              flexDirection: 'row',
              flexWrap: 'wrap',
              // justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <ButtonSocial logo="google" title="Log In with Google" />
            <ButtonSocial logo="apple" title="Log In with Apple ID" />
            <ButtonSocial logo="facebook" title="Log In with Facebook" />
            <ButtonSocial logo="twitter" title="Log In with Twitter" />
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text
              style={{
                fontSize: 18,
                paddingTop: 10,
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

export default LogInScreen;
