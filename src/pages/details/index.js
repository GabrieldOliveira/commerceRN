import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as CartActions } from '~/store/ducks/cart';
import {
  View, Image, Text, TouchableOpacity, ActivityIndicator,
} from 'react-native';

import styles from './styles';

const Details = ({ detailProduct: { loading, data }, addProductToCart }) => (
  <View style={styles.container}>
    {loading ? (
      <ActivityIndicator size="small" />
    ) : (
      <View style={styles.detailContainer}>
        <Image source={{ uri: data.image }} style={styles.image} />
        <View style={styles.info}>
          <View style={styles.infoText}>
            <Text style={styles.name}>{data.name}</Text>
            <Text style={styles.brand}>{data.brand}</Text>
          </View>
          <Text style={styles.price}>
            R$
            {data.price}
          </Text>
        </View>
        <TouchableOpacity onPress={() => addProductToCart(data)} style={styles.button}>
          <Text style={styles.buttonText}>Adicionar ao Carrinho</Text>
        </TouchableOpacity>
      </View>
    )}
  </View>
);

Details.propTypes = {
  detailProduct: PropTypes.shape({
    loading: PropTypes.bool,
  }).isRequired,
  addProductToCart: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  detailProduct: state.detailProduct,
});

const mapDispatchToProps = dispatch => bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Details);
