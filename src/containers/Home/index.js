import React from 'react';
import {Text} from 'react-native';
import {Button} from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Home = props => {
  const onLogout = async () => {
    await AsyncStorage.clear();
    props.navigation.navigate('Login');
  };

  return (
    <Button mode="contained" onPress={onLogout}>
      LOG OUT
    </Button>
  );
};

export default Home;
