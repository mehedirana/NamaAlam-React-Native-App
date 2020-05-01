import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Appbar } from 'react-native-paper';

const MyHeader= () =>{

    return (
        <Appbar.Header style={{backgroundColor:"#191cd2"}}>        
          <Appbar.Content
            title="Key of Jannah"
            subtitle="NAMAZ"
          />
         
        </Appbar.Header>
      );
}

export default MyHeader;