import { combineReducers } from 'redux';

import categories from './categories';
import categoryProduct from './categoryProduct';
import detailProduct from './detailProduct';
import Cart from './cart';

export default combineReducers({
  categories,
  categoryProduct,
  detailProduct,
  Cart,
});
