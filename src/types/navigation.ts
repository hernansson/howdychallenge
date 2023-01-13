import { DrawerNavigationProp } from '@react-navigation/drawer';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
export type IRootApp = {
  Main: undefined;
};

export type IMainApp = { Drawer: undefined };
export type IDrawer = {
  BottomTabs: undefined;
  Start: undefined;
  Cart: undefined;
  Favourites: undefined;
  Orders: undefined;
};
export type IBottomtabs = {
  Start: undefined;
  Cart: undefined;
  Favourites: undefined;
  Orders: undefined;
};

export type IMainAppNavigationProp = NativeStackNavigationProp<IMainApp>;
export type IDrawerNavigationProp = DrawerNavigationProp<IDrawer>;
export type IBottomTabsNavigationProp = BottomTabNavigationProp<IBottomtabs>;
