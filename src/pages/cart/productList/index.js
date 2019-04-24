import React from 'react';
import PropTypes from 'prop-types';

import {
  View, Image, Text, TextInput, TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

const productList = ({ product, deleteProduct, switchQuantity }) => (
  <View style={styles.container}>
    <Image source={{ uri: product.image }} style={styles.image} />
    <View style={styles.infoContainer}>
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.brand}>{product.brand}</Text>
      <Text style={styles.price}>
        R$
        {product.price}
      </Text>
    </View>

    <TextInput
      keyboardType="numeric"
      onChangeText={(text) => {
        if (/^\d+$/.test(text)) {
          switchQuantity(text);
        }
      }}
      defaultValue={String(product.qtd)}
      maxLength={2}
      autoCapitalize="none"
      autoCorrect={false}
      underlineColorAndroid="transparent"
      style={styles.textInput}
    />

    <TouchableOpacity onPress={deleteProduct} style={styles.button}>
      <Icon size={20} color="#C0C0C0" name="close" style={styles.icon} />
    </TouchableOpacity>
  </View>
);

productList.propTypes = {
  deleteProduct: PropTypes.func.isRequired,
  product: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
};

export default productList;
