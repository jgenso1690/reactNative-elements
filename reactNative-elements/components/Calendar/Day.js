import React from "react";
import {View, Text} from "react-native";

const Day = ({date}) => {

  console.log(date.slice(8,2))
  return (
    <View style={{}}>
      <Text>
        {date.slice(8)}
      </Text>
    </View>
  )
}


export default Day;
