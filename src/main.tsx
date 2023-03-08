import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import App from './App';
import { NotFound } from './components/NotFound';
import './index.css';
import { AdminPage } from './pages/AdminPage';
import { CheckoutPage } from './pages/CheckoutPage';
import { ConfirmationPage } from './pages/ConfirmationPage';
import { HomePage } from './pages/HomePage';
import { ProductsPage } from './pages/ProductsPage';


const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<App/>}>
    <Route index element={<HomePage/>}></Route>
    <Route path="products" element={<ProductsPage />} />
    <Route path="checkout" element={<CheckoutPage />}/>
    <Route path="confirmation" element={<ConfirmationPage />}/>
    <Route path="admin" element={<AdminPage/>}/>
    <Route path="*" element= {<NotFound />}/>
  </Route>
))



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router= {router}/>
  </React.StrictMode>
);
