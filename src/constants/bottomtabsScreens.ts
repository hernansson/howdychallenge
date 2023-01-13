import { HomeScreen } from '../screens/Home';
import { IBottomtabs } from '../types';

interface IBottomtabsScreen {
  route: keyof IBottomtabs;
  label: string;
  component: (props: any) => JSX.Element;
}
export const bottomTabsScreens: IBottomtabsScreen[] = [
  { route: 'Start', label: 'Start', component: HomeScreen },
  { route: 'Cart', label: 'Your Cart', component: HomeScreen },
  { route: 'Favourites', label: 'Favourites', component: HomeScreen },
  { route: 'Orders', label: 'Your Orders', component: HomeScreen },
];
