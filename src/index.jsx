// import React from 'react';
// import ReactDOM from 'react-dom';
// import { ChakraProvider } from '@chakra-ui/react';
// import { Provider } from 'react-redux';
// import { Auth0Provider } from '@auth0/auth0-react';
// import { persistStore } from 'redux-persist';
// import { PersistGate } from 'redux-persist/integration/react';
// import App from './App';
// import store from './redux/store';
// import { LoginAuth } from './views/Login/LoginAuth';
// import { Rating } from './components/Rating';

// const persistor = persistStore(store);

// ReactDOM.render(
//   <Auth0Provider
//     domain="wondertoyshenry.us.auth0.com"
//     clientId="pmqIpRA46YXGq9RBHCY0BG7calWTBYWG"
//     redirectUri={window.location.origin}
//     cacheLocation="localstorage" // Guarda el estado de la sesión en el almacenamiento local
//   >
//     <ChakraProvider>
//       <Provider store={store}>
//         <PersistGate persistor={persistor}>
//           <App />
//           <LoginAuth />
//           <Rating />
//         </PersistGate>
//       </Provider>
//     </ChakraProvider>
//   </Auth0Provider>,
//   document.getElementById('root')
// );

import React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import { Auth0Provider } from '@auth0/auth0-react';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App';
import store from './redux/store';
import { LoginAuth } from './views/Login/LoginAuth';
import Rating from './components/Rating';

const persistor = persistStore(store);

ReactDOM.render(
  <Auth0Provider
    domain="wondertoyshenry.us.auth0.com"
    clientId="pmqIpRA46YXGq9RBHCY0BG7calWTBYWG"
    redirectUri={window.location.origin}
    cacheLocation="localstorage" // Guarda el estado de la sesión en el almacenamiento local
  >
    <ChakraProvider>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <App />
          <LoginAuth />
          <Rating />
        </PersistGate>
      </Provider>
    </ChakraProvider>
  </Auth0Provider>,
  document.getElementById('root')
);
