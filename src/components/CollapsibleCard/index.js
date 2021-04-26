import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import CardIcon from '../CardIcon';
import SVGImageLoader from '../SVGImageLoader';
import Collapsible from 'react-native-collapsible';
import down from '../../../assets/images/chevron-down.png';
import { FontAwesome } from '@expo/vector-icons'; 

const DATA_ICON_BASE = [
    {
        icon: "arrows-rotate",
        title: "Transferência",
    },
    {
        icon: "pix",
        title: "Pix",
    },
    {
        icon: <FontAwesome name="line-chart" size={30} color="#ff8700" />,
        title: "Investimentos",
    },
    {
        icon: "card",
        title: "Cartões",
    },
    {
        icon: "gift",
        title: "Gift Card",
    },
    {
        icon: "billet",
        title: "Pagamentos",
    },
    {
        icon: "insurance",
        title: "Seguros",
    },
    {
        icon: "bill",
        title: "Depósito por boleto",
    },
    {
        icon: "check-paper",
        title: "Depósito por cheque",
    },
    {
        icon: "mei",
        title: "Conta MEI",
    },
    {
        icon: "schedule",
        title: "Agendamentos",
    },
    {
        icon: "salary-portability",
        title: "Portabilidade de salário",
    },
    {
        icon: "hand-money",
        title: "Empréstimo",
    },
    {
        icon: "house-money",
        title: "Financiamento Imobiliário",
    },
    {
        icon: "automatic-debits",
        title: "Débito automático",
    },
    {
        icon: "key",
        title: "Consórcio",
    },
    {
        icon: "exchange",
        title: "Câmbio",
    },
    {
        icon: "recharge-phone",
        title: "Recarga",
    },
    {
        icon: "qr-code-scan",
        title: "Interpag",
    },
];

const CollapsibleCard = (props) => {

    const [cardInits, setCardInits] = useState([]);
    const [moreCards, setMoreCards] = useState([]);
    const [more, setMore] = useState(true);

    useEffect(() => {
        let array = [];
        let moreArray = [];
        DATA_ICON_BASE.map((item, index) => {

            if (index <= 2) {
                array.push(item)
            } else {
                moreArray.push(item)
            }
        })
        setMoreCards(moreArray)
        setCardInits(array)
    }, [])

    const viewMore = () => {

        setMore(!more)
    }

    return (
        <View style={{ position: 'relative', top: -40, marginBottom: -40 }}>
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', paddingHorizontal: 20 }}>
                {cardInits.map(item => <CardIcon item={item} />)}
            </View>
            {more && <TouchableOpacity onPress={() => viewMore()}>
                <View style={{ flexDirection: 'row', justifyContent: 'center' }} >
                    <Image
                        style={{

                        }}
                        source={down}
                    />
                </View>
            </TouchableOpacity>}
            <Collapsible collapsed={more} align="center">
                <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', paddingHorizontal: 20 }}>
                    {moreCards.map(item => <CardIcon item={item} />)}
                </View>
            </Collapsible>
            {!more && <TouchableOpacity onPress={() => viewMore()}>
                <View style={{ flexDirection: 'row', justifyContent: 'center' }} >
                    <Image
                        style={{
                            transform: [{ rotate: '180deg' }]
                        }}
                        source={down}
                    />
                </View>
            </TouchableOpacity>}
        </View>
    )
}

export default CollapsibleCard;