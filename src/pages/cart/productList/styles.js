import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  brand: {
    color: colors.gray,
    fontSize: 11,
  },
  button: {
    paddingHorizontal: metrics.basePadding,
  },
  container: {
    alignItems: 'center',
    backgroundColor: colors.white,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: metrics.baseMargin,
    padding: metrics.basePadding,
  },
  image: {
    height: 60,
    resizeMode: 'contain',
    width: '22%',
  },
  infoContainer: {
    flex: 1,
    marginTop: metrics.baseMargin,
  },
  name: {
    color: colors.black,
    flexWrap: 'wrap',
    fontSize: 14,
    fontWeight: 'bold',
  },
  price: {
    color: colors.tertiary,
    fontSize: 14,
    fontWeight: 'bold',
  },
  textInput: {
    borderColor: colors.gray,
    borderWidth: 1,
    color: colors.gray,
    height: 25,
    width: 30,
  },
});

export default styles;
