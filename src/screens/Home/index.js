import React, { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import colors from '../../../assets/colors';
import CarouselItens from '../../components/CarouselItens';
import CollapsibleCard from '../../components/CollapsibleCard';
import Header from '../../components/Header';
import InterShop from '../../components/InterShop';
import CardNotification from '../../components/Notification';

const USER_DEFAULT = {
    value: '1.365.468,57',
    img: 'https://media-exp1.licdn.com/dms/image/C4E03AQEN3sVTEBApFA/profile-displayphoto-shrink_200_200/0/1603541684051?e=1623283200&v=beta&t=6mt3tBwQSYx3vfZBKz5H8cX4zlF4FWNRF9WV5ealapU'
}

const Home = () => {

    const [user, setUser] = useState(USER_DEFAULT);
    const [eyes, setEyes] = useState(true);

    return (
        <View style={{ flex: 1, marginTop: 30, }}>
            <ScrollView contentContainerStyle={{ flexGrow: 1, }}>

                <Header user={user} onClickEyes={a => setEyes(a)} />

                <View style={{ flex: 1, position: 'relative', backgroundColor: colors.background }}>
                    <CollapsibleCard />
                    <CardNotification />
                    <CarouselItens />
                    <View style={{ flex: 1, backgroundColor: '#fff', marginTop: 30 }}>
                        <InterShop />
                        
                    </View>

                </View>
            </ScrollView>
        </View>

    )
}

export default Home;