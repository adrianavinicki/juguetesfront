import React from 'react';
import './Contact.module.css';
import emailjs from 'emailjs-com';

emailjs.init('JmeVH_Lw8dQIAp8xD');

function EmailCompra() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      to_name: e.target.user_name.value,
      from_name: 'Nombre del remitente',
      message: 'Gracias por tu compra!!',
    };

    emailjs.send('service_wondertoys', 'EmailWelcome', templateParams)
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

export default EmailCompra;
