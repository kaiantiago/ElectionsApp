import { react } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import styles from './styles';

export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Eleições App</Text>
            <View style={styles.areaMenu}>
                <View style={styles.areaLogo}>
                </View>

                <TouchableOpacity style={styles.button} onPress={
                    () => navigation.navigate('Cad_Partido')
                }>
                    <Text style={styles.textButton}>Cadastrar Partido</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={
                    () => navigation.navigate('Cad_Candidato')
                }>
                    <Text style={styles.textButton}>Cadastrar Candidato</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={
                    () => navigation.navigate('Votacao')
                }>
                    <Text style={styles.textButton}>Votar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={
                    () => navigation.navigate('Resultados')
                }>
                    <Text style={styles.textButton}>Ver resultados</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={
                    () => navigation.navigate('Configurar')
                }>
                    <Text style={styles.textButton}>Configurações</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}