import Immutable from 'seamless-immutable';

export const Types = {
  GET_CATEGORIES_REQUEST: 'categories/GET_CATEGORIES_REQUEST',
  GET_CATEGORIES_SUCCESS: 'categories/GET_CATEGORIES_SUCCESS',
  GET_CATEGORIES_FAILURE: 'categories/GET_CATEGORIES_FAILURE',
  GET_CATEGORY: 'categories/GET_CATEGORY',
  GET_CATEGORY_SUCCESS: 'categories/GET_CATEGORY_SUCCESS',
};

const initialState = Immutable({
  data: [],
  loading: false,
  error: null,
  currentCategory: [],
});

export default function categories(state = initialState, action) {
  switch (action.type) {
    case Types.GET_CATEGORIES_REQUEST:
      return { ...state, loading: true };
    case Types.GET_CATEGORIES_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        loading: false,
        error: null,
      };
    case Types.GET_CATEGORIES_FAILURE:
      return { ...state, loading: false, error: action.payload.error };
    case Types.GET_CATEGORY:
      return { ...state, loading: true };
    case Types.GET_CATEGORY_SUCCESS:
      return {
        ...state,
        currentCategory: action.payload.currentCategory.id,
        loading: false,
        error: null,
      };
    default:
      return state;
  }
}

export const Creators = {
  getCategoriesRequest: () => ({
    type: Types.GET_CATEGORIES_REQUEST,
  }),

  getCategoriesSuccess: data => ({
    type: Types.GET_CATEGORIES_SUCCESS,
    payload: { data },
  }),

  getCategoriesFailure: error => ({
    type: Types.GET_CATEGORIES_FAILURE,
    payload: { error },
  }),
  getCategory: id => ({
    type: Types.GET_CATEGORY,
    payload: { id },
  }),
  getCategorySuccess: currentCategory => ({
    type: Types.GET_CATEGORY_SUCCESS,
    payload: { currentCategory },
  }),
};
