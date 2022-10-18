import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff'
    },
    titulo: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20
    },
    areaLogo: {
        width:200,
        height: 125,
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
    }
})

export default styles;