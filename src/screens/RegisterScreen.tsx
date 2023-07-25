/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  View,
  Text,
  Alert,
  Keyboard,
  ScrollView,
  Dimensions,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {Display} from '@utils';
import {Colors} from '@constants';
import {Button, Loader, Input} from '@components';
import {useNavigation} from '@react-navigation/native';
import LottieView from 'lottie-react-native';
const {width} = Dimensions.get('window');
const RegisterScreen = () => {
  const navigation = useNavigation();
  const [inputs, setInputs] = React.useState({
    email: '',
    fullname: '',
    phone: '',
    password: '',
  });
  const [errors, setErrors] = React.useState({});
  const [loading, setLoading] = React.useState(false);

  const validate = () => {
    Keyboard.dismiss();
    let isValid = true;

    if (!inputs.email) {
      handleError('Please input email', 'email');
      isValid = false;
    } else if (!inputs.email.match(/\S+@\S+\.\S+/)) {
      handleError('Please input a valid email', 'email');
      isValid = false;
    }

    if (!inputs.fullname) {
      handleError('Please input fullname', 'fullname');
      isValid = false;
    } else if (
      !inputs.fullname.match(
        /^[A-ZÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸĐ][a-zàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ]*(?:[ ][A-ZÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸĐ][a-zàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ]*)*$/,
      )
    ) {
      handleError('Please input right format fullname', 'fullname');
      isValid = false;
    }
    if (!inputs.phone) {
      handleError('Please input phone number', 'phone');
      isValid = false;
    } else if (
      !inputs.phone.match(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/)
    ) {
      handleError('Please input right phone', 'fullname');
      isValid = false;
    }

    if (!inputs.password) {
      handleError('Please input password', 'password');
      isValid = false;
    } else if (inputs.password.length < 5) {
      handleError('Min password must be larger 5', 'password');
      isValid = false;
    }

    if (isValid) {
      register();
    }
  };

  const register = () => {
    setLoading(true);
    setTimeout(() => {
      try {
        setLoading(false);
        AsyncStorage.setItem('userData', JSON.stringify(inputs));
        navigation.navigate('LogIn');
      } catch (error) {
        Alert.alert('Error', 'Something went wrong');
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
      <Loader visible={loading} />
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
          Register
        </Text>
        <View style={{width: width * 0.2, height: width * 0.15}}>
          <LottieView
            source={require('../assets/OnboardingAnimations/8.json')}
            autoPlay
            loop
          />
        </View>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingTop: Display.setWidth(0),
          paddingHorizontal: 20,
          paddingBottom: Display.setWidth(20),
        }}>
        <View>
          <Input
            onChangeText={(text: string) => handleOnchange(text, 'email')}
            onFocus={() => handleError(null, 'email')}
            iconName="email-outline"
            label="Email"
            placeholder="Your Email"
            error={errors.email}
          />

          <Input
            onChangeText={(text: string) => handleOnchange(text, 'fullname')}
            onFocus={() => handleError(null, 'fullname')}
            iconName="account-outline"
            label="Full Name"
            placeholder="Your Full Name"
            error={errors.fullname}
          />

          <Input
            keyboardType="numeric"
            onChangeText={(text: string) => handleOnchange(text, 'phone')}
            onFocus={() => handleError(null, 'phone')}
            iconName="phone-outline"
            label="Phone Number"
            placeholder="Your Number"
            error={errors.phone}
          />
          <Input
            onChangeText={(text: string) => handleOnchange(text, 'password')}
            onFocus={() => handleError(null, 'password')}
            iconName="lock-outline"
            label="Password"
            placeholder="Your Password"
            error={errors.password}
            password
          />
          <Button logo="register" title="Register" onPress={validate} />
          <TouchableOpacity onPress={navigation.goBack}>
            <Text
              style={{
                color: Colors.DEFAULT_YELLOW,
                fontWeight: '700',
                textAlign: 'center',
                fontSize: 18,
                paddingTop: 10,
              }}>
              Bạn đã có tài khoản? Đăng nhập
            </Text>
          </TouchableOpacity>
          <View
            style={{
              width: width * 0.92,
              height: width * 0.6,
            }}>
            <LottieView
              style={{}}
              source={require('../assets/OnboardingAnimations/7.json')}
              autoPlay
              loop
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RegisterScreen;
