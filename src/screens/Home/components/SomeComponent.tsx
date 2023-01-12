import React from 'react';
import { Button, Text, VStack } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { IMainAppNavigationProp } from '../../../types';
type Props = {};

export const SomeComponent = (props: Props) => {
  const { navigate } = useNavigation<IMainAppNavigationProp>();
  return (
    <VStack alignSelf={'center'} justifyContent={'center'} h={'full'} space={2}>
      <Text style={{ color: 'black' }}>SomeComponent </Text>
      <Button color={'amber.300'} onPress={() => navigate('Drawer')}>
        <Text alignSelf={'center'}>Test Button</Text>
      </Button>
    </VStack>
  );
};
