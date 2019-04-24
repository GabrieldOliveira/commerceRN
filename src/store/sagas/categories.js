import { call, put } from 'redux-saga/effects';
import api from '~/services/api';
import { Creators as CategoriesActions } from '~/store/ducks/categories';

export function* getAllCategories() {
  try {
    const response = yield call(api.get, '/categories');
    yield put(CategoriesActions.getCategoriesSuccess(response.data));
  } catch (err) {
    yield put(CategoriesActions.getCategoriesFailure('Erro em buscar as categorias da API.'));
  }
}

export function* getOneCategory(action) {
  try {
    const response = yield call(api.get, `/categories/${action.payload.id}`);
    yield put(CategoriesActions.getCategorySuccess(response.data));
  } catch (err) {
    yield put(CategoriesActions.getCategoriesFailure('Erro em buscar as categorias da API.'));
  }
}
