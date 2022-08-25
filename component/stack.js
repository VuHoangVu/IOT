import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Splash from '../screen/splash'
import Login from '../screen/login'
import drawer from './drawer'
import FormLogin from './formLogin'
import LivingRoom from '../screen/livingRoom'
import BedRoom from '../screen/bedRoom'
import BathRoom from '../screen/bathRoom'
import Kitchen from '../screen/kitchen'
import FormSignup from './formSignup'

const Stack = createStackNavigator();
//Creat screen in stack...
function StackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Slash" headerMode="none">
        <Stack.Screen name="Slash" component={Splash}/>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="FormLogin" component={FormLogin}/>
        <Stack.Screen name="FormSignup" component={FormSignup}/>
        <Stack.Screen name="drawer" component={drawer}/>
        <Stack.Screen name="Living Room" component={LivingRoom}/>
        <Stack.Screen name="Bed Room" component={BedRoom}/>
        <Stack.Screen name="Bat Room" component={BathRoom}/>
        <Stack.Screen name="Kitchen" component={Kitchen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default StackNavigator