import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@chakra-ui/react";

import { useNavigate } from 'react-router-dom';

export const LogoutButton = () => {
  const { logout } = useAuth0();

  const navigate = useNavigate();
    
  // const handleContinue = () => {
  //     // returnTo: window.location.origin 
  //     navigate('/home');
  //   };

  return (
    <Button
      colorScheme="gray"
      variant="solid"
      onClick={() => logout({ returnTo: window.location.origin })}
    >
    {/* // <Button onClick={handleContinue}>Continuar</Button> */}
      {/* <button onClick={() => logout({ returnTo: "http://localhost:3001/home" })}> Logout</button> */}
      Logout
    </Button>
  );
};
