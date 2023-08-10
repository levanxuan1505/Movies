/* eslint-disable no-sequences */
import {Alert} from 'react-native';
import auth from '@react-native-firebase/auth';
import React, {createContext, useState} from 'react';
export const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login: async (email, password, navigation) => {
          auth()
            ?.signInWithEmailAndPassword(email, password)
            ?.then(() => {
              // console.log('User account signed in!'),
              // Alert.alert('Successful', 'Successfully signed in');
              navigation.navigate('Drawer');
            })
            .catch(error => {
              if (error.code === 'auth/wrong-password') {
                Alert.alert(
                  'Error',
                  'The password is invalid or the user does not have a password!',
                );
                // console.log(
                //   'The password is invalid or the user does not have a password!',
                // );
              }

              if (error.code === 'auth/invalid-email') {
                Alert.alert('Error', 'The email address is badly formatted');
                // console.log('The email address is badly formatted');
              }

              if (error.code === 'auth/user-not-found') {
                Alert.alert(
                  'Error',
                  'There is no user record corresponding to this identifier. The user may have been deleted',
                );
                // console.log('The email address is badly formatted');
              }

              // console.error(error);
            });
        },
        register: async (email, password) => {
          auth()
            .createUserWithEmailAndPassword(email, password)
            .then(() => {
              console.log('User account created & signed in!');
            })
            .catch(error => {
              if (error.code === 'auth/email-already-in-use') {
                console.log('That email address is already in use!');
              }

              if (error.code === 'auth/invalid-email') {
                console.log('That email address is invalid!');
              }

              console.error(error);
            });
        },
        logout: async () => {
          try {
            await auth()?.signOut();
          } catch (e) {
            console.log(e, 'error');
          }
        },
      }}>
      {children}
    </AuthContext.Provider>
  );
};
