import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    flex: 1,
  },
  lista: {
    marginRight: 10,
    marginTop: metrics.baseMargin,
    paddingHorizontal: metrics.basePadding * 2,
  },
  text: {
    color: colors.black,
    justifyContent: 'center',
  },
  textSubtotal: {
    color: colors.gray,
    fontSize: 14,
    fontWeight: 'bold',
  },

  textTotal: {
    color: colors.tertiary,
    fontSize: 24,
    fontWeight: 'bold',
  },
  totalContainer: {
    alignItems: 'center',
    backgroundColor: colors.white,
    height: 100,
    justifyContent: 'center',
  },
});

export default styles;
