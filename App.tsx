import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AppRouter } from './src/navigation';
import { NativeBaseProvider } from 'native-base';
import 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AnimationProvider } from './src/providers/AnimationProvider';
const App = () => {
  return (
    <NativeBaseProvider>
      <AnimationProvider>
        <SafeAreaProvider>
          <NavigationContainer>
            <AppRouter />
          </NavigationContainer>
        </SafeAreaProvider>
      </AnimationProvider>
    </NativeBaseProvider>
  );
};

export default App;
