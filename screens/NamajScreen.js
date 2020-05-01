import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MyHeader from '../components/MyHeader'
const NamajScreen = () => {
    return (
        <View style={styles.container}>
            <MyHeader />
            <Text>i m from Namaj!</Text>
        </View>
    );
}

export default NamajScreen;
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
   
    },
  });