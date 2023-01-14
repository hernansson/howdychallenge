import { IDrawer } from '../types';

interface IDrawerRoutes {
  route: keyof IDrawer;
  label: string;
}
export const drawerRoutes: IDrawerRoutes[] = [
  {
    route: 'Start',
    label: 'Start',
  },
  { route: 'Cart', label: 'Your Cart' },
  { route: 'Favourites', label: 'Favourites' },
  { route: 'Orders', label: 'Your Orders' },
];
