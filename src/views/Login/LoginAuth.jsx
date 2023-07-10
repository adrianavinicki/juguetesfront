import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@chakra-ui/react"

export const LoginAuth = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <Button
      onClick={() => loginWithRedirect()}
      colorScheme="gray"
      variant="solid"
    >
      Login 
    </Button>
  );
};
