import { Image, VStack, Text, HStack, Pressable } from 'native-base';
import React from 'react';
import { useDrawerProgress } from '@react-navigation/drawer';
import {
  getFocusedRouteNameFromRoute,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import Animated, {
  AnimateStyle,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import menuIcon from '../../../../assets/menu.png';
import { StyleProp, ViewStyle } from 'react-native';
import { IDrawerNavigationProp } from '../../../../types';

interface IDrawerView {
  children: JSX.Element;
  style: AnimateStyle<StyleProp<ViewStyle>>;
}
export const DrawerView = ({ children, style }: IDrawerView) => {
  const drawerProgress = useDrawerProgress();
  const navigation = useNavigation<IDrawerNavigationProp>();
  const route = useRoute();
  const currentRoute =
    getFocusedRouteNameFromRoute(route)?.toUpperCase() ?? 'Welcome to Howdy';
  const viewStyles = useAnimatedStyle(() => {
    const rotate = interpolate(drawerProgress['value'], [0, 1], [0, -10]);
    const translateX = interpolate(drawerProgress['value'], [0, 1], [0, 80]);
    const translateY = interpolate(drawerProgress['value'], [0, 1], [0, 80]);
    return {
      transform: [{ rotate: `${rotate}deg` }, { translateX }, { translateY }],
    };
  });

  return (
    <Animated.View style={[viewStyles, style]}>
      <VStack
        safeArea
        w={'100%'}
        h={'100%'}
        borderRadius={30}
        alignSelf={'center'}
        bgColor={'white'}>
        <HStack alignItems={'center'} space={6} p={4}>
          <Pressable onPress={() => navigation.openDrawer()}>
            <Image
              source={menuIcon}
              alt="menu-icon"
              h={'32px'}
              w={'32px'}></Image>
          </Pressable>

          <Text color={'grey'} fontSize={20}>
            {currentRoute}
          </Text>
        </HStack>

        {children}
      </VStack>
    </Animated.View>
  );
};
