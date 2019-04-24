import Immutable from 'seamless-immutable';

export const Types = {
  GET_CATEG_PRODUCT_FAILURE: 'categoryProdcuts/GET_CATEG_PRODUCT_FAILURE',
  GET_CATEG_ONE_PRODUCT_REQUEST: 'categoryProdcuts/GET_CATEG_ONE_PRODUCT_REQUEST',
  GET_CATEG_ONE_PRODUCT_SUCCESS: 'categoryProdcuts/GET_CATEG_ONE_PRODUCT_SUCCESS',
};

const initialState = Immutable({
  data: [],
  loading: false,
  error: null,
});

export default function categoryProdcuts(state = initialState, action) {
  switch (action.type) {
    case Types.GET_CATEG_PRODUCT_FAILURE:
      return { ...state, loading: false, error: action.payload.error };

    case Types.CATEG_ONE_PRODUCT_REQUEST:
      return { ...state, loading: true };

    case Types.GET_CATEG_ONE_PRODUCT_SUCCESS:
      return { ...state, loading: true, data: action.payload.categorie };

    default:
      return state;
  }
}

export const Creators = {
  getcategoryProductsFailure: error => ({
    type: Types.GET_CATEG_PRODUCT_FAILURE,
    payload: { error },
  }),
  getcategoryOneProductsRequest: index => ({
    type: Types.GET_CATEG_ONE_PRODUCT_REQUEST,
    payload: { index },
  }),
  getcategoryOneProductsSuccess: categorie => ({
    type: Types.GET_CATEG_ONE_PRODUCT_SUCCESS,
    payload: { categorie },
  }),
};
