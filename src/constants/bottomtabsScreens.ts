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
  icon: string;
}
export const bottomTabsScreens: IBottomtabsScreen[] = [
  { route: 'Start', label: 'Start', component: HomeStack, icon: 'home' },
  {
    route: 'Cart',
    label: 'Your Cart',
    component: CartScreen,
    icon: 'cart-variant',
  },
  {
    route: 'Favourites',
    label: 'Favourites',
    component: FavouritesScreen,
    icon: 'heart-outline',
  },
  {
    route: 'Orders',
    label: 'Your Orders',
    component: OrdersScreen,
    icon: 'order-alphabetical-ascending',
  },
];
