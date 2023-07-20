// import React from 'react';
// import './Contact.module.css';
// import Navbar2 from '../../components/NavBar2';


// function ContactForm() {
//   const handleSubmit = (e) => {
    
//   };

//   return (
//     <div>
//       <Navbar2 />
//       <h1>Contact Form</h1>
//       <form className='cf' onSubmit={handleSubmit}>
//         <div className='half left cf'>
//           <input type='text' placeholder='Name' name='user_name' required />
//           <input type='email' placeholder='Email address' name='user_email' required />
//         </div>
//         <div className='half right cf'>
//           <textarea name='message' type='text' placeholder='Message' required></textarea>
//         </div>
//         <input type='submit' value='Submit' id='input-submit' />
//       </form>
//     </div>
//   );
// }

// export default ContactForm;

import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import './Contact.module.css';
import Navbar2 from '../../components/NavBar2';

function ContactForm() {
  const { user, isAuthenticated } = useAuth0();

  const handleSubmit = (e) => {
    e.preventDefault();

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

  return (
    <div>
      <Navbar2 />
      <h1>Contact Form</h1>
      <form className='cf' onSubmit={handleSubmit}>
        <div className='half left cf'>
          <input type='text' placeholder='Name' name='user_name' required />
          <input type='email' placeholder='Email address' name='user_email' required />
        </div>
        <div className='half right cf'>
          <textarea name='message' type='text' placeholder='Message' required></textarea>
        </div>
        <input type='submit' value='Submit' id='input-submit' />
      </form>
    </div>
  );
}

export default ContactForm;
