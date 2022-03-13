import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Layout } from './src/components/Layout';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';

export default function App() {
  return (
    <Layout>
        <Text>Non non non, vous n'avez pas dit le mot magique !</Text>
        <NavigationContainer>
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
