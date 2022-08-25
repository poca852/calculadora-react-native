import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

interface Props {
  texto: string;
  color?: string;
  ancho?: boolean;
  accion: (accion: string) => void;
}

export const BotomCal = ({ texto, color = '#2d2d2d', ancho = false, accion }: Props) => {
  return (
    <TouchableOpacity
      onPress={() => accion(texto)}
    >
      <View
        style={{
          ...styles.botom,
          backgroundColor: color,
          width: (ancho) ? 180 : 80
        }}
      >
        <Text style={{
          ...styles.botomTexto,
          color: (color === '#9b9b9b') ? 'black' : 'white'
        }}>{texto}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  botom: {
    height: 80,
    width: 80,
    backgroundColor: '#2d2d2d',
    borderRadius: 100,
    marginHorizontal: 10,
    justifyContent: 'center'
  },

  botomTexto: {
    textAlign: 'center',
    padding: 10,
    fontSize: 30,
    color: 'white',
    fontWeight: '300'
  }
});