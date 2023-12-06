import React, {useEffect, useState} from "react";
import { View, Text } from "react-native";
import moment from "moment";

const RemindersComponent = (props) => {
    const {
        selectedDay,
    } = props;

    const months = ["January","February","March","April","May","June","July",
    "August","September","October","November","December"];

    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const [currentMonth, setCurrentMonth] = useState();
    const [currentDayNumber, setCurrentDayNumber] = useState();
    const [currentDayName, setCurrentDayName] = useState();

    useEffect(()=>{
       if (selectedDay !== undefined) {
        let monthFullName = months.filter(month=> month.slice(0,3) == selectedDay["date"].slice(4,7))
        setCurrentMonth(monthFullName[0])
        setCurrentDayNumber(selectedDay["date"].slice(-2))
        let dayFullName = dayNames.filter(dayName=> dayName.slice(0,3) == selectedDay["date"].slice(0,3));
        setCurrentDayName(dayFullName[0])
       }
    },[selectedDay])
    
    return(

        <View style={{marginTop: 20}}>
            <Text>
                {currentMonth}
            </Text>
            <Text>
                 {currentDayName} {currentDayNumber}
            </Text>

            <View>
                <Text>
                    To do 2
                </Text>
                <Text>
                    To do 3
                </Text>
                <Text>
                    To do 4
                </Text>
                <Text>
                    To do 5
                </Text>
            </View>

        </View>
    )
}

export default (RemindersComponent);
