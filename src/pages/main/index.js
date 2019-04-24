import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, ActivityIndicator } from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as CategoriesActions } from '~/store/ducks/categories';
import ProductList from './components/productList';

import Categories from './components/categories';

import styles from './styles';

class Main extends Component {
  static navigationOptions = {
    title: 'GoComerce',
  };

  static propTypes = {
    getCategoriesRequest: PropTypes.func.isRequired,
    navigation: PropTypes.shape({}).isRequired,
    categories: PropTypes.shape({
      data: PropTypes.array,
      loading: PropTypes.bool,
      currentCategory: PropTypes.node,
    }).isRequired,
  };

  componentDidMount() {
    const { getCategoriesRequest } = this.props;
    getCategoriesRequest();
  }

  render() {
    const {
      categories: { data, currentCategory, loading },
      navigation,
    } = this.props;
    return (
      <View style={styles.container}>
        <Categories categories={data} selectCategory={currentCategory} />
        {loading ? (
          <ActivityIndicator size="small" />
        ) : (
          <ProductList productlist={currentCategory} navigation={navigation} />
        )}
      </View>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.categories,
});

const mapDispatchToProps = dispatch => bindActionCreators(CategoriesActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);
