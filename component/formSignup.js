import React, {useState} from 'react'
import {
    View,
    Text,
    Image,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    ImageBackground,
} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { CheckBox } from 'react-native-elements'

function Home() {

    const navigation = useNavigation();
    const [getState, setState] = useState(false)

    return (
        <ImageBackground source={require('../assets/background_home.jpg')} style={styles.background}>
            <View>
                <View style={styles.header}>
                    <Image source={require('../assets/logoApp.png')} style={styles.Logo}/>
                </View>
                <View style={styles.main}>
                    <TextInput
                        style={styles.textBox}
                        placeholder="Số điện thoại hoặc email"
                        placeholderTextColor="gray">
                    </TextInput>
                    <TextInput
                        style={styles.textBox}
                        placeholder="Nhập mật khẩu"
                        placeholderTextColor="gray">
                    </TextInput>
                    <TextInput
                        style={styles.textBox}
                        placeholder="Nhập lại mật khẩu"
                        placeholderTextColor="gray">
                    </TextInput>
                    <View style={styles.passWordSupport}>
                        <CheckBox checked={getState} onPress={() => {setState(!getState)}}/>
                        <Text style={styles.textClick}> Tôi đồng ý với các điều khoản </Text>
                    </View>
                    <TouchableOpacity onPress={() => {navigation.navigate('FormLogin')}}>
                        <View style={styles.buttonNewAcc}>
                            <Text style={styles.buttonText}>
                                Tạo Tài Khoản
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    )
}
export default Home

const styles = StyleSheet.create({
    background:{
        width: '100%',
        height: '100%',
    },
    header:{
        marginTop: '5%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    main:{
        marginTop: '5%',
        marginLeft: '10%',
        marginRight: '10%',
    },
    Logo:{
        marginTop: 20,
        marginBottom: 30,
        width: 150,
        height: 150,
        alignItems: 'center',
    },
    textBox: {
        height: 40,
        marginBottom: 5,
        borderRadius: 10,
        paddingLeft: 10,
        backgroundColor: '#e6e9ed',
    },
    eye:{
        width: 40,
        height: 20,
        position: 'absolute',
        right: 5,
        top: 55,
    },
    imgEye:{
        width: '100%',
        height: '100%',
        resizeMode: "contain",
    },
    passWordSupport: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 15,
        
    },
    buttonLogin: {
        height: 40,
        backgroundColor: '#0c88ef',
        borderRadius: 10,
        borderStyle:  'solid',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonNewAcc: {
        height: 40,
        backgroundColor: '#42b72a',
        borderRadius: 10,
        borderStyle:  'solid',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textClick: {
        marginTop: 15,
        marginBottom: "10%",
        textAlign: 'center',
    },

})