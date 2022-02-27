/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
/* eslint-disable semi */
/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, View} from 'react-native';

const Inmobiliaria = (item) => {
    console.log(item.dataCards.item)
    const {Nombre, image, Direccion, NumeroHabitaciones,
        Superficie, CostoRenta, Calificacion, Icono} = item.dataCards.item;
  return (
      <View>
        <Text>{image}</Text>
        <Text>{Nombre}</Text>
    </View>
  )
}

export default Inmobiliaria;