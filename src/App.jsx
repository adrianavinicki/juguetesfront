// // import Home from "./views/Home/Home";
// // import Detail from "./views/Detail/Detail"
// // import Detail2 from "./views/Detail/Detail2"
// // import Form from "./views/Form/Form";
// // import Admin from "./views/Admin/Admin";
// // import Edit from "./views/Edit/Edit"
// // import Update from "./views/Update/Update"
// // import { createBrowserRouter, RouterProvider, Route, Link } from "react-router-dom";
// // import Cart from "./views/Cart/Cart";
// // import OrdersData from "./components/Orders";


// // const router = createBrowserRouter([
// //     {
// //         path:"/",
// //         element: <Home />,
// //     },
// //     {
// //         path:"/detail/:id",
// //         element: <Detail2 />,
// //     },
// //     {
// //         path:"/form",
// //         element: <Form />,
// //     },
// //     {
// //         path:"/cart",
// //         element: <Cart/>,
// //     }, 

// //     {   path:"/admin",
// //         element: <Admin />,
// //     },
// //     {   path:"/admin/orders",
// //         element: <OrdersData/>,
// //     },
    
// //     {
// //         path:"/edit",
// //         element: <Edit />,
// //     },
// //     {
// //         path:"/edit/:id",
// //         element: <Update />,
// //     },
// // ]);

// // function App() {
// //     return (
// //         <div className="App">
// //             <RouterProvider router={router} />
// //         </div>
// //     );
// // }


// // export default App;
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
// import Home from './views/Home/Home';
// import Detail2 from './views/Detail/Detail2';
// import Form from './views/Form/Form';
// import Cart from './views/Cart/Cart';
// import Admin from './views/Admin/Admin';
// import OrdersData from './components/Orders';
// import { useAuth0 } from '@auth0/auth0-react';

// function App() {
//   const { isLoading, isAuthenticated, loginWithRedirect, logout } = useAuth0();
//   const navigate = useNavigate();

//   if (isLoading) {
//     // Puedes mostrar una pantalla de carga mientras Auth0 está realizando la comprobación de sesión
//     return <div>Loading...</div>;
//   }

//   if (!isAuthenticated) {
//     // Si el usuario no está autenticado, redirigir a la página de inicio de sesión
//     loginWithRedirect();
//     return null;
//   }

//   return (
//     <div className="App">
//       <button onClick={() => logout()}>Logout</button>
//       <Router>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/detail/:id" element={<Detail2 />} />
//           <Route path="/form" element={<Form />} />
//           <Route path="/cart" element={<Cart />} />
//           <Route path="/admin" element={<Admin />} />
//           <Route path="/admin/orders" element={<OrdersData />} />
//         </Routes>
//       </Router>
//     </div>
//   );
// }

// export default App;
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './views/Home/Home';
import Detail2 from './views/Detail/Detail2';
import Form from './views/Form/Form';
import Cart from './views/Cart/Cart';
import Admin from './views/Admin/Admin';
import OrdersData from './components/Orders';
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';

function App() {
//   const { isLoading, isAuthenticated, loginWithRedirect, logout } = useAuth0();

//   useEffect(() => {
//     if (!isLoading && !isAuthenticated) {
//       loginWithRedirect();
//     }
//   }, [isLoading, isAuthenticated, loginWithRedirect]);

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

  return (
    <div className="App">
      {/* <button onClick={() => logout()}>Logout</button> */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<Detail2 />} />
          <Route path="/form" element={<Form />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/orders" element={<OrdersData />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
