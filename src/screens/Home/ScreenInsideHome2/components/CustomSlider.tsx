import { Box, Slider, Text } from 'native-base';
import React from 'react';

export const CustomSlider = () => {
  return (
    <Box alignItems="center" w="100%" pt={'10%'}>
      <Text>Custom Slider</Text>
      <Slider
        w="3/4"
        maxW="300"
        defaultValue={70}
        minValue={0}
        maxValue={100}
        accessibilityLabel="hello world"
        step={10}>
        <Slider.Track>
          <Slider.FilledTrack />
        </Slider.Track>
        <Slider.Thumb />
      </Slider>
    </Box>
  );
};
