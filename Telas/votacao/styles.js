import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff'
    },
    areaLogo: {
        width:200,
        height: 200,
        alignSelf: 'center'
    },
    areaMenu: {
        justifyContent: 'space-around',
        marginTop: 10,
        width: '80%'
    },
    button: {
        width: '50%',
        height: 60,
        borderRadius: 22,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ff9500',
        marginLeft: 90
    },
    textButton: {
        fontSize: 18,
        color: '#ffffff',
        fontWeight: 'bold'
    },
    campoCadastro: {
        marginTop: 10,
        height: 40,
        width: 210,
        backgroundColor: "#FFFFFF",
        borderColor: "#000000",
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 100
    },
    lblFields: {
        marginRight: 170
    },
    titulo: {
        fontSize: 23,
        fontWeight: 'bold',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 140,

    },
    areaBtnVoltar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginBottom: 80
    },
    btnVoltar: {
        width: '12%',
        height: 30,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ff9500',
        marginRight: 100,
    },
    textBtnVoltar: {
        fontSize: 14,
        color: '#ffffff',
        fontWeight: 'bold'
    },
})

export default styles;