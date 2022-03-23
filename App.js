import * as React from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Layout } from './src/components/Layout';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>PixelDungeon</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings</Text>
    </View>
  );
}
function GoldScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>GoldScreen</Text>
    </View>
  );
}
function XpScreen() {
  return (
	<View>
		<View style={{ 
			justifyContent: 'center', 
			alignItems: 'center',
			backgroundColor: 'skyblue',
			height:100,
		}}>
			<Text>Vous êtes lvl 0</Text>
			<Text>Vous avez gagné 10Xp</Text>
		</View>
		<Text 
			style={{  
			textAlign: 'center',
			backgroundColor: 'lightgrey',
			borderWidth: 1,
			height:20,
			}}>Entrainement
		</Text>
		<View style={{ 
			height:50,
			alignItems: 'flex-start',
			justifyContent: 'space-between',
			backgroundColor: 'turquoise'}}>
			<Text>Entrainement de force</Text>
			<View style={{backgroundColor:'red',
		width:50,
		alignItems:'flex-end',}}>
				<Text>20 XP</Text>
			</View>
		</View>
		<View style={{ 
			height:50,
			alignItems: 'flex-start',
			justifyContent: 'space-between',
			backgroundColor: 'turquoise',
			marginTop: 5}}>
			<Text>Entrainement de vie</Text>
			<View backgroundColor='red'>
				<Text>20 XP</Text>
			</View>
		</View>
		<View style={{ 
			height:50,
			alignItems: 'flex-start',
			justifyContent: 'space-between',
			backgroundColor: 'turquoise',
			marginTop: 5}}>
			<Text>Entrainement de défense</Text>
			<View backgroundColor='red'>
				<Text>20 XP</Text>
			</View>
		</View>
	</View>
      
    
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
		<Layout>
      <NavigationContainer documentTitle={"Pixel Dungeon"}>
        <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="GoldScreen" component={GoldScreen} />
        <Tab.Screen name="XpScreen" component={XpScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
