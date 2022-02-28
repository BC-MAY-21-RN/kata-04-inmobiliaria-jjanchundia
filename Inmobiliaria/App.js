/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import { SafeAreaView, StyleSheet, Platform, Text, ScrollView } from 'react-native';
 import Cards from './src/components/Cards.js';

const App = () => {

  return (
    <SafeAreaView>
      <ScrollView>
        <Cards/>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    //backgroundColor: colors.BG, 
    flex:1,
    // marginTop: Platform.OS === 'ios' ? 50:0,
    
  },
});
export default App;
