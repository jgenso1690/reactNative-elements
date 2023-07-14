import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Calendar from "./components/Calendar/Calendar"

export default function App() {

  const components = [
    {
      id: 'Calendar',
      component: <Calendar/>
    }
  ]
  return (
    <View style={styles.container}>
      <FlatList
      data={components}
      renderItem={({item})=> {
        <Text>{item.id}</Text>
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
    alignItems: 'center',
    justifyContent: 'center',
  },
});
