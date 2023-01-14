import { HomeScreen } from '../screens/Home';
import { IBottomtabs } from '../types';
import { HomeStack } from '../navigation/mainApp/Bottomtabs/Home';
import { CartScreen } from '../screens/Cart';
import { FavouritesScreen } from '../screens/Favourites';
import { OrdersScreen } from '../screens/Orders';

interface IBottomtabsScreen {
  route: keyof IBottomtabs;
  label: string;
  component: (props: any) => JSX.Element;
}
export const bottomTabsScreens: IBottomtabsScreen[] = [
  { route: 'Start', label: 'Start', component: HomeStack },
  { route: 'Cart', label: 'Your Cart', component: CartScreen },
  { route: 'Favourites', label: 'Favourites', component: FavouritesScreen },
  { route: 'Orders', label: 'Your Orders', component: OrdersScreen },
];
