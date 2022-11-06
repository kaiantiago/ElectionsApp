import {
    Text, TouchableOpacity, View, Image, Alert
} from 'react-native';
import { useState, useEffect } from 'react';
import styles from './styles';
import { Ionicons, Entypo } from '@expo/vector-icons';
import { Collapse, CollapseHeader, CollapseBody, AccordionList } from 'accordion-collapse-react-native';
import { obtemCandidatos } from '../../services/api_candidato';
//import { Thumbnail, List, ListItem, Separator } from 'native-base';

export default function CardResultado({ votos, titulo }) {
    
    //const [candidatos, setCandidatos] = useState([]);
    const [topCand, setTopCand] = useState([]);

    useEffect(
        () => {
            console.log('executando useffect');
            carregaDados();
        }, []);

    function carregaDados() {
        try {
            var votosSort = votos.sort(function(c1, c2){return c1.votos-c2.votos})
            if(votosSort.length==0){
                //console.log(votosSort)
                console.log('no vote here')
                return;
            }
            
            var maior = votosSort[0].votos;
            var top = votos.filter(vt => vt.votos == maior)
            setTopCand(top);
            console.log('some votes here')
        } catch (e) {
            console.log(e.toString());
            Alert.alert(e.toString());
        }
    }
    
    return (
        <View style={{ width: '100%', flex:1 }}>
            <Collapse style={{ width: '100%' }}>
                <CollapseHeader>
                    <View style={styles.contato}>
                        <Text style={styles.txtBloco}>Votos para {titulo}</Text>
                        <Text style={{ marginLeft: 10 }}>Azul</Text>
                        <Text style={{ marginLeft: 10, fontWeight: 'bold' }}>Teste</Text>
                    </View>
                </CollapseHeader>
                <CollapseBody >
                    {topCand.map((prod, index) => (
                        <View key={index.toString()} style={styles.bodyCollapse}>
                            <Text style={{ marginLeft: 15 }}>{prod.nome}</Text>
                            <Text style={{ marginLeft: 15 }}>{prod.numero}</Text>
                            <Text style={{ marginLeft: 15 }}>{prod.votos}</Text>
                        </View>
                    ))}
                </CollapseBody>
            </Collapse>
            
        </View>
    );
}

/*  */