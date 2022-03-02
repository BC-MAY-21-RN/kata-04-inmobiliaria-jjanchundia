/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
/* eslint-disable semi */
/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ListItem = (item) => {
    const {Nombre, image, Direccion, NumeroHabitaciones,
        Superficie, CostoRenta, Calificacion, banios } = item.dataCards.item;
  return (
    <View style={styles.container}>
          <View>
            <Image style={styles.imagen} source={{uri:image}} />
            <View style={styles.calificacion}>
                <Text style={styles.text}>
                  <Icon name="star" size={20} color="#EEBA00" />
                  {Calificacion}
                </Text>
              </View>
          </View>
          <View>
          <View>
            <Text style={styles.nombre}>{Nombre}</Text>
          </View>
          <View>
            <Text style={styles.direccion}>
              <Icon style={styles.direccionV} name="location-arrow" size={20} color="#000000" />
              &nbsp;&nbsp;{Direccion}
            </Text>
          </View>
          <View>
            <Text style={styles.nhabitaciones}>
            <Icon name="bed" size={20} color="#000000" />
              &nbsp;&nbsp;{NumeroHabitaciones}
            </Text>
          </View>
          <View>
            <Text style={styles.banio}>
              <Icon name="bath" size={20} color="#000000" />
              &nbsp;&nbsp;{banios}
            </Text>
          </View>
          <View>
            <Text style={styles.superficie}>
              <Icon name="window-maximize" size={20} color="#000000" />
              &nbsp;&nbsp;{Superficie}
              </Text>
          </View>
          <View>
            <Text style={styles.costo}>
              {CostoRenta}
            </Text>
            <Icon style={styles.heart} name="heart" size={20} color="#000000" />
          </View>
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
    height: 138,
    marginLeft:15,
    marginTop: 10,
    borderRadius:20,
  },
  nombre: {
    left: 20,
    alignItems: 'center',
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
    left:20,
    fontWeight: 'bold',
  },
  banio:{
    fontSize: 15,
    alignItems: 'center',
    top:3,
    left:88,
    fontWeight: 'bold',
  },
  superficie:{
    fontSize: 15,
    alignItems: 'center',
    bottom:18,
    left:145,
    fontWeight: 'bold',
  },
  icono:{
    fontSize: 15,
    top:10,
    left:100,
  },
  costo:{
    fontSize: 20,
    alignItems: 'center',
    bottom:4,
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
  heart:{
    bottom:28,
    left:200,
  },
});

export default ListItem;