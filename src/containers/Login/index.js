import React, {useState, useEffect} from 'react';
import {Text, View} from 'react-native';
import {TextInput, Button} from 'react-native-paper';
import {useSelector, useDispatch} from 'react-redux';
import {setLoginToken} from '../../redux/actions/login';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = props => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const globalToken = useSelector(state => (state.loginReducer || {}).token);
  const dispatch = useDispatch();

  const onLogin = async () => {
    let token = `${userName}${password}`;
    dispatch(setLoginToken(token));
    await AsyncStorage.setItem('@user', token);
    props.navigation.navigate('Home');
  };

  return (
    <View>
      <TextInput
        mode="outlined"
        label="userName"
        placeholder="User Name..."
        value={userName}
        onChangeText={text => setUserName(text)}
      />
      <TextInput
        mode="outlined"
        label="Password"
        placeholder="Password..."
        value={password}
        onChangeText={text => setPassword(text)}
      />
      <Button mode="contained" onPress={onLogin}>
        LOGIN
      </Button>
    </View>
  );
};

export default Login;
