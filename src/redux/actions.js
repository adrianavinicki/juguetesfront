import axios from "axios";

export const GET_PRODUCTS = "GET_PRODUCTS";
export const GET_PRODUCT = "GET_PRODUCT";
export const POST_PRODUCT = "POST_PRODUCT";
export const FILTER_BY_AGE = "FILTER_BY_AGE";
export const FILTER_BY_PRICE = "FILTER_BY_PRICE";
export const GET_PRODUCTS_NAME = "GET_PRODUCTS_NAME";
export const FILTER_BY_CATEGORY = "FILTER_BY_CATEGORY";
export const FILTER_BY_BRAND = "FILTER_BY_BRAND";
export const ORDER_BY_PRICE = "ORDER_BY_PRICE";
export const ADD_TO_CART = "ADD_TO_CART";
export const GET_PRODUCTS_FILTERED = "GET_PRODUCTS_FILTERED";
export const GET_PRODUCTS_FILTERED_PAGE = "GET_PRODUCTS_FILTERED_PAGE"
export const COMBINED_FILTERS = "COMBINED_FILTERS";
export const REMOVE_PRODUCT_FROM_CART = "REMOVE_PRODUCT_FROM_CART";
export const DECREASE_PRODUCT_QUANTITY = "DECREASE_PRODUCT_QUANTITY";
export const INCREASE_PRODUCT_QUANTITY = "INCREASE_PRODUCT_QUANTITY";

export const GET_ALL_ORDERS = "GET_ALL_ORDERS";
//export const POST_ORDER = "POST_ORDER";
//export const PUT_ORDER = "PUT_ORDER";
export const GET_ORDER_BY_ID = "GET_ORDER_BY_ID";
export const PRODUCTS_FILTER = "PRODUCTS_FILTER"

export const GET_ALL_DETAIL_ORDERS = "GET_ALL_DETAIL_ORDERS";
export const GET_DETAIL_ORDER_BY_ID = "GET_DETAIL_ORDER_BY_ID";
//export const POST_DETAIL_ORDER = "POST_DETAIL_ORDER";
//export const PUT_DETAIL_ORDER = "PUT_DETAIL_ORDER";

export const getProducts = () => {
  return async function (dispatch) {
    const dbData = await axios.get("http://localhost:3010/products");
    const products = dbData.data;
    dispatch({ type: GET_PRODUCTS, payload: products });
  };
};

export const getProduct = (id) => {
  return async function (dispatch) {
    const dbData = await axios.get(`http://localhost:3010/products/${id}`);
    const product = dbData.data;
    dispatch({ type: GET_PRODUCT, payload: product });
  };
};

export const getProductsName = (names) => {
  return async function (dispatch) {
    const dbData = await axios.get(
      `http://localhost:3010/products/?name=${names}`
    );
    const filteredProducts = dbData.data;
    dispatch({ type: GET_PRODUCTS_NAME, payload: filteredProducts });
  };
};

export const postProduct = (payload) => {
  return async function (dispatch) {
    const response = await axios.post(
      "http://localhost:3010/products/create",
      payload
    );
    return response;
  };
};

export const putProduct = (payload) => {
    return async function(dispatch){
        const response = await axios.post("http://localhost:3010/products/update/:id", payload);
        return response;
    };
};

export const putProduct = (payload) => {
    return async function(dispatch){
        const response = await axios.post("http://localhost:3010/products/update/:id", payload);
        return response;
    };
};

export const getProductsFiltered = (name, value) => {
  return async function (dispatch) {
    const response = await axios.get(
      `http://localhost:3010/products/?${name}=${value}`
    );
    const responseData = response.data;
    dispatch({ type: GET_PRODUCTS_FILTERED, payload: responseData });
  };
};



export const getProductsFilteredPage = (params) => {
    return async function(dispatch){
        const response2 = await axios.get("http://localhost:3010/products",{params:params});
        const responseData = response2.data;
        dispatch({ type: GET_PRODUCTS_FILTERED_PAGE, payload : responseData})
    }
}



export const getProductsFilteredPage = (params) => {
    return async function(dispatch){
        const response2 = await axios.get("http://localhost:3010/products",{params:params});
        const responseData = response2.data;
        dispatch({ type: GET_PRODUCTS_FILTERED_PAGE, payload : responseData})
    }
}

export const filterByAge = (age) => {
  return {
    type: FILTER_BY_AGE,
    payload: age,
  };
};

export const filterByPrice = (price) => {
  return {
    type: FILTER_BY_PRICE,
    payload: price,
  };
};

export const filterByCategory = (category) => {
  return {
    type: FILTER_BY_CATEGORY,
    payload: category,
  };
};

export const filterByBrand = (brand) => {
  return {
    type: FILTER_BY_BRAND,
    payload: brand,
  };
};

export const orderByPrice = (method) => {
  return {
    type: ORDER_BY_PRICE,
    payload: method,
  };
};

export const addProductToCart = (cart) => {
  return {
    type: ADD_TO_CART,
    payload: cart,
  };
};

export const removeProductFromCart = (productID) => {
  return {
    type: REMOVE_PRODUCT_FROM_CART,
    payload: productID,
  };
};

export const decreaseProductQuantity = (productID) => {
  return {
    type: DECREASE_PRODUCT_QUANTITY,
    payload: productID,
  };
};

export const increaseProductQuantity = (productID) => {
  return {
    type: INCREASE_PRODUCT_QUANTITY,
    payload: productID,
  };
};

export const getAllOrders = () => {
  return async function (dispatch) {
    const dbData = await axios.get("http://localhost:3010/orders");
    const orders = dbData.data;
    dispatch({ type: GET_ALL_ORDERS, payload: orders });
  };
};

export const getOrderById = (id) => {
  return async function (dispatch) {
    const dbData = await axios.get(`http://localhost:3010/orders/${id}`);
    const order = dbData.data;
    dispatch({ type: GET_ORDER_BY_ID, payload: order });
  };
};

export const modifyOrder = (id, orderData) => {
  return async function () {
    try {
      await axios.put(`http://localhost:3010/orders/update/${id}`, orderData);
    } catch (error) {
      alert(error.message);
    }
    // const updatedOrder = dbData.data;
    //dispatch({ type: PUT_ORDER, payload: updatedOrder });
  };
};

export const createOrder = (payload) => {
  return async function () {
    try {
      await axios.post("http://localhost:3010/orders/create", payload);
      alert("Order Created");
    } catch (error) {
      alert(error.message);
    }
  };
};

export const getAllDetailOrders = () => {
  return async function (dispatch) {
    const dbData = await axios.get("http://localhost:3010/detailorders");
    const details = dbData.data;
    dispatch({
      type: GET_ALL_DETAIL_ORDERS,
      payload: details,
    });
  };
};

export const getDetailOrderById = (id) => {
  return async function (dispatch) {
    const dbData = await axios.get(`http://localhost:3010/detailorders/${id}`);
    const detail = dbData.data;
    dispatch({ type: GET_DETAIL_ORDER_BY_ID, payload: detail });
  };
};

export const productsFilter = (params) => {
    return {
        type: PRODUCTS_FILTER,
        payload: params
    };
}

export const createDetailOrder = (payload) => {
  return async function () {
    try {
      await axios.post("http://localhost:3010/detailorders/create", payload);
      alert("Detail Order Created");
    } catch (error) {
      alert(error.message);
    }
  };
};
