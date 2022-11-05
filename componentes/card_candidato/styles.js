import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    contato: {
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        height: 80,
        alignItems: 'center',
        margin: 10,
        borderColor: '#000',
        borderWidth: 0.85,
        borderRadius: 30,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },
    listaNome: {
        width: '70%',
        fontSize: 18,
    },
    txtPreco:{
        width: "20%",
        fontSize: 18,
    },

    dadosListaTelefone: {
        width: '40%',
        flexDirection: 'row',
    },
    dadosBotoesAcao: {
        width: '10%',
    },
    iconTelefone: {
        width: 20,
        height: 25,
        marginRight: 5,
    },
    listaTelefone: {
        color: "#FFFFFF",
        fontSize: 18,
    },
});


export default styles;