import React from 'react'
import {
    StyleSheet,
    SafeAreaView,
    ImageBackground,
    StatusBar,
    Keyboard,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
} from 'react-native'
import {
    Ionicons,
    Feather,
    FontAwesome,
    FontAwesome5,
    MaterialIcons,
    MaterialCommunityIcons
} from '@expo/vector-icons'
import { BlurView } from 'expo-blur'
import FormLogin from '../component/formLogin'

function Login() {
    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <ImageBackground source={require('../assets/background_splash.jpg')} style={styles.imgBackground}>
                    <StatusBar barStyle="light-content"/>
                    <SafeAreaView style={styles.container}>
                        <BlurView intensity={20} style={styles.blurContainer}>
                            <FormLogin/>
                        </BlurView> 
                    </SafeAreaView>
                </ImageBackground>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}
export default Login
//============================================================================
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    blurContainer: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
    },
    imgBackground:{
        width: '100%',
        height: '100%',
    },
})