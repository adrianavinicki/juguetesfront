import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as randomId } from "uuid";
import NavBar2 from "./NavBar2"
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Link,
  Button,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Box,
} from "@chakra-ui/react";
import { getAllOrders } from "../redux/actions";

function OrdersData() {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.orders);
  const [currentPage, setCurrentPage] = useState(1);
  const [ordersPerPage, setOrdersPerPage] = useState(10);
  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const ordersStatus = ["success", "failed", "in process"];
  const [status, setStatus] = useState("");
  const [mailSearch, setMailSearch] = useState("");

  useEffect(() => {
    dispatch(getAllOrders());
  }, [dispatch]);

  const currentOrders = orders?.slice(indexOfFirstOrder, indexOfLastOrder);

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

  function handleStatusChange(e) {
    setStatus(e.target.value);
  }

  function handleSubmit(id) {
    dispatch(updateOrder(id, status));
  }

  return (
    <TableContainer>
      <NavBar2></NavBar2>
      <Table variant="striped" colorScheme="blue.900">
        <TableCaption>
        <Link href={'/admin'}>
        <Button bg={'blue.900'} color={'white'}>Go Back</Button>
        </Link>
        </TableCaption>
        <Thead>
          <Tr>
            <Th>User Id</Th>
            <Th>Order Id</Th>
            <Th>Product Id</Th>
            <Th isNumeric>Quantity</Th>
            <Th isNumeric>Total Amount</Th>
            <Th>Status</Th>
          </Tr>
        </Thead>
        {currentOrders !== undefined && currentOrders.length > 0 && (
          <Tbody>
            {currentOrders.map((order) => (
              <Tr key={order.id}>
                <Td>{order.userId}</Td>
                <Td>{order.id}</Td>
                <Td> {order.detailorders.map((product) => {
                          return (
                          <Box
                             key={randomId()}
                               className={"admin-purchases-detail"}
                             >
                              <p>
                              {product.productId}
                              </p>
                         </Box>
                         );
                        })}{order.productId}</Td>
                <Td isNumeric>{order.detailorders.map((product) => {
                          return (
                          <Box
                             key={randomId()}
                               className={"admin-purchases-detail"}
                             >
                              <p>
                              {product.quantity}
                              </p>
                         </Box>
                         );
                        })}{order.quantity}</Td>
                <Td isNumeric>{order.totalprice}</Td>
                <Td>{order.order_status}</Td>
              </Tr>
            ))}
          </Tbody>
        )}
      </Table>
    </TableContainer>
  );
}

export default OrdersData;