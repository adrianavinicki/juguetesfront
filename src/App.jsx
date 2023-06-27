import Home from "./views/Home/Home";
import Detail from "./views/Detail/Detail"
import Form from "./views/Form/Form";
import NavBar from "./components/NavBar";
import { createBrowserRouter, RouterProvider, Route, Link } from "react-router-dom";


const router = createBrowserRouter([
    {
        path:"/",
        element: <Home />,
    },
    {
        path:"/detail/:id",
        element: <Detail />,
    },
    {
        path:"/form",
        element: <Form />,
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