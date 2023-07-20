import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";

const Compra = () => {
  const { user, isAuthenticated } = useAuth0();

  useEffect(() => {
    const sendCompraEmail = async () => {
      if (isAuthenticated && user.email) {
        const toEmail = user.email;

        // Enviar el correo electrónico mediante un POST al servidor
        axios
          .post('http://localhost:3010/sendCompra', { toEmail })
          .then((response) => {
            console.log('Correo electrónico enviado:', response.data.message);
            // Aquí puedes realizar acciones adicionales después de enviar el correo
          })
          .catch((error) => {
            console.error('Error al enviar el correo electrónico', error);
            // Aquí puedes manejar los errores de envío del correo
          });
      }
    };

    sendCompraEmail();
  }, [isAuthenticated, user.email]);

  return null; // No renderizar nada en el componente Welcome
};

export default Compra;
