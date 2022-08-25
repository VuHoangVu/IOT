import React from 'react'
import {
    View,
    Text,
    Image,
    ImageBackground,
    StyleSheet,
    TouchableOpacity,
} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

function Home({navigation}) {
    return (
        <ImageBackground source={require('../assets/background_home.jpg')} style={styles.imgBackground}>
            <ScrollView styles={styles.controlPanel}>
                <View style={styles.row}>
                    <TouchableOpacity onPress={() => {navigation.navigate('Living Room')}}>
                        <View style={styles.button}>
                            <ImageBackground source={require('../assets/background_lvr.jpg')} style={styles.imgButton}>
                                <Text style={styles.buttonText}>
                                    LIVING ROOM
                                </Text>
                            </ImageBackground>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {navigation.navigate('Bed Room')}}>
                        <View style={styles.button}>
                            <ImageBackground source={require('../assets/background_br.jpg')} style={styles.imgButton}>
                                <Text style={styles.buttonText}>
                                    BED ROOM
                                </Text>
                            </ImageBackground>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.row}>
                    <TouchableOpacity onPress={() => {navigation.navigate('Bath Room')}}>
                        <View style={styles.button}>
                            <ImageBackground source={require('../assets/background_btr.jpg')} style={styles.imgButton}>
                                <Text style={styles.buttonText}>
                                    BATH ROOM
                                </Text>
                            </ImageBackground>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {navigation.navigate('Kitchen')}}>
                        <View style={styles.button}>
                            <ImageBackground source={require('../assets/background_kc.jpg')} style={styles.imgButton}>
                                <Text style={styles.buttonText}>
                                    KITCHEN
                                </Text>
                            </ImageBackground>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.row}>
                    <TouchableOpacity>
                        <View style={styles.button}>
                            <ImageBackground source={require('../assets/background_garden.jpg')} style={styles.imgButton}>
                                <Text style={styles.buttonText}>
                                    GARDEN
                                </Text>
                            </ImageBackground>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={styles.button}>
                            <ImageBackground source={require('../assets/background_outdoor.png')} style={styles.imgButton}>
                                <Text style={styles.buttonText}>
                                    OUTDOOR
                                </Text>
                            </ImageBackground>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </ImageBackground>
    )
}
export default Home

const styles = StyleSheet.create({
    imgBackground: {
        flex: 1,
        width: '100%',
        height: '100%',
        alignItems: 'center',
    },
    imgButton:{
        flex: 0,
        width: '100%',
        height: '100%',
    },
    controlPanel: {
        flex: 1,
        alignItems: 'center',
        // position: 'absolute',
        // top: 200,
        // left: 10,
        // right: 10,
        // bottom: 10,
        backgroundColor: 'red',
    },
    row: {
        height: '50%',
        width: '100%',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
    },
    button: {
        width: 150,
        height: 180,
        flex: 1,
        borderRadius: 10,
        position: 'relative',
        marginLeft: 15,
        backgroundColor: 'black'
    },
    buttonText:{
        textAlign: 'center',
        fontSize: 15,
        color: 'white',
        position: 'relative',
        marginTop: 10,
    }
})