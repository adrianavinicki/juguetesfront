import axios from "axios";

export const GET_PRODUCTS = "GET_PRODUCTS"
export const GET_PRODUCT = "GET_PRODUCT"


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