import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

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