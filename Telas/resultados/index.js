import { react, useState, useEffect, useCallback } from 'react';
import styles from './styles';


import {
    Alert, Text, TextInput, TouchableOpacity,
    View, Keyboard, ScrollView, Image
} from 'react-native';

import DropDownPicker from 'react-native-dropdown-picker';
import CardResultados from '../../componentes/card_resultados';



export default function Resutados({ navigation }) {

    //A tela de resultados será composta de accordeons, eles se eoncontram disponíveis na pasta de componentes
    
    /* TODO Colocar no return quando estiver pronto!!! 

    <ScrollView style={styles.listaResultado}>
            <Text style={{marginTop: 25}}></Text>
            {
                resultado.map((resultado, index) => (
                    <CardResultados resultado={resultado} key={index.toString()}
                        />
                ))
            }
            </ScrollView>
    */
    
    return (
        <View style={styles.container}>
            <View style={styles.areaBtnVoltar}>
                <TouchableOpacity style={styles.btnVoltar} onPress={
                    () => navigation.navigate('Home')
                }>
                    <Text style={styles.textBtnVoltar}> Voltar </Text>
                </TouchableOpacity>
                <Text style={styles.titulo}>Resultados</Text>
            </View>
        </View>
    )
}