import * as React from 'react';
import { ActivityIndicator,	StyleSheet,	View, Modal, Text, Pressable,} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { Layout } from './src/components/Layout';
import { LoginScreen } from './src/screens/LoginScreen';
import { TabNavigator } from './src/navigators/TabNavigator';
import { AuthProvider, useAuth, } from './src/contexts/AuthProvider';


export default function App() {
  return (
    <Layout>
			<AuthProvider>
				<NavigationContainer>
					<Root />
				</NavigationContainer>
			</AuthProvider>
    </Layout>
  );
}
const Root = () => {
	const { currentUser, loading, error, cleanError } = useAuth();

	if (error) {
		return (
			<View>
				<Modal animationType="slide" transparent={true} visible={true}>
					<View>
						<View>
							<Text>{error}</Text>
							<Pressable
								style={[styles.button, styles.buttonClose]}
								onPress={() => cleanError()}
							>
								<Text>Hide Modal</Text>
							</Pressable>
						</View>
					</View>
				</Modal>
			</View>
		);
	}
	if (loading) {
		return (
			<View style={styles.spinnerContainer}>
				<ActivityIndicator size="large" color="red" />
			</View>
		);
	}

	return currentUser !== null ? <TabNavigator /> : <LoginScreen />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
		borderRadius: 20,
		padding: 10,
		elevation: 2,
	},
	buttonClose: {
		backgroundColor: "red",
	},
});
