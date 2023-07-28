/* eslint-disable react-native/no-inline-styles */
import React, {useContext} from 'react';
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
const {width} = Dimensions.get('window');
import {RootStackParams} from '@navigators';
import LottieView from 'lottie-react-native';
import {Button, Loader, Input} from '@components';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {AuthContext} from 'src/navigators/AuthProvider';

export interface Error {
  email: string;
  password: string;
  fullname: string;
  phone: number;
}
const RegisterScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  const [inputs, setInputs] = React.useState({
    email: '',
    fullname: '',
    phone: '',
    password: '',
  });
  const {register} = useContext(AuthContext);
  const [errors, setErrors] = React.useState<Error>({});
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
      register(inputs.email, inputs.password);
    }
  };

  // const register = () => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     try {
  //       setLoading(false);
  //       AsyncStorage.setItem('userData', JSON.stringify(inputs));
  //       navigation.navigate('LogIn');
  //     } catch (error) {
  //       Alert.alert('Error', 'Something went wrong');
  //     }
  //   }, 3000);
  // };

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
            password={false}
            label="Email"
            error={errors.email}
            iconName="email-outline"
            placeholder="Your Email"
            onFocus={() => handleError(null, 'email')}
            onChangeText={(text: string) => handleOnchange(text, 'email')}
          />

          <Input
            password={false}
            label="Full Name"
            error={errors.fullname}
            iconName="account-outline"
            placeholder="Your Full Name"
            onFocus={() => handleError(null, 'fullname')}
            onChangeText={(text: string) => handleOnchange(text, 'fullname')}
          />

          <Input
            password={false}
            label="Phone Number"
            error={errors.phone}
            keyboardType="numeric"
            iconName="phone-outline"
            placeholder="Your Number"
            onFocus={() => handleError(null, 'phone')}
            onChangeText={(text: string) => handleOnchange(text, 'phone')}
          />
          <Input
            password={true}
            label="Password"
            error={errors.password}
            iconName="lock-outline"
            placeholder="Your Password"
            onFocus={() => handleError(null, 'password')}
            onChangeText={(text: string) => handleOnchange(text, 'password')}
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
              You have an account? Log In
            </Text>
          </TouchableOpacity>
          <View
            style={{
              width: width * 0.92,
              height: width * 0.6,
              alignItems: 'center',
              margin: 0,
            }}>
            <LottieView
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
