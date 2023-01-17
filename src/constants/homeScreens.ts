import { HomeScreen } from '../screens/Home';
import { ScreenInsideComponent1 } from '../screens/Home/ScreenInsideHome1';
import { ScreenInsideComponent2 } from '../screens/Home/ScreenInsideHome2';
import { IHomeStack } from '../types';

interface IHomeScreens {
  route: keyof IHomeStack;
  label: string;
  component: (props: any) => JSX.Element;
}
export const homeScreens: IHomeScreens[] = [
  {
    route: 'HomeScreen',
    label: 'ScreenInsideHome1',
    component: HomeScreen,
  },
  {
    route: 'ScreenInsideHome1',
    label: 'ScreenInsideHome1',
    component: ScreenInsideComponent1,
  },
  {
    route: 'ScreenInsideHome2',
    label: 'Your Cart',
    component: ScreenInsideComponent2,
  },
];
