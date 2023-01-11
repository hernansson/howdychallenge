import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {HomeScreen} from '../../screens/Home';
import {IMainApp} from '../../types';

type Props = {};

export const MainApp = (props: Props) => {
  const Stack = createNativeStackNavigator<IMainApp>();
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#303030',
        },
      }}>
      <Stack.Group>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
};
