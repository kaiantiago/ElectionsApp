import { react } from 'react';
import { Text, View, TouchableOpacity, Image, ScrollView, Alert } from 'react-native';
import styles from './styles';

export default function ImagemSelect({ navigation}) {
    return (
        <View style={styles.container}>
            <View style={styles.areaBtnVoltar}>
                <TouchableOpacity style={styles.btnVoltar} onPress={
                    () => navigation.navigate('Cad_Candidato')
                }>
                    <Text style={styles.textBtnVoltar}> Voltar </Text>
                </TouchableOpacity>
                <Text style={styles.titulo}>Selecionar Imagem</Text>
            </View>
            <View>
                <ScrollView>
                    <TouchableOpacity onPress={() => {
                        goBack()
                    }}><Image
                        style={styles.areaLogo}
                        source={{ uri: 'https://i.pravatar.cc/400?img=68' }}
                    /></TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        Alert.alert('Vc clicou na imagem');
                    }}><Image
                        style={styles.areaLogo}
                        source={{ uri: 'https://i.pravatar.cc/400?img=63' }}
                    /></TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        Alert.alert('Vc clicou na imagem');
                    }}><Image
                        style={styles.areaLogo}
                        source={{ uri: 'https://i.pravatar.cc/400?img=59' }}
                    /></TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        Alert.alert('Vc clicou na imagem');
                    }}><Image
                        style={styles.areaLogo}
                        source={{ uri: 'https://i.pravatar.cc/400?img=57' }}
                    /></TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        Alert.alert('Vc clicou na imagem');
                    }}><Image
                        style={styles.areaLogo}
                        source={{ uri: 'https://i.pravatar.cc/400?img=51' }}
                    /></TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        Alert.alert('Vc clicou na imagem');
                    }}><Image
                        style={styles.areaLogo}
                        source={{ uri: 'https://i.pravatar.cc/400?img=36' }}
                    /></TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        Alert.alert('Vc clicou na imagem');
                    }}><Image
                        style={styles.areaLogo}
                        source={{ uri: 'https://i.pravatar.cc/400?img=35' }}
                    /></TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        Alert.alert('Vc clicou na imagem');
                    }}><Image
                        style={styles.areaLogo}
                        source={{ uri: 'https://i.pravatar.cc/400?img=32' }}
                    /></TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        Alert.alert('Vc clicou na imagem');
                    }}><Image
                        style={styles.areaLogo}
                        source={{ uri: 'https://i.pravatar.cc/400?img=26' }}
                    /></TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        Alert.alert('Vc clicou na imagem');
                    }}><Image
                        style={styles.areaLogo}
                        source={{ uri: 'https://i.pravatar.cc/400?img=23' }}
                    /></TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        Alert.alert('Vc clicou na imagem');
                    }}><Image
                        style={styles.areaLogo}
                        source={{ uri: 'https://i.pravatar.cc/400?img=17' }}
                    /></TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        Alert.alert('Vc clicou na imagem');
                    }}><Image
                        style={styles.areaLogo}
                        source={{ uri: 'https://i.pravatar.cc/400?img=16' }}
                    /></TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        Alert.alert('Vc clicou na imagem');
                    }}><Image
                        style={styles.areaLogo}
                        source={{ uri: 'https://i.pravatar.cc/400?img=13' }}
                    /></TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        Alert.alert('Vc clicou na imagem');
                    }}><Image
                        style={styles.areaLogo}
                        source={{ uri: 'https://i.pravatar.cc/400?img=12' }}
                    /></TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        Alert.alert('Vc clicou na imagem');
                    }}><Image
                        style={styles.areaLogo}
                        source={{ uri: 'https://i.pravatar.cc/400?img=11' }}
                    /></TouchableOpacity>
                </ScrollView>
            </View>
        </View>
    )
}