import { all, takeLatest } from 'redux-saga/effects';

import { Types as CategoriesTypes } from '~/store/ducks/categories';
import { Types as CategoryProductTypes } from '~/store/ducks/categoryProduct';
import { Types as DetailProductTypes } from '~/store/ducks/detailProduct';

import { getAllCategories, getOneCategory } from './categories';
import { getOneCategoryProduct } from './categoryProduct';
import { getDetailProduct } from './detailProduct';

export default function* rootSaga() {
  return yield all([
    takeLatest(CategoriesTypes.GET_CATEGORIES_REQUEST, getAllCategories),
    takeLatest(CategoriesTypes.GET_CATEGORY, getOneCategory),

    takeLatest(CategoryProductTypes.GET_CATEG_ONE_PRODUCT_REQUEST, getOneCategoryProduct),

    takeLatest(DetailProductTypes.GET_DETAIL_PRODUCT_REQUEST, getDetailProduct),
  ]);
}
