import React from 'react'
import {
    StyleSheet,
    ImageBackground,
    StatusBar,
    Image,
    Text,
} from 'react-native'
//==========================================================
function Splash({navigation}) {
    setTimeout(() =>{
        navigation.replace('Login')
    },3000)
    return (
        <ImageBackground source={require('../assets/background_splash.jpg')} style={styles.imgBackground}>
            <StatusBar hidden/>
            <Image source={require('../assets/logoApp.png')} style={styles.logo}/>
            <Text style={styles.nameApp}> SMART HOME </Text>
        </ImageBackground>
    )
}
export default Splash
//=====================================================================
const styles = StyleSheet.create({
    imgBackground:{
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',

    },
    logo:{
        width: 200,
        height: 200,
        marginTop: 10,
    },
    nameApp:{
        fontSize: 25,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        marginTop: 0,
    },
})