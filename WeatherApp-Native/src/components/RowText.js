import React from "react";
import { View, Text } from "react-native";

const RowText = (props) => {
    // const { meesageOne, messageTwo } = props
    const { containerStyles, messageOne, messageTwo, messageOneStyle, messageTwoStyle } = props
    return (
        <View style={containerStyles}>
            <Text style={messageOneStyle}>{messageOne}</Text>
            <Text style={messageTwoStyle}>{messageTwo}</Text>
        </View>)
}

export default RowText