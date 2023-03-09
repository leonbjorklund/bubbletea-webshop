import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import App from './App';
import { CartProvider } from './CartContext';
import { NotFound } from './components/NotFound';
import './main.css';
import { AdminPage } from './pages/AdminPage';
import { CheckoutPage } from './pages/CheckoutPage';
import { ConfirmationPage } from './pages/ConfirmationPage';
import { HomePage } from './pages/HomePage';
import { ProductsPage } from './pages/ProductsPage';


const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<App/>}>
    {/* Outlet start */}
    <Route index element={<HomePage/>}></Route>
    <Route path="products" element={<ProductsPage />} />
    <Route path="checkout" element={<CheckoutPage />}/>
    <Route path="confirmation" element={<ConfirmationPage />}/>
    <Route path="admin" element={<AdminPage/>}/>
    <Route path="*" element= {<NotFound />}/>
    {/* Outlet end */}
  </Route>
))



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <CartProvider>
      <ChakraProvider>
        <RouterProvider router= {router}/>
      </ChakraProvider>
    </CartProvider>
  </React.StrictMode>
);
