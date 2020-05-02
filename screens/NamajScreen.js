import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import MyHeader from '../components/MyHeader';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import ViewHolder from '../components/ViewHolder';

const NamajScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <MyHeader name="নামায"/>
            <ScrollView>
                <ViewHolder abc="ফজর" />
                <ViewHolder abc="যোহর" />
                <ViewHolder abc="আছর" />
                <ViewHolder abc="মাগরিব" />
                <ViewHolder abc="এশা" />
            </ScrollView>
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