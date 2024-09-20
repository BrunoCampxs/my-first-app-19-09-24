import React, {useState} from "react";
//import {useState } from "react-native-gesture-handler";
import {Pressable, Text, TextInput ,View } from "react-native";
export function Form()
{
    const [side, setSide] = useState(0);
    const [area, setArea] = useState(0);
    function calculateArea(){
     
        const result = ((side ** 2)* Math.sqrt(3)) / 4;
        setArea(result)
    }
    return
    (
        <View>
            <View>
            <Text>Lado:</Text>
            <TextInput
            onChangeText={setSide}
            placeholder="Digite o lado em cm"
            inputMode="numeric"
            value="side"
            />
            <Pressable
             title="calcular"
             onPress={ () => calculateArea() }
            />
            </View>
        </View>
    )
}