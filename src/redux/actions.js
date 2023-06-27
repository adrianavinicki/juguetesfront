import axios from "axios";

export const GET_PRODUCTS = "GET_PRODUCTS"
export const GET_PRODUCT = "GET_PRODUCT"
export const POST_PRODUCT = "POST_PRODUCT"
export const FILTER_BY_AGE = "FILTER_BY_AGE"
export const FILTER_BY_PRICE = "FILTER_BY_PRICE"
export const GET_PRODUCTS_NAME = "GET_PRODUCTS_NAME"


export const getProducts = () => {
    return async function(dispatch){
        const dbData = await axios.get("http://localhost:3010/products");
        const products = dbData.data;
        dispatch({ type: GET_PRODUCTS, payload: products });
    };
};

export const getProduct = (id) => {
    return async function(dispatch){
        const dbData = await axios.get(`http://localhost:3010/products/${id}`);
        const product = dbData.data;
        dispatch({ type: GET_PRODUCT, payload: product });
    };
};

export const getProductsName = (names) => {
    return async function (dispatch) {
      const dbData = await axios.get(`http://localhost:3010/products/?name=${names}`);
      const filteredProducts = dbData.data;
      dispatch({ type: GET_PRODUCTS_NAME, payload: filteredProducts });
    };
  };

export const postProduct = (payload) => {
    return async function(dispatch){
        const response = await axios.post("http://localhost:3010/products/create", payload);
        return response;
    };
};

export const filterByAge = (age) => {
    return {
        type: FILTER_BY_AGE,
        payload: age,
    }
}

export const filterByPrice = (price) => {
    return {
        type: FILTER_BY_PRICE,
        payload: price,
    }
}
