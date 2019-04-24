import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  brand: {
    color: colors.gray,
    fontSize: 12,
    fontWeight: 'bold',
  },
  button: {
    alignItems: 'center',
    backgroundColor: colors.tertiary,
    height: 45,
    justifyContent: 'center',
    marginBottom: metrics.baseMargin,
    marginTop: metrics.baseMargin * 2,
    paddingHorizontal: metrics.basePadding,
  },
  buttonText: {
    color: colors.white,
    fontSize: 14,
    fontWeight: 'bold',
  },
  container: {
    backgroundColor: colors.primary,
    flex: 1,
    paddingHorizontal: metrics.basePadding,
  },
  detailContainer: {
    alignItems: 'stretch',
    backgroundColor: colors.white,
    marginTop: metrics.baseMargin * 2,
    paddingHorizontal: metrics.basePadding,
  },
  image: {
    alignSelf: 'center',
    height: 285,
    width: '50%',
  },
  info: {
    flexDirection: 'row',
    marginTop: metrics.baseMargin * 2,
  },
  infoText: {
    flex: 1,
    flexWrap: 'wrap',
    paddingHorizontal: metrics.basePadding,
  },
  name: {
    color: colors.black,
    fontSize: 18,
    fontWeight: 'bold',
  },

  price: {
    color: colors.tertiary,
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default styles;
