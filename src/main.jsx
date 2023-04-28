import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Shop from './components/Shop/Shop';
import Home from './components/Layout/Home';
import Orders from './components/Oders/Orders';
import Inventory from './components/Inventory/Inventory';
import Login from './components/Login/Login';
import CartProductsLoader from './Loaders/CartProductLoader';
import Checkout from './components/Checkut/Checkout';
import SignUp from './components/SingUp/SignUp';
import AuthProvider from './components/AuthProvider/AuthProvider';
import PrivateRoute from './Routes/PrivateRoute';
const router = createBrowserRouter([
  {
    path: "/",
    element:<Home></Home>,
    children:[
      {
        path:'/',
        element:<Shop></Shop>
      },
      {
        path:'order',
        element:<Orders></Orders>,

        // customize loader
        loader:CartProductsLoader
        // simple loader style
        // loader:()=>fetch('products.json')
      },
      {
      path:'inventory',
      element:<PrivateRoute><Inventory></Inventory></PrivateRoute>
      },
      {
        path:'login',
        element:<Login></Login>
        },
        {
          path:'checkout',
          element:<PrivateRoute><Checkout></Checkout></PrivateRoute>
          },
          {
            path:'signup',
            element:<SignUp></SignUp>
            }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider> 
    <RouterProvider router={router} />
   </AuthProvider>
  </React.StrictMode>,
)
