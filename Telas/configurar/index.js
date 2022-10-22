import { react, useState, useEffect, useCallback } from 'react';
import styles from './styles';

import {
    Alert, Text, TextInput, TouchableOpacity,
    View, Keyboard, ScrollView, Image
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';



export default function Configurar({ navigation }) {

    return (
        <View style={styles.container}>
            <View style={styles.areaBtnVoltar}>
                <TouchableOpacity style={styles.btnVoltar} onPress={
                    () => navigation.navigate('Home')
                }>
                    <Text style={styles.textBtnVoltar}> Voltar </Text>
                </TouchableOpacity>
                <Text style={styles.titulo}>Configurações</Text>
            </View>
            <View style={styles.areaMenu}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.textButton}>Apagar todos os votos</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.textButton}>Apagar todos os candidatos</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.textButton}>Apagar todos os partidos</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}