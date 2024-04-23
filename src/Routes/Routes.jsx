import {
    createBrowserRouter,
    
} from "react-router-dom";
import App from "../App";
import AddCoffee from "../component/AddCoffee";
import UpdateCoffee from "../component/UpdateCoffee";
import ViewDetails from "../component/ViewDetails";
import SignUp from "../component/SignUp/SignUp";
import SignIn from "../component/SignIn";
import Users from "../component/Users";
import MainLayOut from "../component/MainLayOut";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayOut></MainLayOut>,
        children:[
            {
                path: "/",
                element: <App></App>,
                loader:() => fetch('http://localhost:5000/coffee')
            },
            {
                path:'/addCoffee',
                element:<AddCoffee></AddCoffee>
        
            },
            {
                path:'updateCoffee/:id',
                element:<UpdateCoffee></UpdateCoffee>,
                loader: ({params}) => fetch(`http://localhost:5000/coffee/${params.id}`)
            },
            {
                path:'/viewDetails/:id',
                element:<ViewDetails></ViewDetails>,
                loader: ({params}) => fetch(`http://localhost:5000/coffee/${params.id}`)
            },
            {
                path:'/signup',
                element:<SignUp></SignUp>
            },
            {
                path:'/signin',
                element:<SignIn></SignIn>
            },
            {
                path:'/users',
                element:<Users></Users>,
                loader: () => fetch('http://localhost:5000/user')
            }
        
        ]
    }
]);