import { StyleSheet, Dimensions } from 'react-native';
import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  brand: {
    color: colors.gray,
    fontSize: 11,
    fontWeight: 'bold',
  },
  container: {
    backgroundColor: colors.white,
    flex: 1,
    margin: metrics.baseMargin,
  },
  image: {
    height: 180,
    resizeMode: 'contain',
    width: '100%',
  },
  infoContainer: {
    marginLeft: metrics.basePadding * 2,
  },
  name: {
    color: colors.dark,
    fontSize: 14,
    fontWeight: 'bold',
  },
  price: {
    color: colors.tertiary,
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default styles;
