import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { HowdyGreetingButton } from '../../components/commons/HowdyGreetingButton';
import { IHomeStack } from '../../types';

type Props = {};

export const CartScreen = ({
  navigation,
  route,
}: NativeStackScreenProps<IHomeStack>) => {
  return <HowdyGreetingButton name={route.name} />;
};
