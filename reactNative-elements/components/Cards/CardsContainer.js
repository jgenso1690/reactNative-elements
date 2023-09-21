import React, {useState} from "react";
import { View, Text, FlatList} from "react-native";
import { PanGestureHandler } from "react-native-gesture-handler";

const CardsContainer = () => {

    const card = 
        <View style={{width: 200, height: 100, borderWidth: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>
                Card
            </Text>
        </View>;

    const { 
        gestureHandler,
        translation,
        velocity,
        state,
     } = usePanGestureHandler();

     const translateX = withOffset(translation.x, state);

    return (
        <View style={{ justifyContent: 'center', alignItems: 'center',marginTop: 20}}>
            <PanGestureHandler {...gestureHandler}>
            {/* Card component */}
            {/* {[card, card, card].map(({type}, index) =>{
                    return
                )
                })
            } */}
            </PanGestureHandler>
        </View>
    )

}

export default CardsContainer;
