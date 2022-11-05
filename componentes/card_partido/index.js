import {
    Text,TouchableOpacity, View, Image
} from 'react-native';

import styles from './styles';
import { Ionicons, Entypo } from '@expo/vector-icons';


export default function CardPartido({partido, removerElemento, editar}) {
   return (
       <View style={styles.contato} >

           <Text style={styles.listaNome}> {partido.nome}</Text>
           <View style={styles.dadosBotoesAcao}>
               <TouchableOpacity onPress={() => removerElemento(partido._id)}>
                   <Ionicons name="md-remove-circle" size={32} color="red" />
               </TouchableOpacity>

               <TouchableOpacity onPress={() => editar(partido._id)}>
                   <Entypo name="edit" size={32} color="black" />
               </TouchableOpacity>
           </View>
       </View>
   );

};