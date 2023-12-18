import React from "react";
import {View, Text, TouchableOpacity} from "react-native";

const Day = ({date, selectedDay, setSelectedDay, isSelected, index}) => {
  return (
    <TouchableOpacity onPress={()=>setSelectedDay(index)} style={{borderWidth: 0.5, padding: 8, fontSize: 18, height: 'auto', minWidth: 45, backgroundColor: isSelected? '#669181' : 'white' }}>
      <View style={{alignItems: 'center'}}>
      <Text style={{color: isSelected ? 'white' : '#595c5b'}}>
        {date.slice(0,3)}
      </Text>
      <Text style={{color: isSelected ? 'white' : '#595c5b'}}>
        {date.slice(8)}
      </Text>
      <Text style={{color: isSelected ? 'white' : '#595c5b'}}>
        {date.slice(4,7)}
      </Text>
      </View>
    </TouchableOpacity>
  )
}


export default Day;
