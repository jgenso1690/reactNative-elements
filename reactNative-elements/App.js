import { StatusBar } from 'expo-status-bar';
import { FlatList, SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import HomeScreen from "./components/HomeScreen.js";
import Calendar from "./components/Calendar/Calendar.js";
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'React Native Components'}}
          />
          <Stack.Screen name="Calendar" component={Calendar}/>
      </Stack.Navigator>
      
    </NavigationContainer>
  );
}

