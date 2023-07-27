/* eslint-disable react-native/no-inline-styles */
import {Colors} from '../constants';
import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const Input = ({
  label,
  error,
  password,
  iconName,
  onFocus = () => {},
  ...props
}) => {
  const [hidePassword, setHidePassword] = useState(password);
  const [isFocused, setIsFocused] = useState(false);
  return (
    <View style={{marginBottom: 10}}>
      <Text style={style.label}>{label}</Text>
      <View
        style={[
          style.inputContainer,
          {
            borderColor: error
              ? Colors.DEFAULT_RED
              : isFocused
              ? Colors.DEFAULT_GREEN
              : Colors.DARK_FOUR,
            alignItems: 'center',
          },
        ]}>
        <Icon
          name={iconName}
          style={{color: Colors.DEFAULT_GREEN, fontSize: 28, marginRight: 10}}
        />
        <TextInput
          autoCorrect={false}
          onFocus={() => {
            onFocus();
            setIsFocused(true);
          }}
          onBlur={() => setIsFocused(false)}
          secureTextEntry={hidePassword}
          placeholderTextColor={Colors.DEFAULT_WHITE}
          style={{
            color: Colors.DEFAULT_GREEN,
            flex: 1,
          }}
          {...props}
        />
        {password && (
          <Icon
            onPress={() => setHidePassword(!hidePassword)}
            name={hidePassword ? 'eye-outline' : 'eye-off-outline'}
            style={{color: Colors.DEFAULT_GREEN, fontSize: 28}}
          />
        )}
      </View>
      {error && (
        <Text style={{marginTop: 7, color: Colors.DEFAULT_RED, fontSize: 14}}>
          {error}
        </Text>
      )}
    </View>
  );
};

const style = StyleSheet.create({
  label: {
    fontSize: 14,
    marginVertical: 5,
    color: Colors.DEFAULT_GREEN,
  },
  inputContainer: {
    height: 55,
    borderWidth: 0.5,
    flexDirection: 'row',
    paddingHorizontal: 15,
    backgroundColor: Colors.INACTIVE_GREY,
  },
});
export default Input;
