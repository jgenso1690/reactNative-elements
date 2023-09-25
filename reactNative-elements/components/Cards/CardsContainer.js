import React, {useState, useRef} from "react";
import { View, Text, FlatList, PanResponder, TouchableOpacity } from "react-native";
import Animated from "react-native-reanimated";

const CardsContainer = () => {

    const cards = ['card3', 'card2', 'card1'];

    const getCard = (i, text) =>{

        const [ panX, setPanX] = useState(new Animated.Value(0));

        const panResponder = useRef(
            PanResponder.create({
                onStartShouldSetPanResponder: () => false,
                onMoveShouldSetPanResponder: () => true,
                onPanResponderMove: (event, gesture) => {
                    setPanX(gesture.dx)
                },
                onPanResponderRelease: () =>{
                    
                }
            })
            ).current
            
        return(
            <Animated.View
                {...panResponder.panHandlers}
                ref={panResponder}
                key={i}
                style={{
                    transform: [{translateX: panX},{translateY: 1+(i*5)}],
                    backgroundColor: i==0? 'blue' : i == 1 ? 'red' : 'yellow',
                    width: 200, height: 100, borderWidth: 1, justifyContent: 'center', alignItems: 'center', position: 'absolute', top: 30}}>
                    <Text>
                        Card {text}
                    </Text>
            </Animated.View>
                        
                
            )
    }
    
    return (
        <View style={{ justifyContent: 'center', alignItems: 'center',marginTop: 20}}>
                {/* Card component */}
                {cards.map((item, index) =>{
                        return (
                        getCard(index,item)
                        )
                    })
                } 
        </View>
    )

}

export default CardsContainer;
