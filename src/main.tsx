import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import ForiaApp from './ForiaApp'
import Products from './components/products/Products';
import DisplayProduct from './components/product/DisplayProduct';
import { FilterProvider } from './contexts/FilterContext';
import Filters from './components/filters/Filters';
import Cart from './components/cart/Cart';
import CartProvider from './contexts/CartContext';


const router = createBrowserRouter([
  {
    path: "/",
    element: <ForiaApp />,
    errorElement: <h3>error de carga</h3>,
    children: [
      {
        path: "/products",
        element:
          <FilterProvider>
            <Filters />
            <Products />
          </FilterProvider>
      },
      {
        path: "/products/:productId",
        element: <DisplayProduct />
      },
      // {
      //   path: "/cart",
      //   element: <Cart />
      // }
    ]

  },

  {
    path: "/cart",
    element: <Cart />
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </React.StrictMode>,
)
