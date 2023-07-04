import {
  GET_PRODUCTS,
  GET_PRODUCT,
  POST_PRODUCT,
  FILTER_BY_AGE,
  FILTER_BY_PRICE,
  GET_PRODUCTS_NAME,
  FILTER_BY_CATEGORY,
  FILTER_BY_BRAND,
  ORDER_BY_PRICE,
  GET_PRODUCTS_FILTERED,
  COMBINED_FILTERS,
  GET_PRODUCTS_FILTERED_PAGE,
  PRODUCTS_FILTER,
} from "./actions";

const initialState = {
  products: [],
  //filteredByAge: [],
  filteredProducts: [],
  productDetail: [],
  // brandFilter: [],
  // categoryFilter: [],
  // ageFilter: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        filteredProducts: action.payload,
      };
    case GET_PRODUCT:
      return { ...state, productDetail: action.payload };
    case POST_PRODUCT:
      return {
        ...state,
      };
    case GET_PRODUCTS_NAME:
      return { ...state, filteredProducts: {data:action.payload} };
    // case COMBINED_FILTERS:
    //   return {...state, filteredProducts: action.payload}
    case ORDER_BY_PRICE:
        if(!state.filteredProducts.length) {
            const orderPrice = 
            action.payload === 'Asc'
            ?  state.products.slice().sort((a,b) => {return b.price-a.price})
            :  state.products.slice().sort((a,b) => {return a.price-b.price}) 
            return {
                ...state,
                filteredProducts: orderPrice
            }
        } else {
            const orderPrice = 
            action.payload === 'Asc'
            ?  state.filteredProducts.slice().sort((a,b) => {return b.price-a.price})
            :  state.filteredProducts.slice().sort((a,b) => {return a.price-b.price})
            return {
                ...state,
                filteredProducts: orderPrice
            }
        }
    case GET_PRODUCTS_FILTERED:
      return {
        ...state,
        filteredProducts: action.payload,
      };
    case GET_PRODUCTS_FILTERED_PAGE:
      return {
        ...state,
        filteredProducts: action.payload,
      }
    case PRODUCTS_FILTER:
      return {
        ...state,
        filteredProducts: action.payload
      }
    default:
      return { ...state };
  }
};

export default rootReducer;
