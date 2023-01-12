import { Box, View } from 'native-base';
import React from 'react';
import { useDrawerProgress } from '@react-navigation/drawer';
import Animated, {
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
export const DrawerView = ({ children, style }) => {
  const drawerProgress = useDrawerProgress();
  const viewStyles = useAnimatedStyle(() => {
    const borderRadius = interpolate(drawerProgress.value, [0, 1], [20, 40]);
    const rotate = interpolate(drawerProgress.value, [0, 1], [0, -10]);
    const translateX = interpolate(drawerProgress.value, [0, 1], [0, 80]);
    return {
      transform: [{ rotate: `${rotate}deg` }, { translateX }],
      borderRadius: drawerProgress.value === 0 ? 0 : borderRadius,
    };
  });

  return <Animated.View style={[viewStyles, style]}>{children}</Animated.View>;
};
