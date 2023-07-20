// import React from 'react';
// import './Contact.module.css';
// import { useAuth0 } from '@auth0/auth0-react';
// import axios from 'axios';
// // import NavBar2 from '../../components/NavBar2';

// function Welcome() {
//   const { user, isAuthenticated } = useAuth0();

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (isAuthenticated && user.email) {
//       const toEmail = user.email;

//       // Enviar el correo electrónico mediante un POST al servidor
//       axios
//         .post('http://localhost:3010/sendwelcome', { toEmail })
//         .then((response) => {
//           console.log('Correo electrónico enviado:', response.data.message);
//           // Aquí puedes realizar acciones adicionales después de enviar el correo
//         })
//         .catch((error) => {
//           console.error('Error al enviar el correo electrónico', error);
//           // Aquí puedes manejar los errores de envío del correo
//         });
//     }
//   };

//   return (
//     <div>
//       <NavBar2 />
//       <h1>Contact Form</h1>
//       <form className='cf' onSubmit={handleSubmit}>
//         <div className='half left cf'>
//           {/* No es necesario el campo de nombre, ya que utilizaremos el correo del usuario autenticado */}
//         </div>
//         <div className='half right cf'>
//           <textarea name='message' type='text' placeholder='Message' required></textarea>
//         </div>
//         <input type='submit' value='Submit' id='input-submit' />
//       </form>
//     </div>
//   );
// }

// export default Welcome;


// import React, { useEffect } from "react";
// import { useAuth0 } from "@auth0/auth0-react";
// import axios from "axios";

// const Welcome = () => {
//   const { user, isAuthenticated } = useAuth0();

//   useEffect(() => {
//     const sendWelcomeEmail = async () => {
//       if (isAuthenticated && user.email) {
//         const toEmail = user.email;

//         // Enviar el correo electrónico mediante un POST al servidor
//         axios
//           .post('http://localhost:3010/sendwelcome', { toEmail })
//           .then((response) => {
//             console.log('Correo electrónico enviado:', response.data.message);
//             // Aquí puedes realizar acciones adicionales después de enviar el correo
//           })
//           .catch((error) => {
//             console.error('Error al enviar el correo electrónico', error);
//             // Aquí puedes manejar los errores de envío del correo
//           });
//       }
//     };

//     sendWelcomeEmail();
//   }, [isAuthenticated, user.email]);

//   return null; // No renderizar nada en el componente Welcome
// };

// export default Welcome;
import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";

const Welcome = () => {
  const { user, isAuthenticated } = useAuth0();

  useEffect(() => {
    const sendWelcomeEmail = async () => {
      if (isAuthenticated && user.email) {
        const toEmail = user.email;

        // Enviar el correo electrónico mediante un POST al servidor
        axios
          .post('http://localhost:3010/sendwelcome', { toEmail })
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

    sendWelcomeEmail();
  }, [isAuthenticated, user.email]);

  return null; // No renderizar nada en el componente Welcome
};

export default Welcome;
