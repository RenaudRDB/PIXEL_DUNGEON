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
	<>
		<View style={{ 
			flex: 1, 
			justifyContent: 'center', 
			alignItems: 'center',
			backgroundColor: 'lightblue',
			width: 50,
			}}>
		<Text>Vous êtes lvl 0</Text>
		<Text>Vous avez gagné 10Xp</Text>
	</View>
	<Text>Entrainement</Text>
		<View style={{ flex: 2, justifyContent: 'center', alignItems: 'center', backgroundColor: 'turquoise'}}>
		<Text>Entrainement de force</Text>
	</View>
	</>
      
    
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <>
		<Layout>

     	 </Layout>
		<NavigationContainer documentTitle={"Pixel Dungeon"}>
			<Tab.Navigator>
			<Tab.Screen name="Home" component={HomeScreen} />
			<Tab.Screen name="GoldScreen" component={GoldScreen} />
			<Tab.Screen name="XpScreen" component={XpScreen} />
			<Tab.Screen name="Settings" component={SettingsScreen} />
			</Tab.Navigator>
		</NavigationContainer>
    </>
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
