/* eslint-disable prettier/prettier */
import React from 'react';
import { View, FlatList } from 'react-native';
import dataCards from '../utils/Data';
import ListItem from './ListItem';

const InformacionView = () => {
    return (
        <View>
            <FlatList
                data={dataCards}
                keyExtractor={(item) => item.id}
                renderItem={(item)=>{
                  return (<ListItem dataCards = {item}/>);
                }}
            />
        </View>
    );
};

export default InformacionView;
