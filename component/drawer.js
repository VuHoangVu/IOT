import Home from '../screen/home'
import About from '../screen/about'
import Setting from '../screen/settings'
import LivingRoom from '../screen/livingRoom'
import BedRoom from '../screen/bedRoom'
import BathRoom from '../screen/bathRoom'
import Kitchen from '../screen/kitchen'
import 'react-native-gesture-handler'

import {
    View,
    Text,
    Image,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    ImageBackground,
} from 'react-native'

import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer'

import {
    NavigationContainer,
    useNavigation
} from '@react-navigation/native'
//========== Icon Library ==============//
import {
    Ionicons,
    Feather,
    FontAwesome,
    MaterialIcons,
} from '@expo/vector-icons'

const Drawer = createDrawerNavigator()

function CusomDrawer(props) {

    const navigation = useNavigation()

    return (
        <View style={styles.background}>
            <View style={styles.userView}>
                <View>
                    <Image source={require ('../assets/logoApp.png')} style={styles.logo}/>
                </View>
                <Text style={styles.title}>
                    Vu Hoang Vu
                </Text>
            </View>
            <DrawerContentScrollView>
                <DrawerItemList {...props}
                    activeTintColor= 'red'
                />
            </DrawerContentScrollView>
            <DrawerItem label={'Logout'} onPress={() => {navigation.navigate ('Login')}}>

            </DrawerItem>
        </View>
    )
}
function DrawerNavigator() {
    return (
        <Drawer.Navigator
            drawerContent={(props) => <CusomDrawer {...props}/>
            }
            drawerContentOption={{

            }}
            >
            <Drawer.Screen name="Home" component={Home}
                options={{
                    drawerIcon: () => (
                        <Feather name="home" style={styles.iconMenu}/>
                    )
                }}
            />
            <Drawer.Screen name="Living Room" component={LivingRoom}
                options={{
                    drawerIcon: () => (
                        <Ionicons name="ios-tv-outline" style={styles.iconMenu}/>
                    )
                }}
            />
            <Drawer.Screen name="Bed Room" component={BedRoom}
                options={{
                    drawerIcon: () => (
                        <Ionicons name="bed-outline" style={styles.iconMenu}/>
                    )
                }}
            />
            <Drawer.Screen name="Bath Room" component={BathRoom}
                options={{
                    drawerIcon: () => (
                        <FontAwesome name="bath" style={styles.iconMenu}/>
                    )
                }}
            />
            <Drawer.Screen name="Kitchen" component={Kitchen}
                options={{
                    drawerIcon: () => (
                        <MaterialIcons name="kitchen" style={styles.iconMenu}/>
                    )
                }}
            />
            <Drawer.Screen name="About" component={About}
                options={{
                    drawerIcon: () => (
                        <Feather name="user" style={styles.iconMenu}/>
                    )
                }}
            />
            <Drawer.Screen name="Setting" component={Setting}
                options={{
                    drawerIcon: () => (
                        <Feather name="settings" style={styles.iconMenu}/>
                    )
                }}
            />
        </Drawer.Navigator>
    )
  }
function Menu(){
    return (
        <NavigationContainer independent={true}>
            <DrawerNavigator/>
        </NavigationContainer>
    )
}
export default Menu

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: 'white'
    },
    userView: {
        height: '25%',
        backgroundColor: '#aadff7',
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 24,
    },
    logo: {
        width: 100,
        height: 100,
    },
    iconMenu: {
        color: '#aadff7',
        fontSize: 24,
    },
    textMenu: {
        color: '#aadff7',
        fontSize: 14,
    },
    textActive: {
        color: '#aadff7',
    },
})