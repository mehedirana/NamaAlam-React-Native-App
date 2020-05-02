import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MyHeader from './components/MyHeader';
import NamajScreen from './screens/NamajScreen';
import RozaScreen from './screens/RozaScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

const Drawer = createDrawerNavigator();
export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Namaj">
          <Drawer.Screen name="নামায" component={NamajScreen}/>
          <Drawer.Screen name="রোজা" component={RozaScreen}/>
        </Drawer.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
 
  },
});
