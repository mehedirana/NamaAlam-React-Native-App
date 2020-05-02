import React from 'react';
import { StyleSheet, View, ScrollView, Text} from 'react-native';
import MyHeader from '../components/MyHeader'
import ViewHolder from '../components/ViewHolder'

const RozaScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <MyHeader name="রোযা" />
        </View>
    );
}

export default RozaScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',

    },
});