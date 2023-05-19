import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import ForiaApp from './ForiaApp';
import Products from './components/products/Products';
import DisplayProduct from './components/product/DisplayProduct';
import { FilterProvider } from './contexts/FilterContext';
import Filters from './components/filters/Filters';
import CartProvider from './contexts/CartContext';
import ErrorPage from './components/errorpage/ErrorPage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <ForiaApp />,
    errorElement: <ErrorPage/>,
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
    ]

  },
  {
    path: "*",
    element: <ErrorPage/>
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </React.StrictMode>,
)
