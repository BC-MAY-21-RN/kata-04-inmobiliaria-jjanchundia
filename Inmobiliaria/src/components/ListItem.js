/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
/* eslint-disable semi */
/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

const ListItem = (item) => {
    console.log(item.dataCards.item)
    const {Nombre, image, Direccion, NumeroHabitaciones,
        Superficie, CostoRenta, Calificacion, Icono} = item.dataCards.item;
        console.log(image);
  return (
    <View style={styles.container}>
          <View>
            <Image style={styles.imagen} source={{uri:image}} />
              <Text style={styles.calificacion}>{Calificacion}</Text>
            </View>
          <View>
            <Text style={styles.nombre}>{Nombre}</Text>
            <Text style={styles.direccion}>{Direccion}</Text>
            <Text style={styles.direccion}>{Direccion}</Text>
            <Text style={styles.costo}>{CostoRenta}</Text>
          </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'row',
    marginTop: 20,
    marginLeft:20,
    marginBottom:10,
    borderRadius:20,
    width: '90%',
    backgroundColor: '#E5E5E5',
  },
  imagen: {
    width: 100,
    height: 120,
    marginLeft:15,
    marginTop: 10,
    borderRadius:20,
  },
  nombre: {
    left: 20,
    alignItems: 'center',
    // bottom: 30,
    top: 10,
    fontWeight: 'bold',
    fontSize: 29,
  },
  direccion: {
    fontSize: 15,
    alignItems: 'center',
    top:15,
    left:20,
  },
  habiSupCosto:{
  },
  costo:{
    fontSize: 20,
    alignItems: 'center',
    top: 15,
    left:15,
    fontWeight: 'bold',
  },
  calificacion:{
    left:60,
    bottom:30,
    fontSize:15,
    width: 28,
    borderRadius:20,
    alignItems:'center',
    fontWeight: 'bold',
    backgroundColor:'#FBEDB7',
  },
});

export default ListItem;