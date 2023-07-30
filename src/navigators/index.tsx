import React from 'react';
import {AuthProvider} from './AuthProvider';
import Routers from './Routers';
import {RootStackParams} from './Routers';
const Navigators = () => {
  return (
    <AuthProvider>
      <Routers />
    </AuthProvider>
  );
};
export type {RootStackParams};
export default Navigators;
