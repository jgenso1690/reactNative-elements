import { StatusBar } from 'expo-status-bar';
import { FlatList, SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
// import { TouchableOpacity } from 'react-native-gesture-handler';
import Calendar from "./components/Calendar/Calendar.js";

const SCREEN_WIDTH = Dimensions.get("window").width;
export default function App() {

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
  return (
    <View style={styles.container}>
      <FlatList
        data={components}
        contentContainerStyle={{width: '100%', borderBottomWidth: 1}}
        renderItem={({item})=> {
          return(
            <TouchableOpacity style={styles.itemContainer}>
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
    margin: 50,
    width: '100%',
    backgroundColor: 'red'
  },
  itemContainer : {
    padding: 15,
    borderTopWidth: 1,
    width: SCREEN_WIDTH
  }
});
