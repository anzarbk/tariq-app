import React from "react";
import {
    SafeAreaView,
    Text,
    StyleSheet,
    ImageBackground,
    StatusBar,
    View
} from "react-native";
import IconText from "../components/iconText";


const City = () => {
    const { cityName, cityText, container, country, imagelayOut, populationText, populationWrapper, raisSetText, raisSetWrapper, rowLayout } = styles
    return (
        <SafeAreaView style={container}>
            <ImageBackground source={require("../../assets/city.jpg")} style={imagelayOut}>
                <Text style={[cityName, cityText]}>London</Text>
                <Text style={[country, cityText]}>UK</Text>
                <View style={populationWrapper}>
                    <IconText iconName={'user'} iconColor={'red'} bodyText={80000} bodyTextStyles={populationText} />
                </View>
                <View style={[raisSetWrapper, rowLayout]}>
                    <IconText iconName={'sunrise'} iconColor={'white'} bodyText={'06:15:43am'} bodyTextStyles={raisSetText} />
                    <IconText iconName={'sunset'} iconColor={'white'} bodyText={'17:29:53pm'} bodyTextStyles={raisSetText} />
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    imagelayOut: {
        flex: 1
    },
    cityName: {
        fontSize: 40,
    },
    country: {
        fontSize: 30,
    },
    cityText: {
        alignSelf: 'center',
        justifyContent: "center",
        fontWeight: "bold",
        color: 'white'
    },
    populationWrapper: {
        justifyContent: 'center',
        marginTop: 30
    },
    populationText: {
        fontSize: 25,
        marginLeft: 7.5,
        color: 'red',
    },
    raisSetWrapper: {
        justifyContent: "space-around",
        marginTop: 30
    },
    raisSetText: {
        fontSize: 20,
        color: 'white',
    },
    rowLayout: {
        flexDirection: 'row',
        alignItems: 'center',
    }
})
export default City