/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ActivityIndicator,
  useWindowDimensions,
} from 'react-native';
import {Colors} from '../constants';

const Loader = ({visible = false}) => {
  const {width, height} = useWindowDimensions();
  return (
    visible && (
      <View style={[style.container, {height, width}]}>
        <View style={style.loader}>
          <ActivityIndicator size="large" color={Colors.DEFAULT_GREEN} />
          <Text
            style={{marginLeft: 10, fontSize: 22, color: Colors.DEFAULT_GREEN}}>
            Loading...
          </Text>
        </View>
      </View>
    )
  );
};
const style = StyleSheet.create({
  loader: {
    height: 70,
    borderRadius: 5,
    marginHorizontal: 50,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: Colors.DEFAULT_WHITE,
  },
  container: {
    zIndex: 10,
    position: 'absolute',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
});

export default Loader;
