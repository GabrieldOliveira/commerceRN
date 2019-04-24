import Immutable from 'seamless-immutable';

export const Types = {
  GET_DETAIL_PRODUCT_REQUEST: 'categoryProdcuts/GET_DETAIL_PRODUCT_REQUEST',
  GET_DETAIL_PRODUCT_SUCCESS: 'categoryProdcuts/GET_DETAIL_PRODUCT_SUCCESS',
  GET_DETAIL_PRODUCT_FAILURE: 'categoryProdcuts/GET_DETAIL_PRODUCT_FAILURE',
};

const initialState = Immutable({
  data: [],
  loading: false,
  error: null,
});

export default function DetailProduct(state = initialState, action) {
  switch (action.type) {
    case Types.GET_DETAIL_PRODUCT_REQUEST:
      return { ...state, loading: true };

    case Types.GET_DETAIL_PRODUCT_SUCCESS:
      return {
        data: action.payload.detail,
        loading: false,
        error: null,
      };
    case Types.GET_DETAIL_PRODUCT_FAILURE:
      return { ...state, loading: false, error: action.payload.error };

    default:
      return state;
  }
}

export const Creators = {
  getDetailProductRequest: index => ({
    type: Types.GET_DETAIL_PRODUCT_REQUEST,
    payload: { index },
  }),
  getDetailProductSuccess: detail => ({
    type: Types.GET_DETAIL_PRODUCT_SUCCESS,
    payload: { detail },
  }),
  getDetailProductFailure: error => ({
    type: Types.GET_DETAIL_PRODUCT_FAILURE,
    payload: { error },
  }),
};
