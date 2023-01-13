import { useDrawerProgress } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import { Button, Divider, Text, VStack } from 'native-base';
import { getCurrentRoute } from '../../../../utils/getCurrentRoute';

import Animated, {
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import { drawerRoutes } from '../../../../constants';
import { IDrawerNavigationProp } from '../../../../types';

export const CustomDrawer = ({ navigation }) => {
  const { navigate } = useNavigation<IDrawerNavigationProp>();
  const drawerProgress = useDrawerProgress();
  const viewStyles = useAnimatedStyle(() => {
    const translateY = interpolate(drawerProgress['value'], [0, 1], [0, 100]);

    return {
      transform: [{ translateY }],
    };
  });

  const currentRoute = getCurrentRoute(navigation);
  return (
    <Animated.View style={viewStyles}>
      <VStack alignItems={'center'} space={4} safeArea>
        <Text color={'white'} fontSize={20} pb={8}>
          BEKA
        </Text>
        {drawerRoutes.map((dr, idx) => (
          <Button
            alignItems={'flex-start'}
            justifyContent={'flex-start'}
            key={idx}
            onPress={() => navigate(dr.route)}
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
          onPress={() => navigate('Start')}
          width={'50%'}>
          <Text color={'white'}>Sign Out</Text>
        </Button>
      </VStack>
    </Animated.View>
  );
};
