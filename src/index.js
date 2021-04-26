import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import colors from '../assets/colors';
import Home from "./screens/Home";

const Main = () => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: colors.primary, position: 'absolute', width: '100%', height: '100%' }}>
            <Home />
        </SafeAreaView>
    )
}

export default Main;