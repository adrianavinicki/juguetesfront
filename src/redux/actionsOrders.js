import axios from "axios";

export const GET_ALL_ORDERS = "GET_ALL_ORDERS";
export const POST_ORDER = "POST_ORDER";
export const PUT_ORDER = "PUT_ORDER";
export const GET_ORDER_BY_ID = "GET_ORDER_BY_ID";

export const GET_ALL_DETAIL_ORDERS = "GET_ALL_DETAIL_ORDERS";
export const GET_DETAIL_ORDER_BY_ID = "GET_DETAIL_ORDER_BY_ID";
export const POST_DETAIL_ORDER = "POST_DETAIL_ORDER";
//export const PUT_DETAIL_ORDER = "PUT_DETAIL_ORDER";

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
  return async function (dispatch) {
    const dbData = await axios.put(
      `http://localhost:3010/orders/update/${id}`,
      orderData
    );
    const updatedOrder = dbData.data;
    dispatch({ type: PUT_ORDER, payload: updatedOrder });
  };
};

export const createOrder = (payload) => {
  return async function () {
    const response = await axios.post(
      "http://localhost:3010/orders/create",
      payload
    );
    return response;
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

export const createDetailOrder = (payload) => {
  return async function () {
    const response = await axios.post(
      "http://localhost:3010/detailorders/create",
      payload
    );
    return response;
  };
};
