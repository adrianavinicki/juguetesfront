import {
  GET_PRODUCTS,
  GET_PRODUCT,
  POST_PRODUCT,
  FILTER_BY_AGE,
  FILTER_BY_PRICE,
  GET_PRODUCTS_NAME,
  FILTER_BY_CATEGORY,
  FILTER_BY_BRAND,
  ORDER_BY_PRICE
} from "./actions";

const initialState = {
  products: [],
  //filteredByAge: [],
  filteredProducts: [],
  productDetail: [],
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
      return { ...state, filteredProducts: action.payload };
    case FILTER_BY_AGE:
      const filteredProducts =
        action.payload === "All"
          ? [...state.products]
          : !state.filteredProducts.length
          ? [...state.products].filter((a) => a.minimun_age >= action.payload)
          : [...state.filteredProducts].filter((a) => a.minimun_age >= action.payload);
      return {
        ...state,
        filteredProducts: filteredProducts,
        //filteredByAge: filteredProducts,
      };
    //case FILTER_BY_PRICE:
    //   const filtered = state.filteredByAge.length
    //     ? state.filteredByAge.filter((el) => el.price <= action.payload)
    //     : state.products.filter((el) => el.price <= action.payload);

    //   if (!filtered.length) {
    //     alert("No hay productos con ese precio maximo");
    //     return { ...state };
    //   } else {
    //     return {
    //       ...state,
    //       filteredProducts: filtered,
    //     };
    //   };

    case FILTER_BY_CATEGORY:
        const categoryFiltered = action.payload === 'All'
        ? [...state.products]
        : !state.filteredProducts.length
        ? [...state.products].filter((c) => c.category === action.payload)
        : [...state.filteredProducts].filter((c) => c.category === action.payload);
        return {
            ...state,
            filteredProducts: categoryFiltered
        }  

    case FILTER_BY_BRAND:
        const brandFiltered = action.payload === 'All'
        ? [...state.products]
        : !state.filteredProducts.length
        ? [...state.products].filter((b) => b.brand === action.payload)
        : [...state.filteredProducts].filter((b) => b.brand === action.payload);
        return {
            ...state,
            filteredProducts: brandFiltered
        }
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
    default:
      return { ...state };
  }
};

export default rootReducer;
