import {View,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet}
  from "react-native";
  // import { NavigationContainer } from '@react-navigation/native';
  // import { createNativeStackNavigator } from '@react-navigation/native-stack';

  //const Stack = createNativeStackNavigator();
  
  export const Layout = ({children}) => {

    function StackScreen() {  
      return (
        <Stack.Navigator>
          <Stack.Screen
            name="Action"
            component={HomeScreen}
            options={{ title: 'My home' }}
          />
        </Stack.Navigator>
      );
    }
  
    if (Platform.OS === 'android') {
      return (
      <View style={styles.container}>
        <StatusBar barStyle="default" />
        {children}
      </View> 
      );
    }else{
      return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="default"/>
        {children}
      </SafeAreaView>
      )
    }
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    }
  }); 


  // import * as React from 'react';
  // import { View, Text } from 'react-native';
  // import { NavigationContainer } from '@react-navigation/native';
  // import { createNativeStackNavigator } from '@react-navigation/native-stack';

  // const Stack = createNativeStackNavigator();

  // function HomeScreen() {
  //   return (
  //     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
  //       <Text>Home Screen</Text>
  //     </View>
  //   );
  // }
