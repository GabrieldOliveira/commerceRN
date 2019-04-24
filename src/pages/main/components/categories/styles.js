import { StyleSheet } from 'react-native';
import { colors } from '~/styles';

const styles = StyleSheet.create({
  active: {
    borderBottomColor: colors.white,
    borderBottomWidth: 5,
    opacity: 1,
  },
  button: {
    padding: 10,
  },
  container: {
    alignItems: 'center',
    backgroundColor: colors.secundary,
    flexDirection: 'row',
    height: 44,
    justifyContent: 'space-around',
  },
  inactive: {
    opacity: 0.4,
  },

  text: {
    color: colors.primary,
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default styles;
