import React from 'react';
import { Image, Text, View } from 'react-native';
import colors from '../../../assets/colors';
import calulares from '../../../assets/images/calulares.jpg';

const InterShop = () => {

    return (
        <View style={{ flex: 1,}}>
            <View style={{  borderWidth: 1, borderRadius: 10, borderColor: colors.border, flexDirection: 'row', marginHorizontal: 30, marginTop: 20 }}>
                <View style={{ flex: .3, flexDirection: 'column', justifyContent: 'center', padding: 15 }}>
                    <Text style={{ fontSize: 22 }}>
                        Inter
                    </Text>
                    <Text style={{ fontSize: 22 }}>
                        Shop
                    </Text>
                    <Text style={{ fontSize: 12, marginTop: 20 }}>
                        Compre e ganhe cashback
                    </Text>
                </View>
                <View style={{ flex: .7,  height: 160, }}>
                    <Image
                        style={{
                            height: 160,
                            width: 220,
                            resizeMode: 'stretch'
                        }}
                        source={calulares}
                    />
                </View>
            </View>
        </View>
    )
}

export default InterShop;