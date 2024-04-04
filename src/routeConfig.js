import Home from "./pages/home";
import Form from "./pages/form";

const routeConfig = [
    {   
        path: '/',
        exact: true, 
        element: <Home/>,
        errorElement:(
            <h1>broken page</h1>
        ),
        children:[
            {
                path:'/form',
                exact: true,
                element:<Form/>,
            }
        ]
    }
]

export default routeConfig;
