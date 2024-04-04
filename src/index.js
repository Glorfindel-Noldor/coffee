import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom"; 
import routeConfig from "./routeConfig";

const routes = createBrowserRouter(routeConfig)
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={routes} />)