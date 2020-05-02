import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Appbar } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';

const MyHeader= (props) =>{

    return (
        <View>
            <Appbar.Header style={{backgroundColor:"#191cd2"}}>
            <Ionicons name="md-menu" size={34} color='#FFF' style={{marginLeft:10}}/>   
              <Text style={{marginLeft:20, fontSize:25, fontWeight:'bold',color:'#FFFF'}}>{props.name}</Text>
            </Appbar.Header>
        </View>
        
        
      );
}

export default MyHeader;