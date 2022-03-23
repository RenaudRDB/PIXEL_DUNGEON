import * as React from 'react';

import { TabNavigator } from './src/navigators/TabNavigator';
import { StyleSheet } from 'react-native';
import { Layout } from './src/components/Layout';
import { NavigationContainer } from '@react-navigation/native';
import { LoginScreen } from './src/screens/LoginScreen';


export default function App() {
  return (
	  <Layout>
      <NavigationContainer>
        <TabNavigator />
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
