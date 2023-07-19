import React from 'react';
import './Contact.module.css';
import emailjs from 'emailjs-com';
import { useAuth0 } from '@auth0/auth0-react';

emailjs.init('JmeVH_Lw8dQIAp8xD');

function EmailWelcome() {
  const { user } = useAuth0();

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      to_name: user.name,
      from_name: 'Nombre del remitente',
      message: 'Bienvenido a este mundo de Juguetes!!',
      user_email: user.email, // Utiliza la dirección de correo electrónico del usuario autenticado
    };

    emailjs
      .send('service_wondertoys', 'EmailWelcome', templateParams)
      .then((response) => {
        console.log('Correo electrónico enviado correctamente', response);
        // Aquí puedes realizar acciones adicionales después de enviar el correo
      })
      .catch((error) => {
        console.error('Error al enviar el correo electrónico', error);
        // Aquí puedes manejar los errores de envío del correo
      });

    // Restablecer los campos del formulario después de enviar el correo
    e.target.reset();
  };

  return (
    <div>
      <h1>Contact Form</h1>
      <form className='cf' onSubmit={handleSubmit}>
        <div className='half left cf'>
          <input type='text' placeholder='Name' name='user_name' required />
          {/* No es necesario el campo de correo electrónico */}
        </div>
        <div className='half right cf'>
          <textarea name='message' type='text' placeholder='Message' required></textarea>
        </div>
        <input type='submit' value='Submit' id='input-submit' />
      </form>
    </div>
  );
}

export default EmailWelcome;