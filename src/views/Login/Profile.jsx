import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Flex, Box, Text, Avatar, Menu, MenuButton, MenuList, MenuItem, HStack } from '@chakra-ui/react';
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { emptyActualUser } from "../../redux/actions"


export const Profile = () => {
  const { user, isAuthenticated, isLoading, logout } = useAuth0();

  const dispatch = useDispatch()

  if (isLoading) {
  }

  const logOut = () => {
    dispatch(emptyActualUser())
    logout({ returnTo: window.location.origin })
  }

  return (
    isAuthenticated && (
      <Menu>
      <MenuButton as={Flex} alignItems="center">
        <HStack spacing={2}>
          <Text color={'white'}>{user.name}</Text>
          <Avatar src={user.picture} alt={user.name} />
        </HStack>
      </MenuButton>
      <MenuList>
        <Link to="/Profile">
        <MenuItem>Mi Perfil</MenuItem>
        </Link>
        <Link to='/shopping'>
          <MenuItem>Mis Compras</MenuItem>
        </Link>
        <MenuItem onClick={logOut}>Cerrar Sesión</MenuItem>
      </MenuList>
    </Menu>
    )
  );
}