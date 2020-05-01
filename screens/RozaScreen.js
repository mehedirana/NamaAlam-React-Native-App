import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MyHeader from '../components/MyHeader'

const RozaScreen = () => {
    return (
        <View style={styles.container}>
            <MyHeader />
            <Text>I m from Roza!</Text>
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