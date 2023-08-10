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
import {Settings} from 'react-native-fbsdk-next';
import {AuthContext} from '../navigators/AuthProvider';
import {useNavigation} from '@react-navigation/native';
import {Button, ButtonSocial, Input, Loader} from '@components';
import {LoginManager, AccessToken} from 'react-native-fbsdk-next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

// Ask for consent first if necessary
// Possibly only do this for iOS if no need to handle a GDPR-type flow
Settings.initializeSDK();

import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import {appleAuth} from '@invertase/react-native-apple-authentication';

import {NativeModules} from 'react-native';
const {RNTwitterSignIn} = NativeModules;

export interface ISignUpData {
  email: string;
  password: string;
}
export interface Error {
  email: string;
  password: number;
}
const LogInScreen = () => {
  // const {user}: any = useContext(AuthContext);
  const {login}: any = useContext(AuthContext);
  GoogleSignin.configure({
    webClientId:
      '412747622947-gf880ruglqu8digrjj23evkm2v8jg1k4.apps.googleusercontent.com',
  });
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  const [inputs, setInputs] = useState<ISignUpData>({email: '', password: ''});
  const [errors, setErrors] = useState<Error>({});
  const [loading, setLoading] = useState(false);
  // const dispatch = useDispatch();
  const validate = async () => {
    Keyboard.dismiss();
    let isValid = true;
    if (!inputs.email) {
      handleError('Please input email', 'email');
      isValid = false;
    } else if (!inputs.email.match(/\S+@\S+\.\S+/)) {
      handleError('Please input a valid email', 'email');
      isValid = false;
    }
    if (!inputs.password) {
      handleError('Please input password', 'password');
      isValid = false;
    }
    if (isValid) {
      loginAccess(inputs.email, inputs.password);
    }
  };

  const loginAccess = (email, password) => {
    setTimeout(async () => {
      setLoading(true);
      login(email, password, navigation), setLoading(false);
    }, 100);
  };

  const handleOnchange = (text: string, input: string) => {
    setInputs(prevState => ({...prevState, [input]: text}));
  };

  const handleError = (error: any, input: string) => {
    setErrors(prevState => ({...prevState, [input]: error}));
  };
  async function onGoogleButtonPress() {
    // Check if your device supports Google Play
    await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
    // Get the users ID token
    const {idToken} = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    // return auth().signInWithCredential(googleCredential);
    const user_sign_in = auth().signInWithCredential(googleCredential);
    user_sign_in.then(re => {
      console.log(re);
      navigation.navigate('Drawer');
    });
  }
  async function onFacebookButtonPress() {
    // Attempt login with permissions
    const result = await LoginManager.logInWithPermissions([
      'public_profile',
      'email',
    ]);

    if (result.isCancelled) {
      throw 'User cancelled the login process';
    }

    // Once signed in, get the users AccessToken
    const data = await AccessToken.getCurrentAccessToken();

    if (!data) {
      throw 'Something went wrong obtaining access token';
    }

    // Create a Firebase credential with the AccessToken
    const facebookCredential = auth.FacebookAuthProvider.credential(
      data.accessToken,
    );

    // Sign-in the user with the credential
    return auth().signInWithCredential(facebookCredential);
  }
  async function onAppleButtonPress() {
    // 1). start a apple sign-in request
    const appleAuthRequestResponse = await appleAuth.performRequest({
      requestedOperation: appleAuth.Operation.LOGIN,
      requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
    });

    // 2). if the request was successful, extract the token and nonce
    const {identityToken, nonce} = appleAuthRequestResponse;

    // can be null in some scenarios
    if (identityToken) {
      // 3). create a Firebase `AppleAuthProvider` credential
      const appleCredential = firebase.auth.AppleAuthProvider.credential(
        identityToken,
        nonce,
      );

      // 4). use the created `AppleAuthProvider` credential to start a Firebase auth request,
      //     in this example `signInWithCredential` is used, but you could also call `linkWithCredential`
      //     to link the account to an existing user
      const userCredential = await firebase
        .auth()
        .signInWithCredential(appleCredential);

      // user is now signed in, any Firebase `onAuthStateChanged` listeners you have will trigger
      console.warn(
        `Firebase authenticated via Apple, UID: ${userCredential.user.uid}`,
      );
    } else {
      // handle this - retry?
    }
  }
  //google
  async function onTwitterButtonPress() {
    // Perform the login request
    RNTwitterSignIn.init(
      'VEBHtMFimOOOekrz7on5mqmHX',
      'Jno6QVkGSWEYRie1cpNHKiMDlZs1yyEY5uVuDQBS5EuzBT1DbH',
    ).then(() => console.log('Twitter SDK initialized'));
    const {authToken, authTokenSecret} = await RNTwitterSignIn.logIn();

    // Create a Twitter credential with the tokens
    const twitterCredential = auth.TwitterAuthProvider.credential(
      authToken,
      authTokenSecret,
    );

    // Sign-in the user with the credential
    // return auth().signInWithCredential(twitterCredential);
    const user_sign_in = auth().signInWithCredential(twitterCredential);
    user_sign_in.then(re => {
      console.log(re);
    });
  }
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
              // fontWeight: 'bold',
              color: Colors.DEFAULT_GREEN,
              fontSize: Display.setWidth(8),
              fontFamily: 'Shrikhand-Regular',
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
            <ButtonSocial
              onPress={() => onGoogleButtonPress()}
              logo="google"
              title="Log In with Google"
            />
            <ButtonSocial
              onPress={() => onAppleButtonPress()}
              logo="apple"
              title="Log In with Apple ID"
            />
            <ButtonSocial
              onPress={() => onFacebookButtonPress()}
              logo="facebook"
              title="Log In with Facebook"
            />
            <ButtonSocial
              onPress={() => onTwitterButtonPress()}
              logo="twitter"
              title="Log In with Twitter"
            />
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text
              style={{
                fontSize: 16,
                paddingTop: 10,
                textAlign: 'center',
                color: Colors.DEFAULT_YELLOW,
                fontFamily: 'Shrikhand-Regular',
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
