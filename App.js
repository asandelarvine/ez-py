import 'react-native-gesture-handler'
import Login from './screens/Login';
import Signup from './screens/Signup';
// import HomeScreen from './screens/Home'
// import SettingsScreen from './screens/Settings'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// import { createDrawerNavigator} from 'react-navigation-drawer';
const Stack = createStackNavigator();
// const Drawer = createDrawerNavigator();


function App() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}} >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
      {/* <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Settings" component={SettingsScreen} /> */}

    </Stack.Navigator>
    
  );
}


export default () => {
  return (
    <NavigationContainer>
     
        <App />
      
    </NavigationContainer>
  )
}


