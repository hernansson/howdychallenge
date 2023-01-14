import { Box, Image, View, VStack, Text, HStack, Pressable } from 'native-base';
import React, { useEffect } from 'react';
import { useDrawerProgress, useDrawerStatus } from '@react-navigation/drawer';
import {
  getFocusedRouteNameFromRoute,
  useRoute,
} from '@react-navigation/native';
import Animated, {
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import menuIcon from '../../../../assets/menu.png';
import { useAnimationContext } from '../../../../providers/AnimationProvider';
export const DrawerView = ({ children, style, ...props }) => {
  const drawerProgress = useDrawerProgress();
  const drawerStatus = useDrawerStatus();
  const route = useRoute();
  const { setIsOpen } = useAnimationContext();
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

  useEffect(() => {
    setIsOpen(drawerStatus === 'closed' ? false : true);
  }, [drawerStatus]);
  console.log(drawerStatus);
  return (
    <Animated.View
      style={[viewStyles, style]}
      onTouchMove={() => console.log('epezo')}>
      <VStack
        safeArea
        w={'100%'}
        h={'100%'}
        borderRadius={30}
        alignSelf={'center'}
        bgColor={'white'}>
        <HStack alignItems={'center'} space={6} p={4}>
          <Pressable onPress={() => props.navigation.openDrawer()}>
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
