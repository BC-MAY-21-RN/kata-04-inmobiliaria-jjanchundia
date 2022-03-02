/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import { SafeAreaView } from 'react-native';
 import Cards from './src/components/Cards.js';

const App = () => {
  return (
    <SafeAreaView>
        <Cards/>
    </SafeAreaView>
  );
};

export default App;
