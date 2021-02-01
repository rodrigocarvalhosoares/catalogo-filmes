import React, { useState } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import FlatComponent from './../components/FlatComponent';

const Tela1 = () => {
  const data = [
    { key: '0', filme: 'SCOOBY! O Filme', ano: 2020, estilo: 'Comédia', direcao: 'Tony Cervone', image: 'https://f.i.uol.com.br/fotografia/2020/08/04/15965590885f298ef0cb5d3_1596559088_3x2_md.jpg'},
    { key: '1', filme: 'Doce Entardecer na Toscana', ano: 2021, estilo: 'Drama', direcao: 'Jacek Borcuch', image: 'https://assets.caixabelasartes.com.br/wp-content/uploads/2020/03/cartaz-doce-entardecer.jpg' }
  ]

  return(
    <View>
      <FlatList data={data} renderItem={({item}) => <FlatComponent data={item} />} />
    </View>
  )
}

export default Tela1;