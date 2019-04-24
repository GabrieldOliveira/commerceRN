import {
  createAppContainer,
  createBottomTabNavigator,
  createStackNavigator,
} from 'react-navigation';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import Main from './pages/main';
import Cart from './pages/cart';
import Detail from './pages/details';
import { colors } from './styles';

const categories = createStackNavigator(
  {
    Main: {
      screen: Main,
      navigationOptions: {
        title: 'GoCommerce',
        headerBackTitle: null,
      },
    },
    Detail: {
      screen: Detail,
      navigationOptions: {
        title: 'Detalhe do Produto',
      },
    },
  },
  {
    defaultNavigationOptions: {
      headerTintColor: colors.gray,
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 16,
        color: colors.secundary,
      },
    },
  },
);

const carinho = createStackNavigator({
  Cart: {
    screen: Cart,
    navigationOptions: {
      title: 'Carrinho',
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 16,
        color: colors.secundary,
      },
    },
  },
});

const Routes = createAppContainer(
  createBottomTabNavigator(
    {
      GoCommerce: {
        screen: categories,
        navigationOptions: {
          tabBarIcon: ({ tintColor }) => <Icon name="home" size={24} color={tintColor} />,
        },
      },
      Carrinho: {
        screen: carinho,
        navigationOptions: {
          tabBarIcon: ({ tintColor }) => <Icon name="shopping-cart" size={24} color={tintColor} />,
        },
      },
    },
    {
      tabBarOptions: {
        showLabel: false,
        activeTintColor: colors.secundary,
        inactiveTintColor: colors.gray,
      },
    },
  ),
);

export default Routes;
