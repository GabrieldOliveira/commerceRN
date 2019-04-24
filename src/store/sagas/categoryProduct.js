import { call, put } from 'redux-saga/effects';
import api from '~/services/api';
import { Creators as CategoryProductActions } from '~/store/ducks/categoryProduct';

export function* getOneCategoryProduct(action) {
  try {
    const response = yield call(api.get, `/category_products/${action.payload.index}`);
    yield put(CategoryProductActions.getcategoryOneProductsSuccess(response.data.products));
  } catch (err) {
    yield put(
      CategoryProductActions.getcategoryProductsFailure('Erro em buscar as categorias da API.'),
    );
  }
}
