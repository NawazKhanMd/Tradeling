/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import Spacer from './spacer';
import {Controller} from 'react-hook-form';
// import {Icon} from '@ui-kitten/components';

const MyTextInput = props => {
  const {
    type = 'text',
    name = '',
    control = {},
    inputStyles,
    onChange = () => {},
    value,
    ...rest
  } = props;
  const onChangeProxy = (value: string) => {
    onChange(value);
    setTextValue(value);
  };
  const [textValue, setTextValue] = useState(value);
  return (
    <Controller
      control={control}
      rules={{
        required: true,
      }}
      render={({field: {onChange, onBlur, value}}) => (
        <>
          <View style={styles.inputContainer}>
            <TextInput
              style={{...styles.inputContainer, ...inputStyles}}
              onChangeText={onChangeProxy}
              value={textValue}
              {...rest}
            />
          </View>
          <Spacer height={20} />
        </>
      )}
      name={name}
    />
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    borderRadius: 10,
    paddingHorizontal: 20,
    fontSize: 17,
    height: 74,
    width: '100%',
    backgroundColor: '#E8E8E8',
  },
  icon: {
    width: 32,
    height: 32,
  },
});

export default MyTextInput;
