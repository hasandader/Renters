import React, { useRef } from 'react';
import { View, FlatList } from 'react-native';
import styles from './Style';
import Header from '../../components/Header/Header';
import NotifCard from './components/NotifCard';
import { useScrollToTop } from '@react-navigation/native';

const notifications = require('../../data/notifications.json');

export default function Notifications(props) {
    const ref = useRef(null);

    useScrollToTop(ref);

    return (
        <View style={styles.container}>
            <Header title='الإشعارات' sideMenu />
            <FlatList
                ref={ref}
                contentContainerStyle={styles.list}
                data={notifications.data}
                renderItem={({ item }) => (
                    <NotifCard
                        statusID={item.statusID}
                        dateTime={item.dateTime}
                        title={item.title}
                        notifInfo={item.notifInfo}
                        isRed={item.isRed}
                    />
                )}
            />

        </View>
    )
}