import { StyleSheet } from 'react-native';
import { metrics } from '~/styles';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: metrics.basePadding,
    marginRight: metrics.baseMargin,
  },
});

export default styles;
