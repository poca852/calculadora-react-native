import React from 'react'
import { Text, View } from 'react-native';
import { BotomCal } from '../components/BotomCal';
import { styles } from '../theme/AppTheme';
import { useCalculadora } from '../hooks/useCalculadora';

export const CalculadoraScreen = () => {

  const { 
    numeroAnterior,
    numero,
    limpiar,
    positivoNegativo,
    borrarDigito,
    btnDividir,
    btnMultiplicar,
    btnRestar,
    btnSumar,
    armarNumero,
    calcular
   } = useCalculadora()

  return (
    <View style={styles.calculadoraContainer}>
      {
        ( numeroAnterior !== '0') && (
          <Text style={styles.resultadoSmall}>{ numeroAnterior }</Text>
        )
      }
      <Text 
        style={{
          ...styles.resultado
        }}
        numberOfLines={1}
        adjustsFontSizeToFit
        >{ numero }</Text>

      {/* fila de botones */}
      <View style={styles.fila}>
        <BotomCal texto="C" color='#9b9b9b' accion={limpiar} />
        <BotomCal texto="+/-" color='#9b9b9b' accion={positivoNegativo} />
        <BotomCal texto="del" color='#9b9b9b' accion={borrarDigito} />
        <BotomCal texto="/" color='#ff9427' accion={btnDividir} />        
      </View>

      {/* fila de botones */}
      <View style={styles.fila}>
        <BotomCal texto="7" accion={armarNumero} />
        <BotomCal texto="8" accion={armarNumero} />
        <BotomCal texto="9" accion={armarNumero} />
        <BotomCal texto="x" color='#ff9427' accion={btnMultiplicar} />        
      </View>

      {/* fila de botones */}
      <View style={styles.fila}>
        <BotomCal texto="4" accion={armarNumero} />
        <BotomCal texto="5" accion={armarNumero} />
        <BotomCal texto="6" accion={armarNumero} />
        <BotomCal texto="-" color='#ff9427' accion={btnRestar} />        
      </View>

      {/* fila de botones */}
      <View style={styles.fila}>
        <BotomCal texto="1" accion={armarNumero} />
        <BotomCal texto="2" accion={armarNumero} />
        <BotomCal texto="3" accion={armarNumero} />
        <BotomCal texto="+" color='#ff9427' accion={btnSumar} />        
      </View>

      {/* fila de botones */}
      <View style={styles.fila}>
        <BotomCal texto="0" ancho accion={armarNumero} />
        <BotomCal texto="." accion={armarNumero} />
        <BotomCal texto="=" color='#ff9427' accion={calcular} />        
      </View>
    </View>
  )
}

{/* colores */}
{/* gris ocscuro #2d2d2d, naranja #ff9427,  */}