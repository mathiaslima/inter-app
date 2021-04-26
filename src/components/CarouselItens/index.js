import React from 'react';

import { Text, View, Dimensions, StyleSheet, TouchableOpacity, Image } from 'react-native';

import Carousel from 'react-native-snap-carousel'; // Version can be specified in package.json

import { scrollInterpolator, animatedStyles } from '../../utils/animations';
import { Feather } from '@expo/vector-icons';
import colors from '../../../assets/colors';
import cashback from '../../../assets/images/cashback.jpg'
import car from '../../../assets/images/car.jpg'

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.9);
const ITEM_HEIGHT = Math.round(ITEM_WIDTH * 3 / 5);

const DATA = [];
for (let i = 0; i < 10; i++) {
    DATA.push(i)
}

const CarouselItens = () => {


    const _renderItem = ({ item, index }) => {

        if (index === 0) {
            return (
                <View style={styles.itemContainer}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                        <Text style={styles.title}>Extrato de cashback</Text>
                        <Feather name="eye" size={24} color={colors.primary} />
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <View style={{ flex: .5, flexDirection: 'column', }}>
                            <Text style={styles.subTitle}>
                                Ganhe cashback
                        </Text>
                            <Text style={styles.text}>
                                Nas compras em vários produtos no inter.
                        </Text>
                            <View style={{ flexDirection: 'row' }}>
                                <TouchableOpacity style={{ paddingVertical: 8, paddingHorizontal: 20, borderWidth: 1, borderRadius: 5, borderColor: colors.primary }}>
                                    <Text>SAIBA MAIS</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{ flex: .5, flexDirection: 'row', justifyContent: 'center' }} >
                            <Image
                                style={{
                                    height: 150,
                                    width: 150,
                                    resizeMode: 'stretch'

                                }}
                                source={cashback}
                            />
                        </View>
                    </View>

                </View>
            )
        }

        if (index === 1) {
            return (
                <View style={styles.itemContainer}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                        <Text style={styles.title}>Plataforma de Proteção inter</Text>
                        {/* <Feather name="eye" size={24} color={colors.primary} /> */}
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>

                        <View style={{ flex: .6, flexDirection: 'row', }} >
                            <Image
                                style={{
                                    height: 120,
                                    width: 120,
                                    resizeMode: 'stretch'

                                }}
                                source={car}
                            />
                        </View>
                        <View style={{ flex: .4, flexDirection: 'column', }}>
                            <Text style={styles.subTitle}>
                                {'Descubra como cuidar do que importa para você.'}
                            </Text>

                            <View style={{ flexDirection: 'row' }}>
                                <TouchableOpacity style={{ paddingVertical: 8, paddingHorizontal: 20, borderRadius: 5, borderColor: colors.primary }}>
                                    <Text style={{ color: colors.primary }}>SAIBA MAIS</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                </View>
            )
        }

        return (
            <View style={styles.itemContainer}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                    <Text style={styles.title}>Extrato de cashback</Text>
                    <Feather name="eye" size={24} color={colors.primary} />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <View style={{ flex: .5, flexDirection: 'column', }}>
                        <Text style={styles.subTitle}>
                            Ganhe cashback
                        </Text>
                        <Text style={styles.text}>
                            Nas compras em vários produtos no inter.
                        </Text>
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity style={{ paddingVertical: 8, paddingHorizontal: 20, borderWidth: 1, borderRadius: 5, borderColor: colors.primary }}>
                                <Text>SAIBA MAIS</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ flex: .5, flexDirection: 'row', justifyContent: 'center' }} >
                        <Image
                            style={{
                                height: 150,
                                width: 150,
                                resizeMode: 'stretch'

                            }}
                            source={cashback}
                        />
                    </View>
                </View>

            </View>
        );
    }

    return (
        <View>
            <Carousel
                // ref={(c) => this.carousel = c}
                data={DATA}
                renderItem={_renderItem}
                sliderWidth={SLIDER_WIDTH}
                itemWidth={ITEM_WIDTH}
                containerCustomStyle={styles.carouselContainer}
                contentContainerCustomStyle={styles.sliderContentContainer}
                inactiveSlideShift={0}
                scrollInterpolator={scrollInterpolator}
                slideInterpolatedStyle={animatedStyles}
                useScrollView={true}
            />
        </View>
    )
}

export default CarouselItens;

const styles = StyleSheet.create({
    carouselContainer: {
        marginTop: 30,

    },
    itemContainer: {
        width: ITEM_WIDTH - 25,
        height: ITEM_HEIGHT,
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 15,
        flexDirection: 'column',
    },
    itemLabel: {
        color: '#000',
        fontSize: 24
    },
    counter: {
        marginTop: 25,
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    sliderContentContainer: {
        paddingVertical: 0 // for custom animation
    },
    title: {
        fontSize: 14,
        fontFamily: 'Inter_700Bold',
        color: '#000'
    },
    subTitle: {
        fontSize: 14,
        fontFamily: 'Inter_500Medium',
        color: '#000'
    },
    text: {
        fontSize: 12,
        fontFamily: 'Inter_400Regular',
        color: '#000',
        marginVertical: 10
    }
});