import React from 'react';
import { Button, ScrollView, VStack } from 'native-base';
import { IHomeStack } from '../../types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { HowdyGreetingButton } from '../../components/commons/HowdyGreetingButton';

export const HomeScreen = ({
  route,
  navigation,
}: NativeStackScreenProps<IHomeStack>) => {
  return (
    <ScrollView pt={'5%'}>
      <VStack
        w={'80%'}
        alignSelf={'center'}
        alignItems={'center'}
        justifyContent={'center'}
        space={2}>
        <HowdyGreetingButton name={route.name} />
        <Button
          bgColor={'amber.700'}
          onPress={() => navigation.navigate('ScreenInsideHome1')}>
          Go to Screen Inside Home Stack 1
        </Button>
        <Button
          bgColor={'cyan.800'}
          onPress={() => navigation.navigate('ScreenInsideHome2')}>
          Go to Screen Inside Home Stack 2
        </Button>
      </VStack>
    </ScrollView>
  );
};
