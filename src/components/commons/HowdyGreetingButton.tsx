import React from 'react';
import { Button, Text, VStack } from 'native-base';

interface ISomeComponent {
  name: string;
}

export const HowdyGreetingButton = ({ name }: ISomeComponent) => {
  return (
    <VStack alignItems={'center'} justifyContent={'center'} space={2}>
      <Text style={{ color: 'black' }}>{`We are at route "${name}"`} </Text>
      <Button bgColor={'cyan.700'} onPress={() => ({})} w={'150px'}>
        <Text color={'white'} alignSelf={'center'}>
          Nothing Happens
        </Text>
      </Button>
    </VStack>
  );
};
