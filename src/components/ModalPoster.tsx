/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import {Display} from '@utils';
import {Colors} from '@constants';
import React, {useState} from 'react';
import styles from '../css/HomeScreenStyle';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {View, Modal, Image, Animated, TouchableOpacity} from 'react-native';

const ModalPoster = () => {
  // modal//
  const [visible, setVisible] = useState(true);
  const ModalPopup = ({visible, children}) => {
    const [showModal, setShowModal] = useState(visible);
    const scaleValue = React.useRef(new Animated.Value(0)).current;
    React.useEffect(() => {
      toggleModal();
    }, [visible]);
    const toggleModal = () => {
      if (visible) {
        setShowModal(true);
        Animated.spring(scaleValue, {
          toValue: 1,
          // duration: 300,
          useNativeDriver: true,
        }).start();
      } else {
        setTimeout(() => setShowModal(false), 100);
        Animated.timing(scaleValue, {
          toValue: 0,
          duration: 100,
          useNativeDriver: true,
        }).start();
      }
    };
    return (
      <Modal transparent visible={showModal}>
        <View style={styles.modalBackGround}>
          <Animated.View
            style={[styles.modalContainer, {transform: [{scale: scaleValue}]}]}>
            {children}
          </Animated.View>
        </View>
      </Modal>
    );
  };
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <ModalPopup visible={visible}>
        <View style={{alignItems: 'center'}}>
          <View style={styles.Header}>
            <TouchableOpacity onPress={() => setVisible(false)}>
              <Icon
                name="cancel"
                size={36}
                style={{color: Colors.DEFAULT_GREEN}}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{alignItems: 'center'}}>
          <Image
            source={require('../assets/images/modal.png')}
            style={{
              height: Display.setWidth(92),
              width: Display.setWidth(80),
              marginVertical: 10,
            }}
          />
        </View>
      </ModalPopup>
    </View>
  );
};

export default ModalPoster;
