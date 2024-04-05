import Home from "./pages/home";
import Form from "./pages/form";
import NavBar from "./pages/navbar";
import Search from "./pages/search";

const routeConfig = [
    {   
        path: '/',
        exact: true, 
        element: <Home/>,
        errorElement:(
            <div>
                <h1>broken page</h1>
                <NavBar/>
            </div>
        ),
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
            }
        ]
    }
]

export default routeConfig;
