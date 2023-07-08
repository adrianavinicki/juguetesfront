import Home from "./views/Home/Home";
import Simple from "./views/Detail/Detail"
import Detail2 from "./views/Detail/Detail2"
import Form from "./views/Form/Form";
import Admin from "./views/Admin/Admin";
import Edit from "./views/Edit/Edit"
import Update from "./views/Update/Update"
import { createBrowserRouter, RouterProvider, Route, Link } from "react-router-dom";
import Cart from "./views/Cart/Cart";
import Cart2 from "./views/Cart/Cart2";
import OrdersData from "./components/Orders";


const router = createBrowserRouter([
    {
        path:"/",
        element: <Home />,
    },
    {
        path:"/detail/:id",
        element: <Simple />,
    },
    {
        path:"/form",
        element: <Form />,
    },
    {
        path:"/cart",
        element: <Cart/>,
    }, 

    {   path:"/admin",
        element: <Admin />,
    },
    {   path:"/admin/orders",
        element: <OrdersData/>,
    },
    
    {
        path:"/edit",
        element: <Edit />,
    },
    {
        path:"/edit/:id",
        element: <Update />,
    },
]);

function App() {
    return (
        <div className="App">
            <RouterProvider router={router} />
        </div>
    );
}


export default App;