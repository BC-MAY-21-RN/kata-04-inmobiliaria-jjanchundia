/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
/* eslint-disable semi */
/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ListItem = (item) => {
    console.log(item.dataCards.item)
    const {Nombre, image, Direccion, NumeroHabitaciones,
        Superficie, CostoRenta, Calificacion, banios } = item.dataCards.item;
        console.log(banios);
  return (
    <View style={styles.container}>
          <View>
            <Image style={styles.imagen} source={{uri:image}} />
            <View style={styles.calificacion}>
              <Text style={styles.text}>
                {/* <Icon name="rocket" size={18} color="#900" /> */}
                {/* <Icon name="close" size={30} color="#ffffff" /> */}
                {Calificacion}
              </Text>
              </View>
            </View>
          <View>
            <Text style={styles.nombre}>{Nombre}</Text>
            <Text style={styles.direccion}>{Direccion}</Text>
            <Text style={styles.nhabitaciones}>{NumeroHabitaciones}</Text>
            <Text style={styles.superficie}>{Superficie}</Text>
            <Text style={styles.banio}>{banios}</Text>
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
    backgroundColor: '#F5FDFF',//'#E5E5E5',
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
  nhabitaciones:{
    fontSize: 15,
    alignItems: 'center',
    top:25,
    left:50,
    fontWeight: 'bold',
  },
  banio:{
    fontSize: 15,
    alignItems: 'center',
    bottom:16,
    left:110,
    fontWeight: 'bold',
  },
  superficie:{
    fontSize: 15,
    alignItems: 'center',
    top:4,
    left:175,
    fontWeight: 'bold',
  },
  costo:{
    fontSize: 20,
    alignItems: 'center',
    bottom:10,
    left:15,
    fontWeight: 'bold',
  },
  calificacion:{
    left:30,
    bottom:30,
    fontSize:15,
    width: 65,
    borderRadius:20,
    alignItems:'center',
    backgroundColor:'#FBEDB7',
  },
  text:{
    fontWeight: 'bold',
    fontSize:15,
  },
});

export default ListItem;