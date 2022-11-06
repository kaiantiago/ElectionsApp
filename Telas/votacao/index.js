import { react, useState, useEffect, useCallback } from 'react';
import styles from './styles';

import {
    Alert, Text, TextInput, TouchableOpacity,
    View, Keyboard, ScrollView, Image
} from 'react-native';

import DropDownPicker from 'react-native-dropdown-picker';
import { adicionaVoto } from '../../services/api_votos';
import { obtemCandidatos } from '../../services/api_candidato';



export default function Votacao({ navigation }) {

    DropDownPicker.addTranslation("PT", {
        PLACEHOLDER: "",
        SEARCH_PLACEHOLDER: "Clique em qualquer item",
        NOTHING_TO_SHOW: "Hmm, parece que não há itens"
    });

    DropDownPicker.setLanguage("PT");

    const [gov, setGov] = useState();
    const [sen, setSen] = useState();
    const [pres, setPres] = useState();

    const [govNum, setGovNum] = useState(0);
    const [senNum, setSenNum] = useState(0);
    const [presNum, setPresNum] = useState(0);

    const [estado, setEstado] = useState();
    const [tituloEleitor, setTituloEleitor] = useState("");
    const [tempTitulo, setTempTitulo] = useState("");
    //apos digitar aparece candite name/foto

    const [candidatos, setCandidatos] = useState();
    const [openE, setOpenE] = useState(false);
    const [valueE, setValueE] = useState(null);
    const [estados, setEstados] = useState([
        { label: 'AC', value: 'AC' },
        { label: 'AL', value: 'AL' },
        { label: 'AM', value: 'AM' },
        { label: 'AP', value: 'AP' },
        { label: 'BA', value: 'BA' },
        { label: 'CE', value: 'CE' },
        { label: 'DF', value: 'DF' },
        { label: 'ES', value: 'ES' },
        { label: 'GO', value: 'GO' },
        { label: 'MA', value: 'MA' },
        { label: 'MG', value: 'MG' },
        { label: 'MS', value: 'MS' },
        { label: 'MT', value: 'MT' },
        { label: 'PA', value: 'PA' },
        { label: 'PB', value: 'PB' },
        { label: 'PE', value: 'PE' },
        { label: 'PI', value: 'PI' },
        { label: 'PR', value: 'PR' },
        { label: 'RJ', value: 'RJ' },
        { label: 'RN', value: 'RN' },
        { label: 'RO', value: 'RO' },
        { label: 'RR', value: 'RR' },
        { label: 'RS', value: 'RS' },
        { label: 'SC', value: 'SC' },
        { label: 'SE', value: 'SE' },
        { label: 'SP', value: 'SP' },
        { label: 'TO', value: 'TO' }
    ]);

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
            obtemCandidatos().then((response) => response.json())
            .then((resposta) => {
                let cds = resposta.candidatos;
                console.log(resposta);
                setCandidatos(cds);
            }).catch((err )=> {
                console.log("Promise Rejected:"+err);
           });
        } catch (e) {
            console.log(e.toString());
            Alert.alert(e.toString());
        }
    }

    async function salvaDados() {
        //console.log(prodsCompra);
        /*prodsCompra.forEach(element => {
            total += element.precoUn * element.qtd;
        });*/

        let obj = {
            tituloEleitor: tempTitulo,
            estado: estado,
            candidatoGov: gov._id,
            candidatoPres: pres._id,
            candidatoSen: sen._id
        };

        try {

            let resposta = (await adicionaVoto(obj));

            if (resposta)
                Alert.alert('Votação realizada com sucesso!!!');
                //play sound
            else
                Alert.alert('Falha na compra, sorry!');

            limparCampos();
            await carregaDados();
        } catch (e) {
            Alert.alert(e.message);
        }
    }


    async function limparCampos() {
        setPresNum(0);
        setSenNum(0);
        setGovNum(0);
        setGov(null);
        setSen(null);
        setPres(null);
        setEstado("");
        setTituloEleitor("");
        setTempTitulo("");
        Keyboard.dismiss();
    }


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
            <View style={styles.scroll}>
                <View style={styles.areaBtnVoltar}>
                    <TouchableOpacity style={styles.btnVoltar} onPress={
                        () => navigation.navigate('Home')
                    }>
                        <Text style={styles.textBtnVoltar}> Voltar </Text>
                    </TouchableOpacity>
                    <Text style={styles.titulo}>Votação</Text>
                </View>

                {tituloEleitor==""?
                <View>
                    <View>
                        <Text style={styles.lblFields}>Digite o número do titulo de eleitor</Text>
                        <TextInput style={styles.campoCadastro} 
                        onChangeText={(texto) => setTempTitulo(texto)}
                        value={tempTitulo}
                        keyboardType="numeric" ></TextInput>
                    </View>
                    <Text style={styles.lblDropdown}>Selecione o estado</Text>
                    <View style={styles.areaDescricao2}>
                        <DropDownPicker
                            zIndex={1000}
                            open={openE}
                            setOpen={setOpenE}
                            items={estados}
                            setEstados={setEstados}
                            value={valueE}
                            setValue={setValueE}
                            style={styles.dropState}
                            dropDownContainerStyle={{
                                width: '27.5%', alignSelf: 'center'
                            }}
                        ></DropDownPicker>
                    </View>
                    <TouchableOpacity style={styles.button} onPress={() => validaInicio()}>
                        <Text style={styles.textButton}>Iniciar votação</Text>
                    </TouchableOpacity>

                </View>:
                <View>
                    <View>
                        <Text style={styles.lblFields}>Digite o número para governador</Text>
                        {gov==null?<View></View>:
                        <Text>Votando: {gov.nome}</Text>}
                        <TextInput style={styles.campoCadastro} 
                        onChangeText={(texto) => govDigitado(texto)}
                        value={govNum}
                        keyboardType="numeric" ></TextInput>
                    </View>

                    <View>
                        <Text style={styles.lblFields}>Digite o número para senador</Text>
                        {sen==null?<View></View>:
                        <Text>Votando: {sen.nome}</Text>}
                        <TextInput style={styles.campoCadastro}
                        onChangeText={(texto) => senDigitado(texto)}
                        value={senNum}
                        keyboardType="numeric"></TextInput>
                    </View>

                    <View>
                        <Text style={styles.lblFields}>Digite o número para presidente</Text>
                        {pres==null?<View></View>:
                        <Text>Votando: {pres.nome}</Text>}
                        <TextInput style={styles.campoCadastro}
                        onChangeText={(texto) => presDigitado(texto)}
                        value={presNum}
                        keyboardType="numeric"></TextInput>
                    </View>
                    <TouchableOpacity style={styles.button} onPress={() => salvaDados()}>
                        <Text style={styles.textButton}>Confirma</Text>
                    </TouchableOpacity>
                    <Text></Text>
                </View>}
            </View>
        </View>
    )

    function senDigitado(num){
        const cands = candidatos.filter(cand => cand.cargo == "SENANADOR");
        const cand = cands.find(cand => cand.numero.toString() == num);
        //check if null
        setSenNum(num);
        setSen(cand);
    }
    function presDigitado(num){
        const cands = candidatos.filter(cand => cand.cargo == "PRESIDENTE");
        const cand = cands.find(cand => cand.numero.toString() == num);
        //check if null
        setPresNum(num);
        setPres(cand);
    }
    function govDigitado(num){
        const cands = candidatos.filter(cand => cand.cargo == "GOVERNADOR" && cand.estado == estado);
        const cand = cands.find(cand => cand.numero.toString() == num);
        //todo check if null
        setGovNum(num);
        setGov(cand);
    }
    function validaInicio(){
        //todo validar se eleitor já votou
        setTituloEleitor(tempTitulo);
        setEstado(valueE);
    }

}