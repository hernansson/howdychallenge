import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SomeComponent } from './components/SomeComponent';
import { DrawerView } from '../Drawer/components/DrawerView';
import { VStack } from 'native-base';
type Props = {};

export const HomeScreen = (props: Props) => {
  return (
    <DrawerView style={styles.container}>
      <SomeComponent />
    </DrawerView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    zIndex: 999,
  },
});
