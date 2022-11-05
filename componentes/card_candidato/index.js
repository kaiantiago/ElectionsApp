import {
    Text,TouchableOpacity, View, Image
} from 'react-native';

import styles from './styles';
import { Ionicons, Entypo } from '@expo/vector-icons';


export default function CardCandidato({candidato, removerElemento, editar}) {
   return (
       <View style={styles.contato} >

           <Text style={styles.listaNome}> {candidato.nome}</Text>
           <Text style={styles.txtPreco}>{candidato.numero}</Text>
           <View style={styles.dadosBotoesAcao}>
               <TouchableOpacity onPress={() => removerElemento(candidato._id)}>
                   <Ionicons name="md-remove-circle" size={32} color="red" />
               </TouchableOpacity>

               <TouchableOpacity onPress={() => editar(candidato._id)}>
                   <Entypo name="edit" size={32} color="black" />
               </TouchableOpacity>
           </View>
       </View>
   );

};