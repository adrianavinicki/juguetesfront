import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as randomId } from "uuid";
import NavBar2 from "./NavBar2";
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
  // const [currentPage, setCurrentPage] = useState(1);
  // const [ordersPerPage, setOrdersPerPage] = useState(15);
  // const indexOfLastOrder = currentPage * ordersPerPage;
  // const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  // const ordersStatus = ["success", "failed", "in process"];
  // const [status, setStatus] = useState("");
  // const [mailSearch, setMailSearch] = useState("");

  useEffect(() => {
    dispatch(getAllOrders());
  }, [dispatch]);

  // const currentOrders = orders?.slice(indexOfFirstOrder, indexOfLastOrder);

  return (
    <Box>
      <NavBar2></NavBar2>
      <TableContainer bg={""} overflowY="auto" maxHeight="800px">
        <Table
          overflowY="auto"
          maxHeight="230px"
          variant="striped"
          colorScheme="blue.900"
        >
          <TableCaption></TableCaption>
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
          {orders !== undefined && orders.length > 0 && (
            <Tbody>
              {orders.map((order) => (
                <Tr key={order.id}>
                  <Td>{order.userId}</Td>
                  <Td>{order.id}</Td>
                  <Td>
                    {" "}
                    {order.detailorders.map((product) => {
                      return (
                        <Box
                          key={randomId()}
                          className={"admin-purchases-detail"}
                        >
                          <p>{product.productId}</p>
                        </Box>
                      );
                    })}
                    {order.productId}
                  </Td>
                  <Td isNumeric>
                    {order.detailorders.map((product) => {
                      return (
                        <Box
                          key={randomId()}
                          className={"admin-purchases-detail"}
                        >
                          <p>{product.quantity}</p>
                        </Box>
                      );
                    })}
                    {order.quantity}
                  </Td>
                  <Td isNumeric>{order.totalprice}</Td>
                  <Td>{order.order_status}</Td>
                </Tr>
              ))}
            </Tbody>
          )}
        </Table>
      </TableContainer>
      <Link href={"/admin"}>
        <Button bg={"blue.900"} color={"white"} ml={'48%'}>
          Go Back
        </Button>
      </Link>
    </Box>
  );
}

export default OrdersData;
