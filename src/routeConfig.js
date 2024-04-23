import Home from "./pages/home";
import Form from "./pages/form";
import NavBar from "./pages/navbar";
import Search from "./pages/search";
import Delete from "./pages/delete";
import ErrorPage from "./pages/errorPage";

const routeConfig = [
    {   
        path: '/',
        exact: true, 
        element: <Home/>,
        errorElement: <ErrorPage />,
        children:[
            {
                path:'/form',
                exact: true,
                element:<Form/>,
            },
            {
                path: '/search',
                exact: true,
                element: <Search/>
            },
            {
                path: '/delete',
                exact: true,
                element: <Delete/>
            }
        ]
    }
]

export default routeConfig;
