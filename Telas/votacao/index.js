import { react, useState, useEffect, useCallback } from 'react';
import styles from './styles';

import {
    Alert, Text, TextInput, TouchableOpacity,
    View, Keyboard, ScrollView, Image
} from 'react-native';

import DropDownPicker from 'react-native-dropdown-picker';
import { adicionaVoto, obtemVotos } from '../../services/api_votos';
import { obtemCandidatos } from '../../services/api_candidato';
import { Audio } from 'expo-av';


export default function Votacao({ navigation }) {

    DropDownPicker.addTranslation("PT", {
        PLACEHOLDER: "",
        SEARCH_PLACEHOLDER: "Clique em qualquer item",
        NOTHING_TO_SHOW: "Hmm, parece que não há itens"
    });

    DropDownPicker.setLanguage("PT");

    const [sound, setSound] = useState();
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
    const [votos, setVotos] = useState();
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

    async function playSound() {
        console.log('Loading Sound');
        const { sound } = await Audio.Sound.createAsync(require('../../assets/sounds/urna-sound.mp3')
        );
        setSound(sound);

        console.log('Playing Sound');
        await sound.playAsync();
    }

    useEffect(() => {
        return sound
            ? () => {
                console.log('Unloading Sound');
                sound.unloadAsync();
            }
            : undefined;
    }, [sound]);

    useEffect(
        () => {
            console.log('executando useffect');
            processamentoUseEffect();
        }, []);

    function carregaDados() {
        try {
            obtemVotos().then((response) => response.json())
                .then((resposta) => {
                    let vts = resposta.voto;
                    //console.log(resposta)
                    setVotos(vts);
                })
            obtemCandidatos().then((response) => response.json())
                .then((resposta) => {
                    let cds = resposta.candidatos;
                    console.log(resposta);
                    setCandidatos(cds);
                }).catch((err) => {
                    console.log("Promise Rejected:" + err);
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

            if (resposta) {
                Alert.alert('Votação realizada com sucesso!!!');
                playSound();
            }
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

                {tituloEleitor == "" ?
                    <View>
                        <View style={styles.centralizar}>
                            <View>
                                <Text>Digite o número do titulo de eleitor</Text>
                                <TextInput style={styles.campoCadastro}
                                    onChangeText={(texto) => setTempTitulo(texto)}
                                    value={tempTitulo}
                                    keyboardType="numeric" ></TextInput>
                            </View>
                            <Text>Selecione o estado</Text>
                            <View style={styles.areaDescricao2}>
                                <DropDownPicker
                                    zIndex={1000}
                                    open={openE}
                                    setOpen={setOpenE}
                                    items={estados}
                                    setEstados={setEstados}
                                    value={valueE}
                                    setValue={setValueE}        
                                    dropDownContainerStyle={{
                                        width: '100%', alignSelf: 'center'
                                    }}
                                ></DropDownPicker>
                            </View>
                            <TouchableOpacity style={styles.button} onPress={() => validaInicio()}>
                                <Text style={styles.textButton}>Iniciar votação</Text>
                            </TouchableOpacity>
                        </View>
                    </View> :
                    <ScrollView>
                        <View>
                            <View style={styles.rowFoto}>
                                <View>
                                    <Text style={styles.lblFields}>Digite o número para governador</Text>
                                    {gov == null ? <View></View> :
                                        <Text>Votando: {gov.nome}</Text>}
                                    <TextInput style={styles.campoCadastro}
                                        onChangeText={(texto) => govDigitado(texto)}
                                        value={govNum}
                                        keyboardType="numeric" ></TextInput>
                                </View>

                                <Image
                                    style={styles.areaLogo}
                                    source={{ uri: `https://i.pravatar.cc/400?img=${gov == null ? "51" : gov.imgId}` }}
                                />

                            </View>
                            <View style={styles.rowFoto}>
                                <View>
                                    <Text style={styles.lblFields}>Digite o número para senador</Text>
                                    {sen == null ? <View></View> :
                                        <Text>Votando: {sen.nome}</Text>}
                                    <TextInput style={styles.campoCadastro}
                                        onChangeText={(texto) => senDigitado(texto)}
                                        value={senNum}
                                        keyboardType="numeric"></TextInput>
                                </View>

                                <Image
                                    style={styles.areaLogo}
                                    source={{ uri: `https://i.pravatar.cc/400?img=${sen == null ? "12" : sen.imgId}` }}
                                />
                            </View>
                            <View style={styles.rowFoto}>
                                <View>
                                    <Text style={styles.lblFields}>Digite o número para presidente</Text>
                                    {pres == null ? <View></View> :
                                        <Text>Votando: {pres.nome}</Text>}
                                    <TextInput style={styles.campoCadastro}
                                        onChangeText={(texto) => presDigitado(texto)}
                                        value={presNum}
                                        keyboardType="numeric"></TextInput>
                                </View>
                                <Image
                                    style={styles.areaLogo}
                                    source={{ uri: `https://i.pravatar.cc/400?img=${pres == null ? "68" : pres.imgId}` }}
                                />
                            </View>
                            <TouchableOpacity style={styles.button} onPress={() => salvaDados()}>
                                <Text style={styles.textButton}>Confirma</Text>
                            </TouchableOpacity>
                            <Text></Text>
                        </View></ScrollView>}
            </View>
        </View>

    )

    function senDigitado(num) {
        const cands = candidatos.filter(cand => cand.cargo == "SENANADOR");
        const cand = cands.find(cand => cand.numero.toString() == num);
        //check if null
        setSenNum(num);
        setSen(cand);
    }
    function presDigitado(num) {
        const cands = candidatos.filter(cand => cand.cargo == "PRESIDENTE");
        const cand = cands.find(cand => cand.numero.toString() == num);
        //check if null
        setPresNum(num);
        setPres(cand);
    }
    function govDigitado(num) {
        const cands = candidatos.filter(cand => cand.cargo == "GOVERNADOR" && cand.estado == estado);
        const cand = cands.find(cand => cand.numero.toString() == num);
        //todo check if null
        setGovNum(num);
        setGov(cand);
    }
    async function validaInicio() {
        var vts = votos;
        if (vts.some(v => v.tituloEleitor == tempTitulo)) {
            Alert.alert("Já votou");
            return;
        }

        //todo validar se eleitor já votou
        setTituloEleitor(tempTitulo);
        setEstado(valueE);
    }

}