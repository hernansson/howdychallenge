import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { HomeScreen } from '../../screens/Home';
import { IMainApp } from '../../types';
import { screensArray } from '../../constants';
type Props = {};

export const MainApp = (props: Props) => {
  const Stack = createNativeStackNavigator<IMainApp>();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: '#1A192A',
          borderTopStartRadius: 30,
        },
      }}>
      <Stack.Group>
        {screensArray.map((screen, idx) => (
          <Stack.Screen
            key={idx}
            name={screen.route}
            component={screen.component}
          />
        ))}
      </Stack.Group>
    </Stack.Navigator>
  );
};
