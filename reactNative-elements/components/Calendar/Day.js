import React from "react";
import {View, Text, TouchableOpacity} from "react-native";

const Day = ({date, selectedDay, setSelectedDay, isSelected, index}) => {
  return (
    <TouchableOpacity onPress={()=>setSelectedDay(index)} style={{borderWidth: 0.5, padding: 8, fontSize: 18, height: 'auto', minWidth: 45, }}>
      <View style={{alignItems: 'center'}}>
      <Text style={{color: isSelected ? 'blue' : 'black'}}>
        {date.slice(0,3)}
      </Text>
      <Text style={{color: isSelected ? 'blue' : 'black'}}>
        {date.slice(8)}
      </Text>
      <Text style={{color: isSelected ? 'blue' : 'black'}}>
        {date.slice(4,7)}
      </Text>
      </View>
    </TouchableOpacity>
  )
}


export default Day;
