import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import { FlatList, SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import Home from "./components/HomeScreen.js";
import Calendar from "./components/Calendar/Calendar.js";
import Cards from "./components/Cards/CardsContainer.js";
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: 'gray'
          }
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{title: 'React Native Components'}}
          />
        <Stack.Screen name="Calendar" component={Calendar}/>
        <Stack.Screen name="Cards" component={Cards}/>
      </Stack.Navigator>
      
    </NavigationContainer>
  );
}

