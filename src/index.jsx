import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider } from '@chakra-ui/react'
import { Provider } from 'react-redux'
import store from './redux/store.js'
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<Auth0Provider domain="wondertoyshenry.us.auth0.com" clientId="pmqIpRA46YXGq9RBHCY0BG7calWTBYWG" redirectUri={window.location.origin}>
    <ChakraProvider>
        <Provider store={store}>
            <App/>
        </Provider>
    </ChakraProvider>
</Auth0Provider>
);
