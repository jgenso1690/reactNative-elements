import React from "react";
import {View, Text} from "react-native";

const Day = ({date}) => {

  return (
    <View style={{borderWidth: 0.5, padding: 8, fontSize: 18, height: 'auto', minWidth: 45}}>
      <View style={{alignItems: 'center'}}>
      <Text>
        {date.slice(0,3)}
      </Text>
      <Text>
        {date.slice(8)}
      </Text>
      </View>
    </View>
  )
}


export default Day;
