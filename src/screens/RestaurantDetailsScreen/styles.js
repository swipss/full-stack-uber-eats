import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    page: {
        flex: 1,
    },
    image: {
        width: '100%',
        aspectRatio: 5/3,
        resizeMode: 'cover',
    },
    iconContainer: {
        position: 'absolute',
        top: 40,
        left: 15,

    },
    container: {
        margin: 10,
    },
    title: {
        fontSize: 35,
        fontWeight: '600',
        marginVertical: 10,
    },
    subtitle: {
        fontSize: 15,
        color: '#525252'
    },
    menuTitle: {
        marginTop: 20,
        fontSize: 18,
        letterSpacing: 0.7
    },
    button: {
        backgroundColor: 'black',
        marginTop: 'auto',
        padding: 20,
        alignItems: 'center',
        borderRadius: 10,
        margin: 20
    },
    buttonText: {
        color: 'white',
        fontWeight: '600',
        fontSize: 18
    },

})