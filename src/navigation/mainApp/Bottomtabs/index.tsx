import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { IBottomtabs } from '../../../types';
import { bottomTabsScreens } from '../../../constants';
import { DrawerView } from '../Drawer/components/DrawerView';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const Tab = createBottomTabNavigator<IBottomtabs>();
export const BottomTabs = props => {
  return (
    <DrawerView {...props}>
      <Tab.Navigator
        screenOptions={{ headerShown: false }}
        backBehavior="history">
        {bottomTabsScreens.map(dr => (
          <Tab.Screen
            key={dr.route}
            name={dr.route}
            component={dr.component}
            options={{
              tabBarIcon: ({ size }) => (
                <MaterialCommunityIcons name={dr.icon} size={size} />
              ),
            }}
          />
        ))}
      </Tab.Navigator>
    </DrawerView>
  );
};
