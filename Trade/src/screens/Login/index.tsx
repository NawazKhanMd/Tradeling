/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {Text, View, ImageBackground, StyleSheet} from 'react-native';
import MyTextInput from '../../components/TextInput';
import MyButton from '../../components/Button';
import {useSelector} from 'react-redux';

import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';

import {useForm} from 'react-hook-form';
import Spacer from '../../components/spacer';
const LoginPage = () => {
  const counter = useSelector(state => state.current);

  const schema = yup.object({
    name: yup.string().nullable(),
    email: yup.string().nullable(),
    password: yup.string().nullable(),
  });

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      name:'',
      email:'',
      password: '',
    },
    resolver: yupResolver(schema),
  });

  return (
    <ImageBackground
      source={require('../../assets/bg.png')}
      style={styles.mainContainer}>
      <Text>loginPage</Text>
      <MyTextInput placeholder={'Name'} control={control}/>
      <MyTextInput placeholder={'Email'}  control={control}/>
      <MyTextInput placeholder={'Password'}  control={control}/>
      <MyButton title={'Register'} width={'100%'} />
      <Spacer height={30} />
      <View style={styles.socialButtons}>
        <MyButton title={'Facebook'} width={'45%'} bgColor={'#039BE5'} />
        <MyButton title={'Google'} width={'45%'} bgColor={'#fff'} txtColor={'#313131'} />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    height: '100%',
    width: '100%',
    padding: 24,
  },
  socialButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default LoginPage;
