export const productReducer = (state, action) => {
  switch (action.type) {
    case "SET_PRODUCT": {
      console.log(action.payload);
      return {
        ...state,
        products: action.payload,
      };
    }
    case "ADD_PRODUCT": {
      return {
        ...state,
        products: [...state.product, action.payload],
      };
    }
    case "UPDATE_PRODUCT": {
      return {
        ...state,
        products: state.product.map((item) =>
          item.id === action.payload.id ? action.payload : item
        ),
      };
    }
    case "REMOVE_PRODUCT": {
      return {
        ...state,
        products: state.product.filter((item) => item.id !== action.payload.id),
      };
    }
    default:
      return state;
  }
};
