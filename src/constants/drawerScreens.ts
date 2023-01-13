import { BottomTabs } from '../navigation/mainApp/Bottomtabs';
import { HomeScreen } from '../screens/Home';
import { IDrawer } from '../types';

interface IDrawerRoutes {
  route: keyof IDrawer;
  label: string;
  component: (props: any) => JSX.Element;
}
export const drawerRoutes: IDrawerRoutes[] = [
  {
    route: 'Start',
    label: 'Start',
    component: HomeScreen,
  },
  { route: 'Cart', label: 'Your Cart', component: HomeScreen },
  { route: 'Favourites', label: 'Favourites', component: HomeScreen },
  { route: 'Orders', label: 'Your Orders', component: HomeScreen },
];
