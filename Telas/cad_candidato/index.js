import { react } from 'react';
import styles from './styles';
import {
    Alert, Text, TextInput, TouchableOpacity,
    View, Keyboard, ScrollView, Image
} from 'react-native';
import { useState, useEffect } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';

export default function Cad_Candidato({ navigation }) {


    
    const [id, setId] = useState(undefined);
    const [descricao, setDescricao] = useState("");
    const [precoUn, setPrecoUn] = useState("");
    const [idCat, setIdCat] = useState("");
    const [produtos, setProdutos] = useState([]);
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [categorias, setCategorias] = useState([])

    let tabelasCriadas = false;

    DropDownPicker.addTranslation("PT", {
        PLACEHOLDER: "Selecione um item",
        SEARCH_PLACEHOLDER: "Clique em qualquer item",
        NOTHING_TO_SHOW: "Hmm, parece que não há itens"
    });

    DropDownPicker.setLanguage("PT");

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
            Produto.listaProdutos().then((resposta) => {

                let produts = resposta;
                setProdutos(produts);
            })
            Categoria.listaCategorias().then((resposta) => {
                let categs = [];
                console.log(resposta);
                resposta.forEach(element => {
                    categs.push({ label: element.descricao, value: element.idC })
                });
                console.log(categs);
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
            id: id,
            descricao: descricao,
            precoUn: precoUn,
            idCat: value
        };

        
        if(descricao==""||precoUn==""){
            Alert.alert("Preecha os campos");
            return;
        }

        try {

            if (novoRegistro) {
                let resposta = (await Produto.adicionaProduto(obj));

                if (resposta)
                    Alert.alert('adicionado com sucesso!');
                else
                    Alert.alert('Falhou, sorry!');
            }
            else {
                let resposta = await Produto.alteraProduto(obj);
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
        setIdCat("");
        setPrecoUn("");
        setId(undefined);
        setValue(null);
        setOpen(false);
        Keyboard.dismiss();
    }

    function editar(identificador) {
        const produto = produtos.find(produto => produto.id == identificador);

        if (produto != undefined) {
            setId(produto.id);
            setDescricao(produto.descricao);
            setPrecoUn(produto.precoUn.toString());
            setIdCat(produto.idCat);
            setValue(produto.idCat);
        }

        console.log(produto);
    }

    function removerElemento(identificador) {
        Alert.alert('Atenção', 'Confirma a remoção do produto?',
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
            await Produto.excluiProduto(identificador);
            Keyboard.dismiss();
            limparCampos();
            await carregaDados();
            Alert.alert('Produto apagado com sucesso!!!');
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
                <Text style={styles.titulo}>Cadastro de Candidato</Text>
            </View>

            <View style={styles.areaDados}>
                <View style={styles.areaDescricao}>
                    <Text style={styles.nome}>Nome</Text>
                    <TextInput style={styles.caixaTexto}/>
                </View>
            </View>

            <View>
                <Text style={styles.lblDropdown}>Selecione o partido</Text>
            </View>

            <View>
                <Text style={styles.lblDropdown}>Selecione o cargo</Text>
            </View>

            <View style={styles.areaDescricao2}>
                <Text style={styles.lblDropdown}>Selecione o estado</Text>
                <DropDownPicker></DropDownPicker>
            </View>

            <View style={styles.areaDados}>
                <View style={styles.areaDescricao2}>
                    <Text style={styles.nome}>Número do Candidato</Text>
                    <TextInput style={styles.caixaTexto2} keyboardType="numeric"/>
                </View>
            </View>

            <TouchableOpacity style={styles.button} onPress={()=>{}}>
                <Text style={styles.textButton}>Cadastrar</Text>
            </TouchableOpacity>
        </View>
    )
}