import { DrawerNavigation } from '../navigation/mainApp/Drawer';
import { HomeScreen } from '../screens/Home';
import { IMainApp } from '../types';
interface IScreenArray {
  route: keyof IMainApp;
  label: string;
  icon: string;
  component: (props: unknown) => JSX.Element;
  notification: number;
}
export const mainScreens: IScreenArray[] = [
  {
    route: 'Drawer',
    label: 'Drawer',
    icon: 'Drawer',
    component: DrawerNavigation,
    notification: 0,
  },
];
