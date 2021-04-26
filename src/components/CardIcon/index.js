import React from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';
import CostumIcon from "../CostumIcon";
const { width } = Dimensions.get("window");
import colors from '../../../assets/colors';

const CardIcon = ({ item }) => {
    return (
        <View style={styles.card}>
            <View
                style={styles.icon}
            >
                {typeof item.icon === "string" ?
                    <CostumIcon name={item.icon} size={30} color="#ff8700" />
                    :
                    item.icon
                }
            </View>
            <Text
                style={styles.text}
            >
                {item.title}
            </Text>
        </View>
    )
}

export default CardIcon;

const styles = StyleSheet.create({

    card: {
        margin: 8,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: 115,
        backgroundColor: "#fff",
        marginHorizontal: 4,
        width: (width - 70) / 3,
        borderRadius: 10,
        elevation: 1,
        padding: 5
    },
    icon: {
        backgroundColor: colors.backgroundIcon,
        width: 60,
        height: 60,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 12,
        fontFamily: 'Inter_400Regular',
        marginTop: 10,
        textAlign: 'center',
        color: '#939498'
    }
});

