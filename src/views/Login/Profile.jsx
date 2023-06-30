import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

import { Flex, Box, Text, Avatar } from '@chakra-ui/react'

export const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    // return <div>Loading...</div>;
  }

  return (
    isAuthenticated && ( 
  <Flex>
  <Avatar src={user.picture} alt={user.name} />
  <Box ml='3'>
    <h2>{user.name}</h2>
    {/* <p>Email: {user.email}</p> */}
  </Box>
</Flex>
    )
  );
};