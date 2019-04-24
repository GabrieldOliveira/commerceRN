import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    height: metrics.headerHeight,
    justifyContent: 'center',
    marginTop: metrics.headerPadding,
    paddingHorizontal: metrics.basePadding,
    paddingTop: metrics.headerPadding,
  },
  titulo: {
    color: colors.secundary,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles;
