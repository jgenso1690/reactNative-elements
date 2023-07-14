import { StatusBar } from 'expo-status-bar';
import { FlatList, SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
// import { TouchableOpacity } from 'react-native-gesture-handler';
import Calendar from "./Calendar/Calendar.js";
import {NavigationContainer} from '@react-navigation/native';

const SCREEN_WIDTH = Dimensions.get("window").width;

const HomeScreen = ({navigation}) => {

    const components = [
      {
        id: 'Calendar',
        component: <Calendar/>
      },
      {
        id: 'Cards',
        component: <Calendar/>
      },
      { 
        id: 'extra',
        component: <Calendar/>
      }
    ]

    const handlePress = () => {
      navigation.navigate('Calendar', {name: 'Calendar'})
    }

    return (
        <View style={styles.container}>
          <FlatList
            data={components}
            contentContainerStyle={{width: '100%', borderBottomWidth: 1}}
            renderItem={({item})=> {
              return(
                <TouchableOpacity onPress={handlePress} style={styles.itemContainer}>
                  <Text>{item.id}</Text>
                </TouchableOpacity>
                )
            }}
            keyExtractor={item=>item.id}
            >
          </FlatList>
          <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    alignSelf: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  itemContainer : {
    padding: 15,
    borderTopWidth: 1,
    width: SCREEN_WIDTH
  }
});

export default HomeScreen;
