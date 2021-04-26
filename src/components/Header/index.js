import React from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';
import colors from '../../../assets/colors';
import { Feather } from '@expo/vector-icons';

const Header = (props) => {
    return (
        <View style={{ height: 150, flexDirection: 'row', paddingVertical: 20, paddingHorizontal: 30 }}>
            <View style={{ flex: .8, flexDirection: 'column' }} >
                <Text style={{ fontSize: 14, color: colors.subText, fontFamily: 'Inter_300Light' }}>
                    Saldo em conta
                </Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }} >
                    <Text style={{ fontSize: 22, color: colors.subText, fontFamily: 'Inter_600SemiBold' }}>
                        R$ <Text style={{ fontSize: 22, color: '#fff', fontFamily: 'Inter_600SemiBold' }}>{props.user.value}</Text>
                    </Text>
                    <Feather style={{ marginLeft: 20 }} name="eye" size={24} color="#fff" />
                </View>
                <Text style={{ fontSize: 14, color: colors.subText, fontFamily: 'Inter_300Light' }}>
                    Atualizado neste momento
                </Text>
            </View>
            <View style={{ flex: .2, flexDirection: 'row', justifyContent: 'flex-end' }} >
                <Image
                    style={styles.tinyLogo}
                    source={{
                        uri: props.user.img,
                    }}
                />
            </View>
        </View>
    )
}

export default Header;

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
    },
    tinyLogo: {
        width: 50,
        height: 50,
        borderRadius: 25
    },
    logo: {
        width: 66,
        height: 58,
    },
});

