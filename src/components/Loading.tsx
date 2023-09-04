import React from 'react';
import {theme} from '../theme';
import {View, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');
import * as Progress from 'react-native-progress';

const Loading = () => {
  return (
    <View
      style={{height, width}}
      className="absolute flex-row justify-center items-center">
      <Progress.CircleSnail
        size={160}
        thickness={12}
        color={[theme.background, theme.blueColor, theme.yellowColor]}
      />
    </View>
  );
};
export default Loading;
