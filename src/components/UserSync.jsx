import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import Welcome from "../views/Contact/Welcome";

const POST_NEW_USER = import.meta.env.VITE_POST_NEW_USER;

const UserSync = ({ onUserData }) => {
  const { isAuthenticated, isLoading, user } = useAuth0();

  useEffect(() => {
    const fetchData = async () => {
      if (isAuthenticated && !isLoading) {
        // Enviar los datos del usuario al backend
        const userData = {
          first_name: user.given_name,
          last_name: user.family_name,
          gender: "X",
          email: user.email,
          delivery_address: "Henry City",
          mobile: 541158239020,
          role_id: "Cliente",
          user_password: "12345678",
        };

        // console.log("pasando por useEffect de userSync:", userData);
        console.log("correo a consultar", userData.email, "tipo de dato:", typeof userData.email);

        // Almacenar las promesas en variables
        const createUserPromise = !user ? createUser(userData) : Promise.resolve();
        const sendWelcomeEmailPromise = sendWelcomeEmail(user.email);

        // Ejecutar ambas promesas de manera concurrente
        await Promise.all([createUserPromise, sendWelcomeEmailPromise]);
      }
    };
    fetchData();
  }, [isAuthenticated, isLoading, user, onUserData]);

  const createUser = async (userData) => {
    try {
      const response = await axios.post(POST_NEW_USER, userData);
      console.log("Usuario creado correctamente:", response.data);
      // Llamar al componente Welcome después de crear el usuario y enviar el correo
      <Welcome />;
    } catch (error) {
      console.error("Validar Datos, usuario ya existente:", error);
      // Maneja los errores de creación de usuario si es necesario
      if (typeof onUserData === "function") {
        onUserData(user); // Pasar los datos del usuario al componente AuthComponent
      }
      console.error("Enviados datos al contenedor" + JSON.stringify(userData));
    }
  };

  const sendWelcomeEmail = async (toEmail) => {
    // Enviar el correo electrónico mediante un POST al servidor
    try {
      const response = await axios.post('http://localhost:3010/sendwelcome', { toEmail });
      console.log('Correo electrónico enviado:', response.data.message);
      // Aquí puedes realizar acciones adicionales después de enviar el correo
    } catch (error) {
      console.error('Error al enviar el correo electrónico', error);
      // Aquí puedes manejar los errores de envío del correo
    }
  };

  return null; // No renderizar nada en el componente UserSync
};

export default UserSync;
