import React from 'react'
import {
    View,
    Text,
    Image,
    StyleSheet,
    ImageBackground,
} from 'react-native'
import {
    Ionicons,
    Feather,
    FontAwesome,
    FontAwesome5,
    MaterialIcons,
    MaterialCommunityIcons
} from '@expo/vector-icons'
import Switch from '../elements/switch'
import Slider from '../elements/slider'

function BathRoom() {

    return (
        <ImageBackground source={require('../assets/background_btr.jpg')} style={styles.imgBackground}>
            <View style={styles.panelHarmonic}>
                <Slider
                    iconSlider= {<FontAwesome5 name="temperature-high" style={styles.iconSlider}/>}
                    minValue={0}
                    maxValue={50}
                    donVi= "°C"
                />
                <Slider
                    iconSlider= {<MaterialCommunityIcons name="fan" style={styles.iconSlider}/>}
                    minValue={0}
                    maxValue={100}
                    donVi= "%"
                />
            </View>
            <View style={styles.row}>
                <Switch name="B1"/>
                <Switch name="B2"/>
                <Switch name="B3"/>
                <Switch name="B4"/>
            </View>
        </ImageBackground>
    )
}
export default BathRoom

const styles = StyleSheet.create({
    imgBackground: {
        width: '100%',
        height: '100%',
        flex: 1,
        alignItems: 'center',
    },
    iconSlider: {
        color: '#aadff7',
        fontSize: 24,
    },
    panelHarmonic: {
        borderRadius: 5,
        width: '90%',
        height: '30%',
        marginTop: '10%',
        backgroundColor: '#f5fbfd',
        alignItems: 'center',
    },
    row: {
        flexDirection: 'row',
        width: '90%',
        marginTop: 20,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
    },
})