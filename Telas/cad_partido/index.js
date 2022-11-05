import { useState, useEffect } from 'react';
import styles from './styles';
import {
    Alert, Text, TextInput, TouchableOpacity,
    View, Keyboard, ScrollView
  } from 'react-native';
  import { adicionaPartido, alteraPartido, excluiPartido, obtemPartidos } from '../../services/api_partido';
  import CardPartido from '../../componentes/card_partido';

export default function Cad_Partido({ navigation }) {

  const [id, setId] = useState();
  const [partidos, setPartidos] = useState([]);
  const [descricao, setDescricao] = useState();

  async function processamentoUseEffect() {
      await carregaDados();
  }


  useEffect(
      () => {
          console.log('executando useffect');
          processamentoUseEffect();
      }, []);



  function carregaDados() {
    try {
      obtemPartidos().then((response) => response.json())
      .then((resposta) => {
        console.log(resposta)
        let auxPartidos = resposta.partidos;
        setPartidos(auxPartidos);
      })
    } catch (e) {
      console.log(e.toString());
      Alert.alert(e.toString());
    }
  }

  async function salvaDados() {
    try {

      let obj = {
        nome: descricao
      }
      let resposta = (await adicionaPartido(obj));

          if (resposta)
            Alert.alert('adicionado com sucesso!');
          else
            Alert.alert('Falhou, sorry!');

    } catch (e) {
      console.log(e.toString());
      Alert.alert(e.toString());
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
                <Text style={styles.titulo}>Cadastro de Partidos</Text>
            </View>
            <View>
                <Text style={styles.lblCadastro}>Insira o nome do partido</Text>
                <TextInput style={styles.campoCadastro}
                    onChangeText={(texto) => setDescricao(texto)}
                    value={descricao}>
                </TextInput>
            </View>
            <TouchableOpacity style={styles.button} onPress={() => salvaDados()}>
                <Text style={styles.textButton}>Cadastrar</Text>
            </TouchableOpacity>

            <ScrollView style={styles.listaProdutos}>
            {
                partidos.map((partido, index) => (
                  <CardCandidato partido={partido} key={index.toString()}
                      removerElemento={removerElemento} editar={editar} />
              ))
            }
            </ScrollView>
        </View>
    )
}