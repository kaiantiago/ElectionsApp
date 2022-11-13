import {
    Text, TouchableOpacity, View, Image, Alert
} from 'react-native';
import { useState, useEffect } from 'react';
import styles from './styles';
import { Ionicons, Entypo } from '@expo/vector-icons';
import { Collapse, CollapseHeader, CollapseBody, AccordionList } from 'accordion-collapse-react-native';
import { obtemCandidatos } from '../../services/api_candidato';
//import { Thumbnail, List, ListItem, Separator } from 'native-base';

export default function CardResultado({ canditatosVotos, titulo }) {
    
    //const [candidatos, setCandidatos] = useState([]);
    const [topCand, setTopCand] = useState([]);
    const [empate, setEmpate] = useState(true);
    useEffect(
        () => {
            console.log('executando useffect');
            carregaDados();

        }, [canditatosVotos]);

    function carregaDados() {
        try {
            console.log(canditatosVotos.length);
            var votosSort = canditatosVotos.sort(function(c1, c2){return c2.votos-c1.votos})
            if(votosSort.length==0){
                //console.log(votosSort)
                console.log('no vote here:'+titulo)
                return;
            }
            
            var maior = votosSort[0].votos;
            //var top = canditatosVotos.filter(vt => vt.votos == maior)
            var top = votosSort.slice(0, 3)
            setEmpate(top.length==0)
            if(top.length>=2){
                var vencedor = canditatosVotos.filter(vt => vt.votos == maior)
                console.log("wins:" +vencedor.length)
                if(vencedor.length!=1){
                    setEmpate(true)
                }
            }

            setTopCand(top);
            console.log('some votes here:'+titulo)
        } catch (e) {
            console.log(e.toString());
            Alert.alert(e.toString());
        }
    }
    
    return (
        <View style={{ width: '100%'}}>
            <Collapse style={{ width: '100%' }}>
                <CollapseHeader>
                    <View style={styles.contato}>
                        <Text style={styles.txtBloco}>Votos para {titulo}</Text>
                        <Text style={{ marginLeft: 10 }}></Text>
                        <Text style={{ marginLeft: 10, fontWeight: 'bold' }}>{empate?"Empate":`Vencedor:${topCand[0].nome}`}</Text>
                    </View>
                </CollapseHeader>
                <CollapseBody >
                    {topCand.map((prod, index) => (
                        <View key={index.toString()} style={styles.bodyCollapse}>
                            <Text style={{ marginLeft: 15 }}>{prod.nome}</Text>
                            <Text style={{ marginLeft: 15 }}>Nº: {prod.numero}</Text>
                            <Text style={{ marginLeft: 15 }}>Votos: {prod.votos}</Text>
                        </View>
                    ))}
                </CollapseBody>
            </Collapse>
        </View>
    );
}

/** 
             */