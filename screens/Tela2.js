import React, { useState } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';
import StarRating from 'react-native-star-rating';

const Tela2 = () => {

  const route = useRoute();
  const data = route.params.data;

  const navegar = () => {
    navigation.navigate('Tela1')
  }

  return(
    <View style={{ flex: 1, alignItems: 'center' }}>
      <Image resizeMode="contain" source={{ uri: data.image}} style={{width: 150, height: 300}}/>
      <Text style={styles.description}>NOTA:</Text>
      <StarRating
        disabled={false}
        maxStars={5}
        rating={3}
      />
      <Text style={styles.description}>FILME: {data.filme}</Text>
      <Text style={styles.description}>ANO: {data.ano}</Text>
      <Text style={styles.description}>ESTILO: {data.estilo}</Text>
      <Text style={styles.description}>DESCRIÇÃO: {data.descricao}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  description: {
    fontSize: 18
  }
});

export default Tela2;