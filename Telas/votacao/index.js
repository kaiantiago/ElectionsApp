import { react, useState, useEffect, useCallback } from 'react';
import styles from './styles';

import {
    Alert, Text, TextInput, TouchableOpacity,
    View, Keyboard, ScrollView, Image
} from 'react-native';

import DropDownPicker from 'react-native-dropdown-picker';



export default function Votacao({ navigation }) {

    DropDownPicker.setListMode("SCROLLVIEW");
    const [id, setId] = useState();
    const [cep, setCep] = useState();
    const [total, setTotal] = useState(0);
    const [qtd, setQtd] = useState("");
    const [idCat, setIdCat] = useState();
    const [todosProdutos, setTodosProdutos] = useState([]);
    const [precoUn, setPrecoUn] = useState(0);

    const [openP, setOpenP] = useState(false);
    const [valueP, setValueP] = useState(null);
    const [produtos, setProdutos] = useState([]);


    const [openC, setOpenC] = useState(false);
    const [valueC, setValueC] = useState(null);
    const [categorias, setCategorias] = useState([]);

    const [prodsCompra, setProdsCompra] = useState([]);

    let tabelasCriadas = false;

    /*
        var onP = useCallback(() => {
            setOpenC(false);
        }, []);
    
        var onC = useCallback(() => {
            setOpenP(false);
        }, []);
    
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
                    let categs = [];
                    //console.log(resposta);
                    resposta.forEach(element => {
                        categs.push({ label: element.descricao, value: element.idC })
                    });
                    //console.log(categs);
                    setCategorias(categs);
                })
            } catch (e) {
                console.log(e.toString());
                Alert.alert(e.toString());
            }
        }
    
        async function salvaDados() {
            let total = 0;
            //console.log(prodsCompra);
            prodsCompra.forEach(element => {
                total += element.precoUn * element.qtd;
            });
    
            let obj = {
                id: id,
                total: total,
                cep: cep
            };
    
            try {
    
                let resposta = (await Pedido.adicionaPedido(obj, prodsCompra));
    
                if (resposta)
                    Alert.alert('Compra realizada com sucesso!!!');
                else
                    Alert.alert('Falha na compra, sorry!');
    
                limparTodosCampos();
                await carregaDados();
            } catch (e) {
                Alert.alert(e.message);
            }
        }
    
    
        async function limparCampos() {
            setQtd("");
            setValueC(null);
            setValueP(null);
            setId(undefined);
            setOpenC(false);
            setOpenP(false);
            setProdutos([]);
            setTodosProdutos([]);
            setPrecoUn(0);
            Keyboard.dismiss();
        }
    
        async function limparTodosCampos() {
            setQtd("");
            setValueC(null);
            setValueP(null);
            setId(undefined);
            setOpenC(false);
            setOpenP(false);
            setProdutos([]);
            setProdsCompra([]);
            setTodosProdutos([]);
            setCep("");
            setPrecoUn(0);
            Keyboard.dismiss();
        }
    
        function add1Prod(identificador) {
            const prodCompra = prodsCompra.find(produto => produto.id == identificador);
            prodCompra.qtd -= 1;
            prodCompra.qtd += 2;
            setTotal(total + prodCompra.precoUn)
            carregaDados();
        }
    
        function sub1Prod(identificador) {
            const prodCompra = prodsCompra.find(produto => produto.id == identificador);
            prodCompra.qtd -= 1;
            if (prodCompra.qtd <= 0)
                removeItemOnce(prodsCompra, prodCompra);
            setTotal(total - prodCompra.precoUn)
            carregaDados();
        }
    
    
        function removeItemOnce(arr, value) {
            var index = arr.indexOf(value);
            if (index > -1) {
                arr.splice(index, 1);
            }
            setProdsCompra(arr);
        }
    
        function confirmaCompra() {
            Alert.alert('Atenção', 'Confirma realização da compra?',
                [
                    {
                        text: 'Sim',
                        onPress: () => salvaDados(),
                    },
                    {
                        text: 'Não',
                        style: 'cancel',
                    }
                ]);
        }
    
        function atualizaComboProds(idCateg) {
            try {
                Produto.listaProdutosFiltro(idCateg).then((resposta) => {
    
                    let produts = [];
                    //setTodosProdutos([]);
                    todosProdutos.length = 0;
                    resposta.forEach(element => {
                        todosProdutos.push(element);
                        produts.push({ label: element.descricao, value: element.id });
                    });
                    console.log(produts);
                    setProdutos(produts);
                    //setPrecoUn(0);
                })
            } catch (e) {
                console.log(e.toString());
                Alert.alert(e.toString());
            }
    
    
        }
    
        function addCarrinho() {
            const prodCompra = todosProdutos.find(produto => produto.id == valueP);
            if(prodCompra==null||qtd==""){
                Alert.alert("Preecha os campos");
                return;
            }
            let prod = {
                id: valueP,
                idCat: valueC,
                descricao: prodCompra.descricao,
                precoUn: prodCompra.precoUn,
                idProd: valueP,
                idPed: "",
                qtd: qtd
            }
            setTotal(total + prod.precoUn * prod.qtd)
            console.log(prod);
            prodsCompra.push(prod);
            limparCampos();
        }
    
        function atualizaPreco(idProd){
            const prodCompra = todosProdutos.find(produto => produto.id == idProd);
            if(prodCompra!=null)
                setPrecoUn(prodCompra.precoUn);
            //console.log(idProd);
        }
    */

    return (
        <View style={styles.container}>
            <ScrollView style={styles.scroll}>
                <View style={styles.areaBtnVoltar}>
                    <TouchableOpacity style={styles.btnVoltar} onPress={
                        () => navigation.navigate('Home')
                    }>
                        <Text style={styles.textBtnVoltar}> Voltar </Text>
                    </TouchableOpacity>
                    <Text style={styles.titulo}>Votação</Text>
                </View>

                <View>
                    <Text style={styles.lblFields}>Digite o número para governador</Text>
                    <TextInput style={styles.campoCadastro}></TextInput>
                </View>

                <View>
                    <Text style={styles.lblFields}>Digite o número para senador</Text>
                    <TextInput style={styles.campoCadastro}></TextInput>
                </View>

                <View>
                    <Text style={styles.lblFields}>Digite o número para presidente</Text>
                    <TextInput style={styles.campoCadastro}></TextInput>
                </View>
                <TouchableOpacity style={styles.button} onPress={() => { }}>
                    <Text style={styles.textButton}>Confirma</Text>
                </TouchableOpacity>
                <Text></Text>
            </ScrollView>
        </View>
    )
}