/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import Routes from './src/routes';
import {Provider as PaperProvider} from 'react-native-paper';
import store from './src/redux/store';
import {Provider as StoreProvider} from 'react-redux';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <StoreProvider store={store}>
        <PaperProvider>
          <Routes />
        </PaperProvider>
      </StoreProvider>
    </SafeAreaView>
  );
};

export default App;
