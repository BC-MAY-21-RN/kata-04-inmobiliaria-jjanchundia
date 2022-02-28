/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import React from 'react';
import { View, TextInput, Text } from 'react-native';
import Informacion from './InformacionView';
import data from '../utils/Data';

const Cards = () => {

    console.log(data);

    return (
        <View>
            <Informacion/>
        </View>
    )
}

// const styles = StyleSheet.create({
//     inputSearch: {
    
//       height: '5%',
//       justifyContent: 'center',
//       alignItems: 'center',
//       //marginHorizontal: 40, 
//       marginVertical: 30,
//     }, 
//     textSearch: {
//         color: '#ffffff',
//         flex: 1,
//         paddingVertical: 8,
//         borderRadius: 5,
//         paddingLeft: 10,

//     },
//     completeSearchBar: {
//         width: '80%',
//         flexDirection: 'row',
//         justifyContent: 'center',
//         alignItems: 'center',
//         // backgroundColor: colors.BG_SB,
//         borderRadius: 8,
//         paddingHorizontal: 15,
//     }
//   })
// eslint-disable-next-line eol-last
export default Cards;