import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as CategoriesActions } from '~/store/ducks/categories';

import {
  View, ScrollView, TouchableOpacity, Text,
} from 'react-native';

import styles from './styles';

const Categories = ({ categories, selectCategory, getCategory }) => (
  <View style={styles.container}>
    <ScrollView style={styles.list} horizontal>
      {categories.map(categoria => (
        <View
          key={categoria.id}
          style={categoria.id === selectCategory ? styles.active : styles.inactive}
        >
          <TouchableOpacity
            onPress={() => {
              getCategory(categoria.id);
            }}
            style={styles.button}
          >
            <Text style={styles.text}>{categoria.title}</Text>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  </View>
);

Categories.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectCategory: PropTypes.oneOfType([PropTypes.array, PropTypes.any]).isRequired,
  getCategory: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => bindActionCreators(CategoriesActions, dispatch);
export default connect(
  null,
  mapDispatchToProps,
)(Categories);
