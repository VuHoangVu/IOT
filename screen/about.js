import React from 'react'
import {
    View,
    Text,
    Image,
    ImageBackground,
    StyleSheet,
} from 'react-native'
import {useFonts} from 'expo-font'

function About() {
    const [loaded] = useFonts({
        Manga: require('../assets/fonts/Manga-4.ttf')
    })
    if (!loaded){
        return null
    }
    return (
        <ImageBackground source={require('../assets/background_home.jpg')}>
            <View style={styles.background}>
                <Image source={require('../assets/logoApp.png')} style={styles.logo}/>
                <View style={styles.appName}>
                    <Text> SMART HOME </Text>
                </View>
                <View style={styles.content}>
                    <Text> Ứng dụng giúp cho ngôi nhà của bạn thông minh hơn</Text>
                </View>
                <View>
                    <Text style={styles.author}> © Copyright by VHV </Text>
            </View>
            </View>
        </ImageBackground>
    )
}
export default About

const styles = StyleSheet.create({
    imgBackground: {
        width: '100%',
        height: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },
    background: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        backgroundColor: '#e6f3ff'
    },
    logo: {
        width: 100,
        height: 100,
        top: 10,
    },
    appName: {
        fontSize: 100,
        top: 40,
    },
    content: {
        fontSize: 14,
        top: 40,
        fontFamily: 'Manga',
    },
    author: {
        fontSize: 10,
        top: 100,
    },
})