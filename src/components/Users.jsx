import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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


function UsersData() {

    const users = useSelector((state) => state.users);

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
                <Th>First Name</Th>
                <Th>Last Name</Th>
                <Th>Gender</Th>
                <Th>Email</Th>
                <Th>Rol</Th>
                <Th isNumeric>Mobile</Th>
            </Tr>
            </Thead>
            {users !== undefined && users.length > 0 && (
            <Tbody>
                {users.map((user) => (
                <Tr key={user.id}>
                    <Td>{user.id}</Td>
                    <Td>{user.first_name}</Td>
                    <Td>{user.last_name}</Td>
                    <Td>{user.gender}</Td>
                    <Td>{user.email}</Td>
                    <Td>{user.role_id}</Td>
                    <Td isNumeric>{user.mobile}</Td>
                </Tr>
                ))}
            </Tbody>
            )}
        </Table>
        </TableContainer>
    )
}


export default UsersData;