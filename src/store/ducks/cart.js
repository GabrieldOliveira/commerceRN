import Immutable from 'seamless-immutable';

export const Types = {
  ADD_PRODUCT: 'cart/ADD_PRODUCT',
  DELETE_PRODUCT: 'cart/DELETE_PRODUCT',
  UPDATE_PRODUCT: 'cart/UPDATE_PRODUCT',
};

const initialState = Immutable({
  cart: [],
});

export default function cart(state = initialState, action) {
  switch (action.type) {
    case Types.ADD_PRODUCT: {
      return {
        cart: [
          ...state.cart,
          { ...action.payload.product, qtd: 1, id: Math.floor(Math.random() * 100) + 1 },
        ],
      };
    }
    case Types.DELETE_PRODUCT:
      return {
        cart: state.cart.filter(cartItem => cartItem.id !== action.payload.item.id),
      };
    case Types.UPDATE_PRODUCT: {
      if (!action.payload.q) return state;

      return {
        cart: state.cart.map(item => (item.id === action.payload.id ? { ...item, qtd: action.payload.q } : item)),
      };
    }
    default:
      return state;
  }
}

export const Creators = {
  addProductToCart: product => ({
    type: Types.ADD_PRODUCT,
    payload: { product },
  }),

  deleteProductOfCart: item => ({
    type: Types.DELETE_PRODUCT,
    payload: { item },
  }),
  switchQtd: (id, q) => ({
    type: Types.UPDATE_PRODUCT,
    payload: { id, q },
  }),
};
