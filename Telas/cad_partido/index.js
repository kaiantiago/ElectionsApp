import { useState, useEffect } from 'react';
import styles from './styles';
import {
    Alert, Text, TextInput, TouchableOpacity,
    View, Keyboard, ScrollView
  } from 'react-native';

export default function Cad_Partido({ navigation }) {

    const [id, setId] = useState();
    const [descricao, setDescricao] = useState();
    const [partidos, setPartidos] = useState([]);

    let tabelasCriadas = false;
  
    /*
    async function processamentoUseEffect() {
      if (!tabelasCriadas) {
        console.log("Verificando necessidade de criar tabelas...");
        tabelasCriadas = true;
        await createTables();
      }
  
      await carregaDados();
    }
  

    useEffect(
      () => {
        console.log('executando useffect');
        processamentoUseEffect();
    }, []);
  
    
    function carregaDados() {
        try {
          
        Categoria.listaCategorias().then((resposta) => {
            let categs = resposta;
            setCategorias(categs);
        })
        } catch (e) {
            console.log(e.toString());
            Alert.alert(e.toString());
        }
    }

    async function salvaDados() {
        let novoRegistro = id == undefined;
    
        let obj = {
          idC: id,
          descricao: descricao
        };
    
        try {
          if (novoRegistro) {
            let resposta = (await Categoria.adicionaCategoria(obj));
    
            if (resposta)
              Alert.alert('adicionado com sucesso!');
            else
              Alert.alert('Falhou, sorry!');
          }
          else {      
            let resposta = await Categoria.alteraCategoria(obj);
            if (resposta)
              Alert.alert('Alterado com sucesso!');
            else
              Alert.alert('Falhou, sorry!');
          }
          
          limparCampos();
          await carregaDados();
        } catch (e) {
          Alert.alert(e.message);
        }
      }
      
      
    async function limparCampos() {
        setDescricao("");
        setId(undefined);
        Keyboard.dismiss();
    }

    function editar(identificador) {
        const categ = categorias.find(categ => categ.idC == identificador);
    
        if (categ != undefined) {
          setId(categ.idC);
          setDescricao(categ.descricao);
        }
    
        console.log(categ);
    }

    function removerElemento(identificador) {
        Alert.alert('Atenção', 'Confirma a remoção da Categoria?',
          [
            {
              text: 'Sim',
              onPress: () => efetivaRemoverElemento(identificador),
            },
            {
              text: 'Não',
              style: 'cancel',
            }
          ]);
    }

    
    async function efetivaRemoverElemento(identificador) {
        try {
            await Categoria.excluiCategoria(identificador);
            Keyboard.dismiss();
            limparCampos();
            await carregaDados();
            Alert.alert('Categoria apagada com sucesso!!!');
        } catch (e) {
            Alert.alert(e.message);
        }
    }
*/

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
                //categorias.map((categoria, index) => (
                    //<CardCategoria categoria={categoria} key={index.toString()}
                        //removerElemento={removerElemento} editar={editar} />
                //))
            }
            </ScrollView>
        </View>
    )
}