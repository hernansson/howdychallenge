import React from 'react';
import {View, Text} from 'react-native';
import {SomeComponent} from './components/SomeComponent';

type Props = {};

export const HomeScreen = (props: Props) => {
  return (
    <View>
      <SomeComponent />
    </View>
  );
};
