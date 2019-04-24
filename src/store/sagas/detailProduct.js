import { call, put } from 'redux-saga/effects';
import api from '~/services/api';
import { Creators as DetailProductActions } from '~/store/ducks/detailProduct';

export function* getDetailProduct(action) {
  try {
    const response = yield call(api.get, `/products/${action.payload.index}`);
    yield put(DetailProductActions.getDetailProductSuccess(response.data));
  } catch (err) {
    yield put(DetailProductActions.getDetailProductFailure('Erro em buscar as categorias da API.'));
  }
}
