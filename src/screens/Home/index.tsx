import React from 'react';
import { StyleSheet } from 'react-native';
import { SomeComponent } from './components/SomeComponent';
import { DrawerView } from '../../navigation/mainApp/Drawer/components/DrawerView';
import { Text, VStack } from 'native-base';

export const HomeScreen = ({ route }) => {
  return (
    <VStack>
      <SomeComponent name={route.name} />
    </VStack>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    zIndex: 999,
  },
});
