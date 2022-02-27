/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, StatusBar, FlatList, StyleSheet } from 'react-native';
import dataCards from '../utils/Data';
import InmobiliariaC from './Inmobiliaria';

const InformacionView = () => {
    console.log(dataCards.map(x=>x.Nombre));
    return (
        <View style={styles.container}>
          <Text>TEST2</Text>
            <FlatList
                data={dataCards}
                keyExtractor={(item) => item.id}
                renderItem={(item)=>{
                  return (<InmobiliariaC dataCards = {item}/>);
                }}
            />
        </View>
    );

};


const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
      width: '100%',
      height: '100%',
    },
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },
  });

export default InformacionView;
