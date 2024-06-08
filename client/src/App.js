import {createBrowserRouter, Outlet, RouterProvider,} from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Single from "./pages/Single";
import Write from "./pages/Write";
import Login from "./pages/Login";
import Register from "./pages/Register";
import "./style.scss";

const Layout = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {path: "/", element: <Home/>},
            {path: "/post/:id", element: <Single/>},
            {path: "/write", element: <Write/>},
        ],
    },
    {path: "/login", element: <Login/>},
    {path: "/register", element: <Register/>}
]);

function App() {
    return (
        <div className="app">
            <div className="container">
                <RouterProvider router={router}/>
            </div>
        </div>
    );
}

export default App;
