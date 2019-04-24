import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as DetailProductActions } from '~/store/ducks/detailProduct';

import {
  TouchableOpacity, Text, Image, View,
} from 'react-native';

import styles from './styles';

const Product = ({ product, navigation, getDetailProductRequest }) => (
  <TouchableOpacity
    onPress={() => navigation.navigate('Detail', getDetailProductRequest(product.id))}
    style={styles.container}
  >
    <Image source={{ uri: product.image }} style={styles.image} />
    <View style={styles.infoContainer}>
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.brand}>{product.brand}</Text>
      <Text style={styles.price}>
        R$
        {product.price}
      </Text>
    </View>
  </TouchableOpacity>
);

Product.propTypes = {
  getDetailProductRequest: PropTypes.func.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
  product: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    brand: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
};

const mapDispatchToProps = dispatch => bindActionCreators(DetailProductActions, dispatch);
export default connect(
  null,
  mapDispatchToProps,
)(Product);
