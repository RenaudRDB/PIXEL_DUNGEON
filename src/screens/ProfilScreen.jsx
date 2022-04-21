import { Text, Button, View } from 'react-native';
import { useAuth } from '../contexts/AuthProvider';

export const ProfilScreen = () => {
  const { logout, currentUser } = useAuth();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile : {currentUser.email}</Text>
      <Button title="Logout" onPress={() => logout()} />
    </View>
  );
}