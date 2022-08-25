import { useRef, useState } from "react";

enum Operadores {
  suma, resta, multiplicar, dividir
}

export const useCalculadora = () => {
  const [numeroAnterior, setNumeroAnterior] = useState('0')
  const [numero, setNumero] = useState('0')

  const ultimaOperacion = useRef<Operadores>()

  const limpiar = () => {
    setNumero('0');
    setNumeroAnterior('0')
  }

  const armarNumero = ( numTexto: string ) => {

    // no aceptar doble punto
    if(numero.includes('.') && numTexto === '.') return;

    //
    if(numero.startsWith('0') || numero.startsWith('-0')){

      // punto decimal
      if(numTexto === '.'){
        setNumero(numero + numTexto)

        // evaluar si es otro 0 y hay un punto
      }else if(numTexto === '0' && numero.includes('.')){
        setNumero(numero + numTexto)

        // evaluar si es diferente de 0 y no tiene un punto
      }else if( numTexto !== '0' && !numero.includes('.') ){
        setNumero(numTexto)
        // evitar el 0000000.00
      }else if( numTexto === '0' && !numero.includes('.') ){
        setNumero(numero)
      }else{
        setNumero(numero + numTexto)
      }
      

    }else{
      setNumero( numero +  numTexto)
    }


  }

  const positivoNegativo = () => {
    if(numero.includes('-')){
      setNumero(numero.replace('-', ''))
    }else{
      setNumero('-' + numero)
    }
  }

  const borrarDigito = () => {
    let negativo = '';
    let numeroTemp = numero;

    if(numero.includes('-')){
      negativo = '-',
      numeroTemp = numero.substring(1)
    }

    if(numeroTemp.length > 1){
      setNumero(negativo + numeroTemp.slice(0, -1))
    }else{
      setNumero('0')
    }
  }

  const cambiarNumeroPorAnterior = () => {
    if(numero.endsWith('.')){
      setNumeroAnterior(numero.slice(0,-1));
    }else{
      setNumeroAnterior(numero);
    }
    setNumero('0')
  }

  const btnDividir = () => {
    cambiarNumeroPorAnterior();
    ultimaOperacion.current = Operadores.dividir
  }

  const btnMultiplicar = () => {
    cambiarNumeroPorAnterior();
    ultimaOperacion.current = Operadores.multiplicar
  }

  const btnRestar = () => {
    cambiarNumeroPorAnterior();
    ultimaOperacion.current = Operadores.resta
  }

  const btnSumar = () => {
    cambiarNumeroPorAnterior();
    ultimaOperacion.current = Operadores.suma
  }

  const calcular = () => {
    const num1 = Number(numero);
    const num2= Number(numeroAnterior);

    switch (ultimaOperacion.current) {
      case Operadores.suma:
        setNumero( `${num1 + num2}` ); 
        break;

      case Operadores.resta:
        setNumero( `${num2 - num1}` ); 
        break;

      case Operadores.multiplicar:
        setNumero( `${num1 * num2}` ); 
        break;

      case Operadores.dividir:
        setNumero( `${num2 / num1}` ); 
        break;

    }

    setNumeroAnterior('0')
  }

  return {
    numero,
    numeroAnterior,
    limpiar,
    armarNumero,
    positivoNegativo,
    borrarDigito,
    cambiarNumeroPorAnterior,
    btnDividir,
    btnMultiplicar,
    btnRestar,
    btnSumar,
    calcular,
  }
}
