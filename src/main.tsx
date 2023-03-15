import { ChakraProvider, extendTheme } from '@chakra-ui/react';
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

//extent the theme


const colors = {
  transparent: "transparent",
  black: "#000",
  white: "#fff",
  pink: "#FED3D4",
  lightBrownText: "#54383E",
  darkBrownText: "#322528",
  CartBackgroundYellow: "#FFF9F4",
  yellowGradient: "#FFF2DD",
  lightYellow: "#FFF2E5",
  lightGreenButton: "#ACCDB5",
  cardBackground: "#FFF2E5",
  matchaCard: "#98D16B",
  matchaBackground: "#ADAF99",
  darkGreenButton: "#3A8669",
  bigMatchaCard: "#A2AA70",
  yellowCardCircle: "#FEE5BE",
  strawberryTeaCircle: "#FC6868",
  darkPinkButton: "#AF6969",
  pinkCardButton: "#F79DA3",
  milkTeaCircle: "#E4BC80",
  yellowButton: "#FEE5BE",
  darkYellowButton: "#E4BC80",
  chocolateBrown: "#96584F",
  darkChocolateBubbles: "#412D2D",
  beige: "#C9A69B",
  footerBottom: "#412D2D",
};

const fonts = {
  body:'Comfortaa, sans-serif',
  heading: 'Inconsolata, sans-serif'
}


const theme = extendTheme({colors, fonts})

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<App/>}>
    {/* Outlet start */}
    <Route index element={<HomePage/>}></Route>
    <Route path="products" element={<ProductsPage />} />
    {/* <Route path="products/:id" element={<ProductsPage />} /> */}
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
      <ChakraProvider  theme={theme}>
        <RouterProvider router= {router}/>
      </ChakraProvider>
    </CartProvider>
  </React.StrictMode>
);
