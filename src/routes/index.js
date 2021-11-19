import React, {useState, useEffect} from 'react';
import {ActivityIndicator} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../containers/Login';
import Home from '../containers/Home';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {setLoginToken} from '../redux/actions/login';
import {useSelector, useDispatch} from 'react-redux';

const LoginStack = createStackNavigator();
const AuthenticatedStack = createStackNavigator();

const Routes = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    checkAuthStatus();
  }, []);

  const checkAuthStatus = async () => {
    let userData = await AsyncStorage.getItem('@user');
    if (userData) {
      setIsLoggedIn(true);
      dispatch(setLoginToken(userData));
      setLoading(false);
    } else {
      setLoading(false);
    }
  };

  if (loading) {
    return <ActivityIndicator size="large" color="red" />;
  }

  const renderAuthenticatedStack = () => {
    return (
      <AuthenticatedStack.Navigator>
        <AuthenticatedStack.Screen name="Home" component={Home} />
        <AuthenticatedStack.Screen name="Login" component={Login} />
      </AuthenticatedStack.Navigator>
    );
  };

  const renderLoginStatck = () => {
    return (
      <LoginStack.Navigator initialRouteName="Login">
        <LoginStack.Screen name="Login" component={Login} />
        <LoginStack.Screen name="Home" component={Home} />
      </LoginStack.Navigator>
    );
  };

  return (
    <NavigationContainer>
      {isLoggedIn ? renderAuthenticatedStack() : renderLoginStatck()}
    </NavigationContainer>
  );
};

export default Routes;
