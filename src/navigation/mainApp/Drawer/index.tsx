import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import { StyleSheet } from 'react-native';
import { IDrawer } from '../../../types';
import { BottomTabs } from '../Bottomtabs';
import { CustomDrawer } from './components/CustomDrawer';

const Drawer = createDrawerNavigator<IDrawer>();

export const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: styles.drawerStyles,
        drawerType: 'back',
        overlayColor: 'transparent',
        sceneContainerStyle: styles.sceneStyle,
        headerShown: false,
      }}
      drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen
        key="BottomTabs"
        name={'BottomTabs'}
        component={BottomTabs}
      />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  drawerStyles: {
    marginTop: 50,
    width: '50%',
    backgroundColor: '#1A192A',
    borderTopLeftRadius: 30,
  },
  sceneStyle: {
    backgroundColor: 'transparent',
  },
});
