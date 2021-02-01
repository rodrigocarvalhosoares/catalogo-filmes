import React from 'react';
import { View, Text, TouchableOpacity, Button, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const FlatComponent = ({data}) => {

  const navigation = useNavigation();

  const navegar = () => {
    navigation.navigate('Tela2', { data: data })
  }

  return (
    <TouchableOpacity style={styles.container} onPress={navegar}>
      <Image resizeMode="contain" source={{ uri: data.image }} style={{ width: 100, height: 100}} />
      <Text>{data.filme}</Text>
      <Text>{data.ano}</Text>
      <Text>{data.estilo}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#cacaca',
    marginBottom: 5,
    flexDirection: 'row'
  },
  subcontainer: {
    marginLeft: 10
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold'
  },
});

export default FlatComponent;