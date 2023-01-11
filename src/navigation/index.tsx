import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {IRootApp} from '../types';
import {MainApp} from './mainApp';

export const AppRouter = () => {
  const Stack = createNativeStackNavigator<IRootApp>();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Group>
        <Stack.Screen name="Main" component={MainApp} />
      </Stack.Group>
    </Stack.Navigator>
  );
};
