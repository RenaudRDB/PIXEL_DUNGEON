import * as React from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Layout } from './src/components/Layout';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

function HomeScreen() {
  return (
	<>
		<View style={{flex:2,
		backgroundColor:'darkred',
		marginTop:40,
		marginLeft:40,
		marginRight: 40,
		marginBottom: 100,
		}}>
			<Text style={{
				textAlign: 'center',
				color:'white',
				fontSize: 30
			}}>Voici la futur image</Text>
			<Text style={{
				textAlign: 'center',
				color:'white',
				fontSize: 30
			}}>Nom de l'ennemi</Text>
		</View>
		<View style={{flex:1,
		backgroundColor:'darkgrey'}}>
			<View style={{
				flexDirection: "column",
				alignItems: "flex-start",
			}}>
				<Text style={{ color:'black'}}>Vitesse: 1</Text>
				<Text style={{ color:'white'}}>Dégâts: 1</Text>
				<Text style={{ color:'white'}}>Armure: 0</Text>
			</View>
			<View style={{
				flexDirection: "column",
				alignItems: "flex-end",
			}}>
				<Text style={{ color:'white'}}>Critique: 0%</Text>
				<Text style={{ color:'white'}}>Chance: 0%</Text>
				<Text style={{ color:'white'}}>Puissance: 0x</Text>
			</View>
		</View>
	</>
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
    <View>
		<View style={{ 
			justifyContent: 'center', 
			alignItems: 'center',
			backgroundColor: 'yellow',
			height:100,
		}}>
			<Text>Vous avez: 5 Gold</Text>
		</View>
		<Text 
		style={{  
			textAlign: 'center',
			backgroundColor: 'lightgrey',
			borderWidth: 1,
			height:20,
			}}
			>Achat</Text> 
		<View style={{ 
			height:50,
			alignItems: 'flex-start',
			justifyContent: 'space-between',
			borderWidth: 1,
			backgroundColor: 'darkorange'}}>
			<Text>Entrainement de force</Text>
			<View style={{backgroundColor:'grey',
		width:50,
		alignItems:'flex-end',}}>
				<Text>20 XP</Text>
			</View>
		</View>
		<View style={{ 
			height:50,
			alignItems: 'flex-start',
			justifyContent: 'space-between',
			borderWidth: 1,
			backgroundColor: 'darkorange',
			marginTop: 5}}>
			<Text>Entrainement de vie</Text>
			<View backgroundColor='grey'>
				<Text>20 XP</Text>
			</View>
		</View>
		<Text 
			style={{  
			textAlign: 'center',
			backgroundColor: 'lightgrey',
			borderWidth: 1,
			height:20,
			}}>Amélioration
		</Text>
		<View style={{ 
			height:50,
			alignItems: 'flex-start',
			justifyContent: 'space-between',
			borderWidth: 1,
			backgroundColor: 'darkorange',
			marginTop: 5}}>
			<Text>Entrainement de défense</Text>
			<View backgroundColor='grey'>
				<Text>20 XP</Text>
			</View>
		</View>
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
			borderWidth: 1,
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
			borderWidth: 1,
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
			borderWidth: 1,
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
