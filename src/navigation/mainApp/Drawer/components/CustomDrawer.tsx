import { useDrawerProgress, DrawerScreenProps } from '@react-navigation/drawer';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { Button, Divider, Text, VStack } from 'native-base';
import Animated, {
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import { drawerRoutes } from '../../../../constants';
import { IDrawer } from '../../../../types';

export const CustomDrawer = ({ navigation }: DrawerScreenProps<IDrawer>) => {
  const drawerProgress = useDrawerProgress();
  const viewStyles = useAnimatedStyle(() => {
    const translateY = interpolate(drawerProgress['value'], [0, 1], [0, 100]);

    return {
      transform: [{ translateY }],
    };
  });
  const routes = navigation.getState().routes;
  const currentRoute = getFocusedRouteNameFromRoute(routes[0]);

  return (
    <Animated.View style={viewStyles}>
      <VStack alignItems={'center'} space={4}>
        <Text color={'white'} fontSize={20} pb={8}>
          BEKA
        </Text>
        {drawerRoutes.map((dr, idx) => (
          <Button
            alignItems={'flex-start'}
            justifyContent={'flex-start'}
            key={idx}
            onPress={() => {
              navigation.navigate(dr.route);
            }}
            backgroundColor={
              currentRoute === dr.route ? '#95270F' : 'transparent'
            }
            width={'50%'}>
            <Text color={'white'}>{dr.label}</Text>
          </Button>
        ))}

        <Divider w={'80%'} my={10} bgColor={'coolGray.500'} />
        <Button
          alignItems={'flex-start'}
          justifyContent={'flex-start'}
          onPress={() => ({})}
          width={'50%'}>
          <Text color={'white'}>Sign Out</Text>
        </Button>
      </VStack>
    </Animated.View>
  );
};
