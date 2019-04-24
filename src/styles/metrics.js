import { Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');

export default {
  basePadding: 10,
  baseMargin: 10,
  baseRadius: 3,
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  ...Platform.select({
    ios: { headerHeight: 54, headerPadding: 20 },
    android: { headerHeight: 44, headerPadding: 0 },
  }),
};
