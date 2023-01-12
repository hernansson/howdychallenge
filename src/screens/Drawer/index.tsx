import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import { StyleSheet } from 'react-native';
import { drawerRoutes } from '../../constants';
import { IDrawer } from '../../types';
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
      {drawerRoutes.map((dr, i) => (
        <Drawer.Screen
          key={i}
          name={dr.route}
          component={dr.component}
          options={{
            drawerLabel: dr.label,
            headerTitle: dr.label,
          }}
        />
      ))}
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  drawerStyles: {
    width: '50%',
    backgroundColor: 'transparent',
    borderTopLeftRadius: 30,
  },
  sceneStyle: {
    backgroundColor: 'transparent',
  },
});
