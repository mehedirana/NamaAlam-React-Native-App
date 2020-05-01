import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MyHeader from './components/MyHeader';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

const Drawer = createDrawerNavigator();
export default function App() {
  return (
    <View style={styles.container}>
      <MyHeader/>
      <Text>Welcome!</Text>
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name="Namaj" component={NamajScreen}/>
          <Drawer.Screen name="Roza" component={RozaScreen}/>
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
