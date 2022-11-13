import { react, useState, useEffect, useCallback } from 'react';
import styles from './styles';

import {
    Alert, Text, TextInput, TouchableOpacity,
    View, Keyboard, ScrollView, Image
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { excluiTodosVotos } from '../../services/api_votos';
import { excluiTodosCandidatos } from '../../services/api_candidato';
import { excluiTodosPartidos } from '../../services/api_partido';



export default function Configurar({ navigation }) {

    function removerVotos() {
        Alert.alert('Atenção', 'Confirma a remoção de todos os votos?',
            [
                {
                    text: 'Sim',
                    onPress: () => efetivaRemoverVoto(),
                },
                {
                    text: 'Não',
                    style: 'cancel',
                }
            ]);
    }

    function removerCandidatos() {
        Alert.alert('Atenção', 'Confirma a remoção de todos os candidatos e votos?',
            [
                {
                    text: 'Sim',
                    onPress: () => efetivaRemoverCandidato(),
                },
                {
                    text: 'Não',
                    style: 'cancel',
                }
            ]);
    }

    function removerPartidos() {
        Alert.alert('Atenção', 'Confirma a remoção de todos os partidos, candidatos e votos?',
            [
                {
                    text: 'Sim',
                    onPress: () => efetivaRemoverPartido(),
                },
                {
                    text: 'Não',
                    style: 'cancel',
                }
            ]);
    }

    async function efetivaRemoverVoto() {
        try {
            await excluiTodosVotos();
            Alert.alert('Apagados com sucesso!!!');
        } catch (e) {
            Alert.alert(e.message);
        }
    }

    async function efetivaRemoverCandidato() {
        try {
            await excluiTodosVotos();
            await excluiTodosCandidatos();
            Alert.alert('Apagados com sucesso!!!');
        } catch (e) {
            Alert.alert(e.message);
        }
    }

    async function efetivaRemoverPartido(identificador) {
        try {
            await excluiTodosVotos();
            await excluiTodosCandidatos();
            await excluiTodosPartidos();
            Alert.alert('Apagados com sucesso!!!');
        } catch (e) {
            Alert.alert(e.message);
        }
    }

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
                <TouchableOpacity style={styles.button}
                    onPress={() => removerVotos()}>
                    <Text style={styles.textButton}>Apagar todos os votos</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}
                    onPress={() => removerCandidatos()}>
                    <Text style={styles.textButton}>Apagar todos os candidatos</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}
                    onPress={() => removerPartidos()}>
                    <Text style={styles.textButton}>Apagar todos os partidos</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}