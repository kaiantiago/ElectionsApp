import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff'
    },
    areaLogo: {
        width: 200,
        height: 145,
        alignSelf: 'center'
    },
    areaMenu: {
        justifyContent: 'space-around',
        marginTop: 10,
        width: '80%'
    },
    button: {
        width: '100%',
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
    titulo: {
        fontSize: 23,
        fontWeight: 'bold',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 118,
        marginLeft: 20

    },
    areaBtnVoltar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginBottom: 50
    },
    btnVoltar: {
        width: '12%',
        height: 30,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ff9500',
        marginRight: 50,
    },
    textBtnVoltar: {
        fontSize: 14,
        color: '#ffffff',
        fontWeight: 'bold',
    },
})

export default styles;