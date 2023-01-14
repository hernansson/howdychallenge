import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { homeScreens } from '../../../../constants';
import { IHomeStack } from '../../../../types';

export const HomeStack = () => {
  const HomeStack = createNativeStackNavigator<IHomeStack>();

  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <HomeStack.Group>
        {homeScreens.map((screen, idx) => (
          <HomeStack.Screen
            key={idx}
            name={screen.route}
            component={screen.component}
          />
        ))}
      </HomeStack.Group>
    </HomeStack.Navigator>
  );
};
