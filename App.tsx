import React from 'react';
import { SafeAreaView, StatusBar, useColorScheme } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import { AppRouter } from './src/navigation';
import { NativeBaseProvider } from 'native-base';
import 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  return (
    <NativeBaseProvider>
      <SafeAreaProvider>
        <NavigationContainer>
          <AppRouter />
        </NavigationContainer>
      </SafeAreaProvider>
    </NativeBaseProvider>
  );
};

export default App;
