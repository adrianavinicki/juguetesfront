import React from "react";
import { useNavigate } from "react-router";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@chakra-ui/react"

export const LoginAuth = () => {
  const { loginWithRedirect } = useAuth0();

  const navigate = useNavigate();

  const login = () => {
    loginWithRedirect()
    //navigate("/login");

  }
  return (
    <div>
          <Button
      onClick={login/*() => loginWithRedirect()*/}
      colorScheme="gray"
      variant="solid"
    >
      Login 
    </Button>
    </div>
  );
};
