import { Text,Button, View } from 'react-native';
import { useAuth } from '../contexts/AuthProvider';

export const ProfilScreen = () => {
  const { logout } = useAuth()
  return (
	<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>
      Profile
    </Text>
    <Button title="Logout" onPress={() => logout()} />
	</View>
  );
}