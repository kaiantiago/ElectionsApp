import { useState } from 'react';
import { Text, View, TouchableOpacity, Image, ScrollView, Alert } from 'react-native';
import styles from './styles';

export default function ImagemSelect({ navigation, onImgSelect}) {

    const [imgs, setImgs] = useState([11, 12, 13, 16, 17, 23, 26, 32, 35, 36, 51, 57, 59, 63, 68]);

    return (
        <View style={styles.container}>
            <View style={styles.areaBtnVoltar}>
                <Text style={styles.titulo}>Toque em uma imagem para selecionar</Text>
            </View>
            <View>
                <ScrollView>
                    {imgs.map((img, index) => (
                        <TouchableOpacity key={index.toString()}  
                        onPress={() => {
                            onImgSelect(img)
                        }}><Image
                            style={styles.areaLogo}
                            source={{ uri: `https://i.pravatar.cc/400?img=${img}` }}
                        /></TouchableOpacity>
                    ))}
                </ScrollView>
            </View>
        </View>
    )
}

/* <TouchableOpacity onPress={() => {
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
                    /></TouchableOpacity> */