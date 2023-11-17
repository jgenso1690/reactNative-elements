import React from "react";
import { View, Text, SafeAreaView, ScrollView, Dimensions } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import Animated from "react-native-reanimated";
import Card from "./CardComponent";
import Card1 from "../../assets/Vectorcard1.js";
import Card2 from "../../assets/Vectorcard2.js";
import Card3 from "../../assets/Vectorcard3.js";
import Vectorcard1 from "../../assets/Vectorcard1.js";

const WIDTH = Dimensions.get('window').width;

const CardsContainer = () => {


    const cardsData = [
         {
            id: '0001',
            img: <Card1/>,
            }
        , {
            id: '0002',
            img: <Card2/>,
            }
        , {
            id: '0003',
            img: <Card3/>,
            }
    ]
    
    return (
        <View style={{ justifyContent: 'center', alignItems: 'center',marginTop: 20}}>
            <Text>
                My Wallet
            </Text>
            <Animated.FlatList
                style={{ flexDirection: 'row', margin: 10}}
                contentContainerStyle={{}}
                horizontal
                keyExtractor={i=> i.id}
                data={cardsData}

                renderItem={(({item, index})=>{
                    return(
                        <View
                        key={item.id}
                        style={{ paddingHorizontal: 10, position:'relative',
                        }}
                        >
                            <Card
                            id={index}
                            img={item.img}
                            />
                        </View>
                    )}
                )}
                    
            />
        </View>
    )

}

export default CardsContainer;
