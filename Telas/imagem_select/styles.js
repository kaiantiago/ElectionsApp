import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff'
    },
    titulo: {
        fontSize: 23,
        fontWeight: 'bold',
        justifyContent: 'center',
        alignItems: 'center',
    },
    areaLogo: {
        width:200,
        height: 145,
        alignSelf: 'center',
        marginTop: 50,
        marginBottom: 50
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
    imagesList: {
        flex: 1
    }
})

export default styles;