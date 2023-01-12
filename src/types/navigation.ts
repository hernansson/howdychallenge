import { DrawerNavigationProp } from '@react-navigation/drawer';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type IRootApp = {
  Main: undefined;
};

export type IMainApp = { Drawer: undefined };
export type IDrawer = {
  Start: undefined;
  Cart: undefined;
  Favourites: undefined;
  Orders: undefined;
};
export type IMainAppNavigationProp = NativeStackNavigationProp<IMainApp>;
export type IDrawerNavigationProp = DrawerNavigationProp<IDrawer>;
