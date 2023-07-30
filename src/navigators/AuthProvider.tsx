import React, {createContext, useState} from 'react';
import auth from '@react-native-firebase/auth';
export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login: async (email, password) => {
          try {
            await auth().signInWithEmailAndPassword(email, password);
            console.log(email, 'success');
          } catch (e) {
            console.log(e, 'error');
          }
        },
        register: async (email, password) => {
          try {
            await auth().createUserWithEmailAndPassword(email, password);
          } catch (e) {
            console.log(e, 'error');
          }
        },
        logout: async () => {
          try {
            await auth().signOut();
          } catch (e) {
            console.log(e, 'error');
          }
        },
      }}>
      {children}
    </AuthContext.Provider>
  );
};
