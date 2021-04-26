import React from 'react';
import { Text, View } from 'react-native';
import colors from '../../../assets/colors';
import { AntDesign } from '@expo/vector-icons';
const CardNotification = () => {

    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 30 }}>
            <View style={{ flex: .81, paddingRight: 20 }}>
                <Text style={{ color: colors.primary, fontFamily: 'Inter_700Bold', fontSize: 14 }}>
                    {'TÁ ON: 100% DE CASHBACK <3'}
                </Text>
                <Text style={{ color: '#939498', fontFamily: 'Inter_400Regular', fontSize: 12 }}>
                    {'ÚLTIMOS DIAS: 100% de cashback na 1º parcela do Cartão + Protegido. Sorteios mensais de R$5.000 + coberturas para perda e roubo do seu cartão.'}
                </Text>
            </View>
            <View style={{ flexDirection: 'column', justifyContent: 'center', flex: .1 }}>
                <AntDesign name="close" size={28} color={colors.primary} />
            </View>
        </View>
    )
}

export default CardNotification;