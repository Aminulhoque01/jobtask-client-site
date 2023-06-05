import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Error from "../components/Error/Error";
import Home from "../components/Home/Home";
import SingleTaks from "../pages/single-task/SingleTaks";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        errorElement:<Error></Error>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/home',
                element:<Home></Home>
            },
            {
                path:'/single/:id',
                element:<SingleTaks></SingleTaks>,
                loader:({params})=>fetch(`https://task-server-aminulhoque01.vercel.app/single-task/${params.id}`)
            }
        ]
    }
])