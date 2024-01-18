import React from 'react';
import {Colors} from '@constants';
import Modal from 'react-native-modal';
const {width, height} = Dimensions.get('window');
import FastImage from 'react-native-fast-image';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {View, Dimensions, TouchableOpacity, StyleSheet} from 'react-native';
const ModalPopUp = () => {
  const [isModalVisible, setModalVisible] = React.useState(true);

  return (
    <Modal
      animationIn={'zoomIn'}
      animationInTiming={500}
      backdropOpacity={0.85}
      animationOut={'zoomOut'}
      animationOutTiming={500}
      isVisible={isModalVisible}>
      <View className="flex-1 justify-center items-center">
        <View className="relative w-full justify-around py-4 items-center">
          <FastImage
            style={styles.Popup}
            source={require('../assets/images/poster.jpeg')}
            resizeMode={FastImage.resizeMode.cover}
          />
          <TouchableOpacity
            className="absolute right-4 top-5"
            onPress={() => setModalVisible(false)}>
            <Icon
              name="cancel"
              size={36}
              style={{color: Colors.DEFAULT_GREEN}}
            />
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  Popup: {
    width: width * 0.85,
    height: height * 0.6,
    borderRadius: 10,
  },
});
export default ModalPopUp;
