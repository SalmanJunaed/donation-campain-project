import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Donation from "../pages/Donation/Donation";
import Statistics from "../pages/Statistics/Statistics";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Donate from "../pages/Donate/Donate";


const myCreatedRouter = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage> ,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader: ()=> fetch('/donates.json'),
            },
            {
                path: '/donation',
                element: <Donation></Donation>,
            },
            {
                path: '/statistics',
                element: <Statistics></Statistics>,
            },
            {
                path: '/donates/:id',
                element:<Donate></Donate>,
                loader: ()=> fetch('/donates.json'),
            }
        ]
    }
])

export default myCreatedRouter;