import React from 'react';
import { Button, Text, VStack } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { IMainAppNavigationProp } from '../../../types';
interface ISomeComponent {
  name: string;
}

export const SomeComponent = ({ name }: ISomeComponent) => {
  const { navigate } = useNavigation<IMainAppNavigationProp>();
  return (
    <VStack
      alignItems={'center'}
      justifyContent={'center'}
      h={'full'}
      space={2}>
      <Text style={{ color: 'black' }}>{`We are at route "${name}"`} </Text>
      <Button
        color={'amber.300'}
        onPress={() => navigate('Drawer')}
        w={'150px'}>
        <Text alignSelf={'center'}>Nothing Happens</Text>
      </Button>
    </VStack>
  );
};
