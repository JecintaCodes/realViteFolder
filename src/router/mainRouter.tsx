import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/commom/Layout";
import HomePage from "../pages/screen/HomePage";
import Register from "../pages/auth/Register";

export const mainRoute = createBrowserRouter([
    {
        path:"/",
        element:<Layout/>,
        children:[
            {
                index:true,
                element:<HomePage/>
            },
            {
                path:"/register",
                element:<Register/>
            }
          
        ]
    },
   
])