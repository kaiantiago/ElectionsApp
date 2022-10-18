import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
        flex: 1
    },
    titulo: {
        fontSize: 23,
        fontWeight: 'bold',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 85,
        marginLeft: 20

    },
    areaBtnVoltar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    btnVoltar: {
        width: '12%',
        height: 30,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ff9500',
        marginRight: 10,
        marginLeft: 10
    },
    textBtnVoltar: {
        fontSize: 14,
        color: '#ffffff',
        fontWeight: 'bold'
    },
    lblCadastro: {
        marginTop: 100    
    },
    campoCadastro: {
        alignSelf: 'center',
        marginTop: 10,
        height: 40,
        width: 280,
        backgroundColor: "#FFFFFF",
        borderColor: "#000000",
        borderWidth: 1,
        borderRadius: 8
    },
    button: {
        width: '45%',
        height: 60,
        borderRadius: 22,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ff9500',
        marginTop: 20,
    },
    textButton: {
        fontSize: 18,
        color: '#ffffff',
        fontWeight: 'bold'
    },
    areaDados: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
    },
    areaDescricao: {
        width: '55%',
    },
    areaPreco: {
        width: '30%',
    },
    listaProdutos: {
        width: '100%',
        height: '100%',
        backgroundColor: '#FFF',
        marginTop: 20,
    },
    areaDados: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
    },
    caixaTexto: {
        borderColor: "#000",
        borderWidth: 2,
        height: 50,
        width: '100%',
        paddingHorizontal: 10,
        borderRadius: 10,
    },
    botao: {
        width: '30%',
        height: 50,
        borderColor: "#000",
        borderWidth: 2,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ff9500',
    },
    textoBotao: {
        color: '#FFFFFF',
        fontWeight: 'bold'
    },
})

export default styles;