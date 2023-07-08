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
  ADD_TO_CART,
  GET_PRODUCTS_FILTERED,
  COMBINED_FILTERS,
  REMOVE_PRODUCT_FROM_CART,
  DECREASE_PRODUCT_QUANTITY,
  INCREASE_PRODUCT_QUANTITY,
  GET_ALL_ORDERS,
  GET_ORDER_BY_ID,
  GET_ALL_DETAIL_ORDERS,
  GET_DETAIL_ORDER_BY_ID,
  GET_PRODUCTS_FILTERED_PAGE,
  PRODUCTS_FILTER,
  ACTUALIZAR_FILTRO_PARA_PAGINADO,
  CREATE_REVIEW,
  FETCH_REVIEWS
} from "./actions";

import { persistReducer } from "redux-persist";
import storageSession from "redux-persist/lib/storage/session";

const persistConfig = {
  key: "root",
  storage: storageSession,
};

const initialState = {
  products: [],
  //filteredByAge: [],
  filteredProducts: [],
  filtroParaPaginado: {},
  productDetail: [],
  cartItems: [],
  // brandFilter: [],
  // categoryFilter: [],
  // ageFilter: [],
  reviews: [],
  orders: [],
  selectedOrder: null,
  detailOrders: [],
  selectedDetailOrder: null,
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
      if (!state.filteredProducts.length) {
        const orderPrice =
          action.payload === "Asc"
            ? state.products.slice().sort((a, b) => {
                return b.price - a.price;
              })
            : state.products.slice().sort((a, b) => {
                return a.price - b.price;
              });
        return {
          ...state,
          filteredProducts: orderPrice,
        };
      } else {
        const orderPrice =
          action.payload === "Asc"
            ? state.filteredProducts.slice().sort((a, b) => {
                return b.price - a.price;
              })
            : state.filteredProducts.slice().sort((a, b) => {
                return a.price - b.price;
              });
        return {
          ...state,
          filteredProducts: orderPrice,
        };
      }

    case ADD_TO_CART:
      const existingItemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (existingItemIndex !== -1) {
        // If the item already exists in the cart, update its quantity, revisar lo de abajo
        const updatedCartItems = [...state.cartItems];
        updatedCartItems[existingItemIndex].quantity++;

        return {
          ...state,
          cartItems: updatedCartItems,
        };
      } else {
        // If the item doesn't exist in the cart, add it with a quantity of 1
        return {
          ...state,
          cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
        };
      }

    case GET_PRODUCTS_FILTERED:
      return {
        ...state,
        filteredProducts: action.payload,
      };

    case REMOVE_PRODUCT_FROM_CART:
      const updatedCartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
      return {
        ...state,
        cartItems: updatedCartItems,
      };

    case DECREASE_PRODUCT_QUANTITY:
      const updatedItems = state.cartItems.map((item) => {
        if (item.id === action.payload) {
          const updatedQuantity = item.quantity - 1;

          if (updatedQuantity <= 0) {
            // Remove the item from the cart if quantity becomes 0 or less
            return null;
          }
          return {
            ...item,
            quantity: updatedQuantity,
          };
        }
        return item;
      });

      const filterCartItems = updatedItems.filter(Boolean); // Remove null items

      return {
        ...state,
        cartItems: filterCartItems,
      };

    case INCREASE_PRODUCT_QUANTITY:
      const IncreasedItems = state.cartItems.map((item) => {
        if (item.id === action.payload) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }

        return item;
      });

      return {
        ...state,
        cartItems: IncreasedItems,
      };
    case GET_ALL_ORDERS:
      return {
        ...state,
        orders: action.payload,
      };
    case GET_ORDER_BY_ID:
      return { ...state, selectedOrder: action.payload };

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

    case "ACTUALIZAR_FILTRO_PARA_PAGINADO":
      return {
        ...state,
        filtroParaPaginado: action.payload
      }  
      
      
    case CREATE_REVIEW:
            return {
              ...state,
              reviews: [...state.reviews, action.payload],
            };
    case FETCH_REVIEWS:
            return {
              ...state,
              reviews: action.payload,
            };
         
    default:
      return { ...state };
  }
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
