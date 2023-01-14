import { VStack } from 'native-base';
import React from 'react';

interface ICenter {
  children: JSX.Element;
}
export const Center = ({ children }: ICenter) => {
  return (
    <VStack
      h={'full'}
      w={'full'}
      alignItems={'center'}
      justifyContent={'center'}>
      {children}
    </VStack>
  );
};
