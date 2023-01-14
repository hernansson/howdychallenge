import React from 'react';
import { VStack } from 'native-base';
import { CustomGreeting } from './components/CustomGreeting';

export const ScreenInsideComponent1 = () => {
  return (
    <VStack>
      <CustomGreeting />
    </VStack>
  );
};
