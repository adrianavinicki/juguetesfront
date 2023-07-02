import Home from "./views/Home/Home";
import Detail from "./views/Detail/Detail"
import Detail2 from "./views/Detail/Detail2"
import Form from "./views/Form/Form";
import Admin from "./views/Admin/Admin";
import Edit from "./views/Edit/Edit"
import Update from "./views/Update/Update"
import { createBrowserRouter, RouterProvider, Route, Link } from "react-router-dom";


const router = createBrowserRouter([
    {
        path:"/",
        element: <Home />,
    },
    {
        path:"/detail/:id",
        element: <Detail2 />,
    },
    {
        path:"/form",
        element: <Form />,
    },
    {
        path:"/admin",
        element: <Admin />,
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