import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import ForiaApp from './ForiaApp'



const router = createBrowserRouter([
  {
    path: "/",
    element: <ForiaApp />,
    errorElement: <h3>error de carga</h3>,
    
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
