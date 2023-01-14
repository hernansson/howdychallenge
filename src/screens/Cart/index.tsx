import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { Center } from '../../components/commons/Center';
import { HowdyGreetingButton } from '../../components/commons/HowdyGreetingButton';
import { IHomeStack } from '../../types';

type Props = {};

export const CartScreen = ({
  navigation,
  route,
}: NativeStackScreenProps<IHomeStack>) => {
  return (
    <Center>
      <HowdyGreetingButton name={route.name} />
    </Center>
  );
};
