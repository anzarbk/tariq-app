import React from "react"
import { SafeAreaView, StyleSheet, Text, FlatList, StatusBar, ImageBackground } from "react-native"
import ListItem from "../components/listItem"

const DATA = [
    {
        "dt_txt": "2022-08-30 16:00:00",
        "main": {
            "temp_min": 296.34,
            "temp_max": 298.24,
        },

        "weather": [
            {
                "main": "Rain",
                "description": "light rain",
            }
        ],
    },

    {
        "dt_txt": "2022-08-30 17:00:00",
        "main": {
            "temp_min": 296.2,
            "temp_max": 296.31,
        },
        "weather": [
            {
                "main": "Rain",
                "description": "light rain",
            }
        ],
    },

    {
        "dt_txt": "2022-08-30 18:00:00",
        "main": {
            "temp_min": 292.84,
            "temp_max": 294.94,
        },
        "weather": [
            {
                "main": "Rain",
                "description": "light rain",
            }
        ],

    }
]


const UpcomingWeather = () => {
    const renderItem = ({ item }) => {
        return (
            <>
                <ListItem
                    condition={item.weather[0].main}
                    dt_txt={item.dt_txt}
                    min={item.main.temp_min}
                    max={item.main.temp_max}
                /></>
        )
    }
    const { container, image } = style
    return (
        <SafeAreaView style={container}>
            <ImageBackground source={require('../../assets/thunderstorm.jpg')} style={image} >
                <Text>Upcoming Weather</Text>
                <FlatList data={DATA} renderItem={renderItem} keyExtractor={(item) => item.dt_txt} />
            </ImageBackground>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        backgroundColor: 'royalblue'
    },
    image: {
        flex: 1
    }
})
export default UpcomingWeather