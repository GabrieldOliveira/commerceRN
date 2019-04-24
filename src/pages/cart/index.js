import React from 'react';
import PropTypes from 'prop-types';
import { View, FlatList, Text } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as CartActions } from '~/store/ducks/cart';

import styles from './styles';

import ProductList from './productList';

const Cart = ({
  cartList, total, switchQtd, deleteProductOfCart,
}) => (
  <View style={styles.container}>
    {cartList !== [] ? (
      <FlatList
        data={cartList}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <ProductList
            product={item}
            switchQuantity={(q) => {
              switchQtd(item.id, Number(q));
            }}
            deleteProduct={() => deleteProductOfCart(item)}
          />
        )}
        style={styles.lista}
      />
    ) : (
      <Text style={styles.text}>Carrinho vazio</Text>
    )}
    <View style={styles.totalContainer}>
      <Text style={styles.textSubtotal}>SubTotal:</Text>
      <Text style={styles.textTotal}>
        R$
        {total}
      </Text>
    </View>
  </View>
);

Cart.propTypes = {
  total: PropTypes.number.isRequired,
  cartList: PropTypes.arrayOf(PropTypes.shape).isRequired,
  deleteProductOfCart: PropTypes.func.isRequired,
  switchQtd: PropTypes.func.isRequired,
};
const mapStateToProps = state => ({
  cartList: state.Cart.cart,
  total: state.Cart.cart.reduce((total, item) => total + item.price * item.qtd, 0),
});

const mapDispatchToProps = dispatch => bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Cart);
