import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Flex, Box, Text, Avatar, Menu, MenuButton, MenuList, MenuItem, HStack } from '@chakra-ui/react';
import { Link } from "react-router-dom";

export const Profile = () => {
  const { user, isAuthenticated, isLoading, logout } = useAuth0();

  if (isLoading) {
  }

  return (
    isAuthenticated && (
      <Menu>
      <MenuButton as={Flex} alignItems="center">
        <HStack spacing={2}>
          <Text>{user.name}</Text>
          <Avatar src={user.picture} alt={user.name} />
        </HStack>
      </MenuButton>
      <MenuList>
        <MenuItem><Link to="/Profile"> Mi Perfil </Link></MenuItem>
        <MenuItem>Mis Órdenes</MenuItem>
        <MenuItem onClick={() => logout({ returnTo: window.location.origin })}>Cerrar Sesión</MenuItem>
      </MenuList>
    </Menu>
    )
  );
}