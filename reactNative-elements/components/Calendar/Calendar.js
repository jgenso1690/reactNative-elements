import React, {useEffect, useRef, useState} from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
// import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import Day from "./Day";
import moment, {duration, subtract} from "moment";

const Calendar = () => {

  const flatListRef = useRef();
  const today = moment();
  const [ selectedDay, setSelectedDay ] = useState(21);
  const threeWeeksBeforeToday =  moment().subtract(3, 'weeks');
  const threeWeeksAfterToday = moment().add(3, 'weeks');
  
  const getListDate = (selected) => {
    let dateList = [];
    let current = threeWeeksBeforeToday;
    let id = 0
    while (current.toString().slice(0,10) !== threeWeeksAfterToday.toString().slice(0,10)) {
      dateList.push({id:id, date: current.toString().slice(0,10)});
      id = id+1;
      current = current.add(1, 'day');
    }
    if (selected == undefined) {
      if (today !== undefined) {
        let currentSelectedDay = dateList.filter((date)=> {
          if ( date.date == today.toString().slice(0,10)) return true
        })[0];
        setSelectedDay(currentSelectedDay.id)
      } 
    } 
    return dateList;
    
  }

  const [ currentDateList, setCurrentDateList ] = useState([]);

  const goBack = () =>{ 
    setSelectedDay(21)
  }

  useEffect(()=>{
    if (currentDateList.length == 0 ) {
      setCurrentDateList(getListDate(selectedDay))
    } else {
      flatListRef.current.scrollToIndex({index: selectedDay, animated: true, viewPosition: 0.5}) 
    }
  })

  useEffect (()=> {
    if (flatListRef.current && selectedDay !== undefined && currentDateList.length > 0) {
      flatListRef.current.scrollToIndex({index: selectedDay, animated: true, viewPosition: 0.5}) 
    }
  }, [selectedDay])


  return (
    <View style={{ }}>
      <TouchableOpacity style={{alignSelf: 'flex-end', margin: 10}} onPress={goBack}>
        <Text>Today</Text>
      </TouchableOpacity>
      <FlatList
      ref={flatListRef}
      horizontal={true}
      data={currentDateList}
      onScrollToIndexFailed={(error)=>{
        const index = error?.index? error.index : 0;
        setTimeout(()=>flatListRef.current.scrollToIndex({index:index, animated: true, viewPosition: 0.5}, 200))
        }
      }
      style={{margin: 20, alignSelf: 'flex-start',borderWidth: 0.5, }}
      renderItem={({item, index}) => {
        if (index==selectedDay) flatListRef.current.scrollToIndex({index: selectedDay, animated: true, viewPosition: 0.5})
        return(
          <Day
          index={index}
            date={item.date}
            selectedDay={selectedDay}
            setSelectedDay={(state)=> setSelectedDay(state)}
            isSelected={index==selectedDay}
            />
          )
        }}
      keyExtractor={item => item.id}

      />

    </View>
  )
  
}

export default Calendar;
