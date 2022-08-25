import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image,
    ImageBackground,
    TouchableOpacity,
} from 'react-native'
import {
    Ionicons,
    Feather,
    FontAwesome,
    MaterialIcons,
} from '@expo/vector-icons'

import ButtonControl from '../elements/button'

function LivingRoom() {
    return (
        <ImageBackground source={require('../assets/background_lvr.jpg')} style={styles.imgBackground}>
            <View style={styles.controlPanel}>
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
                            name="C1"
                            iconButton= {<FontAwesome name="lightbulb-o" style={styles.iconButton}/>}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <ButtonControl
                            name="C2"
                            iconButton= {<FontAwesome name="lightbulb-o" style={styles.iconButton}/>}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <ButtonControl
                            name="C3"
                            iconButton= {<FontAwesome name="lightbulb-o" style={styles.iconButton}/>}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <ButtonControl
                            name="C4"
                            iconButton= {<FontAwesome name="lightbulb-o" style={styles.iconButton}/>}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.row}>
                    <TouchableOpacity>
                        <ButtonControl
                            name="D1"
                            iconButton= {<FontAwesome name="bath" style={styles.iconButton}/>}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    )
}
export default LivingRoom

const styles = StyleSheet.create({
    imgBackground: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
    },
    controlPanel: {
        position: 'absolute',
        top: 200,
        left: 10,
        right: 10,
        bottom: 10,
    },
    row: {
        height: '30%',
        width: '100%',
        borderRadius: 5,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f5fbfd',
        marginTop: 10,
    },
    iconButton: {
        color: '#f2f9f0',
        fontSize: 24,
    },
})