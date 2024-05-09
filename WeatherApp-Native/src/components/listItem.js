import { Feather } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ListItem = (props) => {
    const { dt_txt, min, max, condition } = props
    const { item, date, temp } = style
    return (
        <View style={item}>
            <Feather name={'sun'} size={50} color={'white'} />
            <Text style={date}>{dt_txt}</Text>
            <Text style={temp}>{min}</Text>
            <Text style={temp}>{max}</Text>
        </View>
    )
}


const style = StyleSheet.create({
    item: {
        padding: 12,
        marginVertical: 8,
        marginHorizontal: 16,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderWidth: 5,
        backgroundColor: 'pink'
    },
    temp: {
        color: "white",
        fontSize: 16
    },
    date: {
        color: "white",
        fontSize: 15
    },
    image: {
        flex: 1
    }
})

export default ListItem