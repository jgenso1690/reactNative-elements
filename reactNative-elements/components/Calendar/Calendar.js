import React, {useState} from "react";
import { View, Text, FlatList} from "react-native";
// import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import Day from "./Day";
import moment, {duration, subtract} from "moment";

const Calendar = () => {

  const today = moment();
  const threeMonthsBeforeToday =  moment().subtract(3, 'months');
  const threeMonthsAfterToday = moment().add(3, 'months');
  
  const getListDate = () => {
    let dateList = [];
    let current = threeMonthsBeforeToday;
    let id = 0

    while (current.toString().slice(0,10) !== threeMonthsAfterToday.toString().slice(0,10)) {
      dateList.push({id:id, date: current.toString().slice(0,10)});
      id = id+1;
      current = current.add(1, 'day');
    }

    return dateList

  }

  const [ dateList, setDateList ] = useState(getListDate())

  return (
    <View style={{ flex:1 }}>
      <FlatList
      horizontal={true}
      data={dateList}
      style={{backgroundColor: 'red'}}
      renderItem={({item}) => {
        console.log('i', item.date.slice(8))
        return(
          <Day
            date={item.date}
            />
          )
        }}
      keyExtractor={item => item.id}

      />

    </View>
  )
  
}

export default Calendar;
