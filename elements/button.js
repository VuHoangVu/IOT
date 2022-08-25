import React from 'react'
import {
    View,
    Text,
    StyleSheet,
} from 'react-native'

function buttonControl(props) {
    return (
        <View style={styles.button}>
            <View style={styles.buttonIcon}>
                {props.iconButton}
            </View>
            <Text style={styles.buttonText}>
                {props.name}
            </Text>
        </View>
    )
}
export default buttonControl

const styles = StyleSheet.create({
    button: {
        width: 60,
        height: 80,
        borderRadius: 10,
        margin: 5,
        backgroundColor: '#aadff7',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText:{
        textAlign: 'center',
        fontSize: 15,
        color: 'white',
        position: 'relative',
        marginTop: 10,
    },
    buttonIcon:{
        fontSize: 30
    },
})