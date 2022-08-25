import React from 'react'
import {
    View,
    Text,
    Image,
    StyleSheet,
    ImageBackground,
} from 'react-native'

function Kitchen() {
    return (
        <ImageBackground source={require('../assets/background_kc.jpg')} style={styles.imgBackground}>

        </ImageBackground>
    )
}
export default Kitchen

const styles = StyleSheet.create({
    imgBackground: {
        width: '100%',
        height: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },
})