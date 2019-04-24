import React from 'react';

import { View, Text } from 'react-native';

import styles from './styles';

const header = props => (
  <View style={styles.container}>
    <Text style={styles.titulo}>{props.text}</Text>
  </View>
);

export default header;
