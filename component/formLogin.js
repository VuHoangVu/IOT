import React, {useState} from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image,
    TextInput,
    TouchableOpacity,
} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { CheckBox } from 'react-native-elements'

function FormLogin() {
    const navigation = useNavigation()
    const [getPassWordVisible, setPassWordVisible] = useState(false)
    const [getState, setState] = useState(false)

    return (
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
                    placeholder="Mật Khẩu"
                    placeholderTextColor="gray"
                    secureTextEntry={getPassWordVisible ? false : true}>
                </TextInput>
                <TouchableOpacity
                    style={styles.eye}
                    onPress={() => {
                        setPassWordVisible(!getPassWordVisible)
                    }
                }>
                    {getPassWordVisible ? 
                        <Image source={require('../assets/invisible.png')} style={styles.imgEye}/>
                        :
                        <Image source={require('../assets/visible.png')} style={styles.imgEye}/>
                    }
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {navigation.navigate('drawer')}}>
                    <View style={styles.buttonLogin}>
                        <Text style={styles.buttonText}>
                            Đăng Nhập
                        </Text>
                    </View>
                </TouchableOpacity>
                <View style={styles.passWordSupport}>
                    <CheckBox checked={getState} onPress={() => {setState(!getState)}}/>
                    <Text> Lưu mật khẩu </Text>
                    <TouchableOpacity>
                        <Text>
                            Quên mật khẩu?
                        </Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={() => {navigation.navigate('FormSignup')}}>
                    <View style={styles.buttonNewAcc}>
                        <Text style={styles.buttonText}>
                            Tạo Tài Khoản Mới
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default FormLogin

const styles = StyleSheet.create({
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
    savePass: {
        left: 2,
    },
    textClick: {
        right: 1,
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
})