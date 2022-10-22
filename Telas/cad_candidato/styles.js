import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
        //flex: 1
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
    lblDropdown: {
        marginTop: 20  
    },
    campoDrop: {
        alignSelf: 'center',
        marginTop: 5,
        marginBottom: 20,
        height: 40,
        width: 280,
        backgroundColor: "#FFFFFF",
        borderColor: "#000000",
        borderWidth: 1,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
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
    drop: {
        width: 280,
        height: 40
    },
    areaDados: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%'
    },
    areaDescricao: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '70%',
        marginTop: 50
    },
    areaDescricao2: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '70%',
        marginTop: 20
    },
    areaPreco: {
        width: '30%',
    },
    nome: {
        marginTop: 13,
        marginRight: 80
    },
    listaProdutos: {
        width: '100%',
        height: '100%',
        backgroundColor: '#FFF',
        marginTop: 20,
        flexGrow: 1,
    },
    areaDados: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
    },
    caixaTexto: {
        borderColor: "#000",
        borderWidth: 1,
        height: 50,
        width: '100%',
        paddingHorizontal: 10,
        borderRadius: 10,
    },
    botao: {
        width: '30%',
        height: 50,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#01f601',
        marginTop:10,
       
    },
    textoBotao: {
        color: '#FFF',
        fontWeight: 'bold'
    },
    caixaTexto2: {
        borderColor: "#000",
        borderWidth: 1,
        height: 50,
        width: '65%',
        paddingHorizontal: 10,
        borderRadius: 10,
    },
    dropState: {
        width: 80,
        marginLeft: 104
    },
    dropState2: {
        width: 150,
        marginLeft: 104
    }
})

export default styles;