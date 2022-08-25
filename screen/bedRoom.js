import React from 'react'
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
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
import Slider from '../elements/slider'
import ButtonControl from '../elements/button'

function BedRoom() {
    return (
        <ImageBackground source={require('../assets/background_br.jpg')} style={styles.imgBackground}>
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
                <Slider
                    iconSlider= {<FontAwesome5 name="temperature-high" style={styles.iconSlider}/>}
                    minValue={0}
                    maxValue={100}
                    donVi= "%"
                />
            </View>
            <View style={styles.panelButton}>
                <View style={styles.row}>
                    <TouchableOpacity>
                        <ButtonControl
                            name= "B1"
                            iconButton= {<FontAwesome name="lightbulb-o" style={styles.iconButton}/>}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <ButtonControl
                            name= "B2"
                            iconButton= {<FontAwesome name="lightbulb-o" style={styles.iconButton}/>}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <ButtonControl
                            name= "B3"
                            iconButton= {<FontAwesome name="lightbulb-o" style={styles.iconButton}/>}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <ButtonControl
                            name= "B4"
                            iconButton= {<FontAwesome name="lightbulb-o" style={styles.iconButton}/>}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.row}>
                    <TouchableOpacity>
                        <ButtonControl
                            name= "B1"
                            iconButton= {<FontAwesome name="lightbulb-o" style={styles.iconButton}/>}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <ButtonControl
                            name= "B2"
                            iconButton= {<FontAwesome name="lightbulb-o" style={styles.iconButton}/>}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <ButtonControl
                            name= "B3"
                            iconButton= {<FontAwesome name="lightbulb-o" style={styles.iconButton}/>}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <ButtonControl
                            name= "B4"
                            iconButton= {<FontAwesome name="lightbulb-o" style={styles.iconButton}/>}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    )
}
export default BedRoom

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
        height: '40%',
        marginTop: '10%',
        backgroundColor: '#f5fbfd',
        alignItems: 'center',
    },
    iconButton: {
        color: '#f2f9f0',
        fontSize: 24,
    },
    panelButton: {
        marginTop: 20,
        paddingTop: 5,
        paddingBottom: 5,
        borderRadius: 5,
        width: '90%',
        backgroundColor: '#f5fbfd',
        alignItems: 'center',
        justifyContent: 'center',
    },
    row: {
        flexDirection: 'row',
    },
})