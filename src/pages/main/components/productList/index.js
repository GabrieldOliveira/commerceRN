import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as CategoryProductActions } from '~/store/ducks/categoryProduct';
import { View, FlatList } from 'react-native';

import styles from './styles';

import Product from './product';

class ProductList extends Component {
  static propTypes = {
    navigation: PropTypes.shape().isRequired,
    getcategoryOneProductsRequest: PropTypes.func.isRequired,
    productlist: PropTypes.node.isRequired,
    categoryProduct: PropTypes.shape({
      data: PropTypes.array,
    }).isRequired,
  };

  componentDidMount() {
    const { productlist, getcategoryOneProductsRequest } = this.props;
    getcategoryOneProductsRequest(productlist);
  }

  products = ({ item }) => {
    const { navigation } = this.props;
    return <Product product={item} navigation={navigation} />;
  };

  render() {
    const {
      categoryProduct: { data },
    } = this.props;

    return (
      <View style={styles.container}>
        <FlatList
          data={data}
          keyExtractor={item => String(item.id)}
          renderItem={this.products}
          style={styles.lista}
          numColumns={2}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  categoryProduct: state.categoryProduct,
});

const mapDispatchToProps = dispatch => bindActionCreators(CategoryProductActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductList);
