import styles from './styles';
import {
    Alert, Text, TextInput, TouchableOpacity,
    View, Keyboard, ScrollView, Image
} from 'react-native';
import { useState, useEffect, useCallback } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import { obtemPartidos } from '../../services/api_partido';
import { adicionaCandidato, alteraCandidato, excluiCandidato, obtemCandidatos } from '../../services/api_candidato';
import CardCandidato from '../../componentes/card_candidato';

export default function Cad_Candidato({ navigation }) {



    const [id, setId] = useState(undefined);
    const [descricao, setDescricao] = useState("");
    const [precoUn, setPrecoUn] = useState("");
    const [idCat, setIdCat] = useState("");
    const [candidatos, setCandidatos] = useState([]);
    const [partidos, setPartidos] = useState([]);
    const [openC, setOpenC] = useState(false);
    const [valueC, setValueC] = useState(null);
    const [openE, setOpenE] = useState(false);
    const [valueE, setValueE] = useState(null);
    const [openP, setOpenP] = useState(false);
    const [valueP, setValueP] = useState(null);
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
    const [cargos, setCargos] = useState([
        { label: 'Governador', value: 'Governador' },
        { label: 'Senanador', value: 'Senanador' },
        { label: 'Presidente', value: 'Presidente' },
    ]);

    DropDownPicker.addTranslation("PT", {
        PLACEHOLDER: "",
        SEARCH_PLACEHOLDER: "Clique em qualquer item",
        NOTHING_TO_SHOW: "Hmm, parece que não há itens"
    });

    DropDownPicker.setLanguage("PT");

    var onC = useCallback(() => {
        setOpenE(false);
        setOpenP(false);
    }, []);

    var onE = useCallback(() => {
        setOpenC(false);
        setOpenP(false);
    }, []);

    var onP = useCallback(() => {
        setOpenC(false);
        setOpenE(false);
    }, []);
    
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
            obtemPartidos().then((response) => response.json())
            .then((resposta) => {
                let partds = [];
                let ptds = resposta.partidos;
                console.log(ptds);
                ptds.forEach(element => {
                    partds.push({ label: element.nome, value: element._id })
                });
                console.log(partds);
                setPartidos(partds);
            }).catch((err )=> {
                console.log("Promise Rejected:"+err);
           });
        } catch (e) {
            console.log(e.toString());
            Alert.alert(e.toString());
        }
    }

    async function salvaDados() {
        let novoRegistro = id == undefined;

        let obj = {
            nome: descricao,
            numero: precoUn,
            partidoCandidato: valueP,
            cargo: valueC,
            estado: valueE,
            imgId: ''
        };

        
        if(descricao==""||precoUn==""){
            Alert.alert("Preecha os campos");
            return;
        }

        try {
            if (novoRegistro) {
                let resposta = (await adicionaCandidato(obj));

                if (resposta)
                    Alert.alert('adicionado com sucesso!');
                else
                    Alert.alert('Falhou, sorry!');
            }
            else {
                let resposta = await alteraCandidato(obj);
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

        setValueP(null);
        setOpenP(false);
        setValueE(null);
        setOpenE(false);
        setValueC(null);
        setOpenC(false);
        Keyboard.dismiss();
    }

    function editar(identificador) {
        const cand = candidatos.find(cand => cand._id == identificador);

        if (cand != undefined) {
            setId(cand._id);
            setDescricao(cand.nome);
            setPrecoUn(cand.numero.toString());
            setIdCat(cand.partidoCandidato);
            setValueP(cand.partidoCandidato);
            setValueE(cand.estado);
            setValueC(cand.cargo);
        }

        console.log(cand);
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
            await excluiCandidato(identificador);
            Keyboard.dismiss();
            limparCampos();
            await carregaDados();
            Alert.alert('Produto apagado com sucesso!!!');
        } catch (e) {
            Alert.alert(e.message);
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
                <Text style={styles.titulo}>Cadastro de Candidato</Text>
            </View>

            <View style={styles.areaDados}>
                <View style={styles.areaDescricao}>
                    <Text style={styles.nome}>Nome</Text>
                    <TextInput style={styles.caixaTexto} 
                        onChangeText={(texto) => setDescricao(texto)}
                        value={descricao} />
                </View>
            </View>

            <View style={styles.areaDescricao2}>
                <Text style={styles.lblDropdown}>Selecione o partido</Text>
                <DropDownPicker
                    zIndex={6000}
                    open={openP}
                    setOpen={setOpenP}
                    onOpen={onP}
                    items={partidos}
                    setPartidos={setPartidos}
                    value={valueP}
                    setValue={setValueP}
                    style={styles.dropState2}
                    dropDownContainerStyle={{
                        width: '52%', marginLeft: 104
                    }}
                ></DropDownPicker>
            </View>

            <View style={styles.areaDescricao2}>
                <Text style={styles.lblDropdown}>Selecione o cargo</Text>
                <DropDownPicker
                    open={openC}
                    setOpen={setOpenC}
                    onOpen={onC}
                    items={cargos}
                    setCargos={setCargos}
                    value={valueC}
                    setValue={setValueC}
                    style={styles.dropState2}
                    dropDownContainerStyle={{
                        width: '52%', marginLeft: 104
                    }}
                ></DropDownPicker>
            </View>

            <View style={styles.areaDescricao2}>
                <Text style={styles.lblDropdown}>Selecione o estado</Text>
                <DropDownPicker
                    zIndex={1000}
                    open={openE}
                    setOpen={setOpenE}
                    onOpen={onE}
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

            <View style={styles.areaDados}>
                <View style={styles.areaDescricao2}>
                    <Text style={styles.nome}>Número do Candidato</Text>
                    <TextInput style={styles.caixaTexto2} 
                    onChangeText={(texto) => setPrecoUn(texto)}
                    value={precoUn}
                    keyboardType="numeric" />
                </View>
            </View>
            
            <TouchableOpacity style={styles.button} onPress={() => salvaDados()}>
                <Text style={styles.textButton}>Cadastrar</Text>
            </TouchableOpacity>
            <Text></Text>
            <ScrollView>
                {
                    candidatos.map((candidato, index) => (
                        <CardCandidato candidato={candidato} key={index.toString()}
                            removerElemento={removerElemento} editar={editar} />
                    ))
                }
            </ScrollView>
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <Text></Text>
        </View>
    )
}