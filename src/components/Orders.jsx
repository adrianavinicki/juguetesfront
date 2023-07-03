import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as randomId } from "uuid";

import { Link } from "react-router-dom";

//import { useAuth } from "../Auth/authContext";

import { getAllOrders, getOrderById } from "../redux/actionsOrders";
import {
    Box,
    Container,
    Heading,
    SimpleGrid,
    Icon,
    Text,
    Stack,
    HStack,
    VStack,
    Flex,
    Link,
    Button,
  } from '@chakra-ui/react';
  import { CheckIcon, DeleteIcon, EditIcon } from '@chakra-ui/icons';



function OrdersData() {
  const dispatch = useDispatch();
  const { authUser } = useAuth();
  const orders = useSelector((state) => state.orders);
  const [currentPage, setCurrentPage] = useState(1);
  const [ordersPerPage, setOrdersPerPage] = useState(10);
  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const ordersStatus = ["success", "failed", "in process"];
  const [status, setStatus] = useState("");

  useEffect(() => {
    dispatch(getAllOrders(authUser.email));
    dispatch(getOrderById(authUser.email));
  }, [dispatch]);

  const currentOrders = orders?.slice(
    indexOfFirstOrder,
    indexOfLastOrder
  );
  const [mailSearch, setMailSearch] = useState("");

  function paging(pageNumber) {
    setCurrentPage(pageNumber);
  }

  function handleFilterByStatus(e) {
    setCurrentPage(1);
    dispatch(filterByStatus(e.target.value));
  }

  function handlePagesChange(e) {
    setOrdersPerPage(e.target.value);
  }

  function handleInputChange(e) {
    e.preventDefault();
    setMailSearch(e.target.value);
  }

  function handleSearch(e) {
    e.preventDefault();
    dispatch(filterByMail(mailSearch));
    setCurrentPage(1);
    document.getElementById("mailSearch").value = "";
  }

  function handleStatusChange(s) {
    setStatus(s.target.value);
  }

  function handleSubmit(id, status) {
    dispatch(updateOrder(id, status));
  }
// llegue hasta ACA - tengo que ver donde van las funciones de arriba
  return (
    <div className="edit-product-main-container">
      <div className="edit-product-sub-container">
        <h1>Purchases</h1>
        <div className="search-by-email-container">
          <input
            type="text"
            id="mailSearch"
            placeholder="Search by email"
            className="admin-input"
            onChange={(e) => handleInputChange(e)}
          />
          <button
            className={"admin-search-buttons"}
            onClick={(e) => handleSearch(e)}
          >
            Search
          </button>
          <button
            className={"admin-search-buttons"}
            onClick={() => dispatch(filterByMail(""))}
          >
            Reset
          </button>
        </div>
        <div className="admin-paging">
          <label htmlFor="purchaseStatus" className="admin-form-titles">
            Filter By Status
          </label>
          <select
            className="admin-input"
            name="purchaseStatus"
            onChange={(e) => handleFilterByStatus(e)}
          >
            {purchaseStatus.map((status) => {
              return <option value={status}>{status}</option>;
            })}
          </select>

          <label htmlFor="purchasesPerPage" className="admin-form-titles">
            Purchases Per Page
          </label>
          <select
            onChange={(e) => handlePagesChange(e)}
            className="admin-input"
            style={{ width: "5rem" }}
          >
            <option key={10}>10</option>
            <option key={20}>20</option>
            <option key={30}>30</option>
            <option key={40}>40</option>
            <option key={50}>50</option>
          </select>
        </div>
        <Paging
          itemsPerPage={purchasesPerPage}
          allItems={purchases?.length}
          paging={paging}
        />
        <div>
          <div className="admin-products-container">
            {currentPurchases !== undefined && currentPurchases.length > 0 ? (
              currentPurchases.map((purchase) => {
                return (
                  <div
                    key={randomId()}
                    className="admin-purchases-sub-container"
                  >
                    <div key={randomId()} className={"admin-purchases-card"}>
                      <div key={randomId()}>
                        <div key={randomId()}>
                          <p>User : {purchase.User.email}</p>
                          <hr />
                          <p>Purchase ID : {purchase.purchase_id}</p>
                        </div>
                        <hr />
                        <h3>Products :</h3>
                        {purchase.ProductDetails.map((product) => {
                          return (
                            <div
                              key={randomId()}
                              className={"admin-purchases-detail"}
                            >
                              <p>
                                {product.Product.name} :{" "}
                                {product.product_quantity}
                              </p>
                            </div>
                          );
                        })}
                        <hr />
                        {purchase.ScheduleDetails.map((schedule) => {
                          return (
                            <div
                              key={randomId()}
                              className={"admin-purchases-detail"}
                            >
                              <p>Schedule Details</p>
                              <p>Day : {schedule.Schedule.day}</p>
                              <p>
                                Quantity of seats :{" "}
                                {schedule.seat_numbers.length}
                              </p>
                            </div>
                          );
                        })}
                        <hr />
                        <p>Actual Status : {purchase.status}</p>
                        <>
                          Select New Status :
                          <select
                            name="status"
                            id="status"
                            className="admin-input"
                            onChange={(e) => handleStatusChange(e)}
                          >
                            {purchaseStatus.map((status) => {
                              return <option value={status}>{status}</option>;
                            })}
                          </select>
                        </>
                        <hr />
                      </div>
                      <div key={randomId()}>
                        <p>Total : ${purchase.amount}</p>
                      </div>
                      <button
                        className="delete-product-button"
                        onClick={() => handleSubmit(purchase.purchase_id)}
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                );
              })
            ) : (
              <div key={randomId()}>
                <h3>No purchases</h3>
              </div>
            )}
          </div>
        </div>
      </div>
      <Link to="/adminmenu">
        <button className="admin-buttons">Back</button>
      </Link>
    </div>
  );
}

export default Purchases;