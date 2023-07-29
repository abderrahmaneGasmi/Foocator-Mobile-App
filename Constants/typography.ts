import { Dimensions, Platform, PixelRatio } from "react-native";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

// based on iphone 5s's scale
const scale = SCREEN_WIDTH / 320;

export function normalize(size: number) {
  const newSize = size * scale;
  if (Platform.OS === "ios") {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
}

export const typography = {
  mini: normalize(8),
  small: normalize(10),
  medium: normalize(12),
  large: normalize(14),
  xlarge: normalize(16),
  xxlarge: normalize(18),
  xxxlarge: normalize(20),
  big: normalize(22),
  xbig: normalize(24),
  bigtitle: normalize(28),
};
