import React, {useState, useRef} from "react";
import { Text, PanResponder } from "react-native";
import Animated from "react-native-reanimated";

const Card = (props) =>{

    const {
        id,
        img
    } = props

    const [ panX, setPanX] = useState(new Animated.Value(0));

    const panResponder = useRef(
        PanResponder.create({
            onStartShouldSetPanResponder: () => false,
            onMoveShouldSetPanResponder: () => true,
            onPanResponderMove: (event, gesture) => {
                // setPanX(gesture.dx)
            },
        })
        ).current

    return(
        
        <Animated.View
            {...panResponder.panHandlers}
            ref={panResponder}
            style={{
                // transform: [{translateX: panX},{translateY: 0}]
                shadowOffset:{width:0, height:2}, shadowColor: '#595c5b', elevation:5, shadowOpacity: 0.20, borderRadius: 10, 
                justifyContent: 'center', alignItems: 'center',
            }}
                >
            {img}
        </Animated.View>
            
        )
}

export default Card;
