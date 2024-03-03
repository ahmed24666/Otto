import { Fragment, useEffect } from 'react';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SingleProduct from './pages/SingleProduct';
import Category from './pages/Category';
import Cart from './pages/Cart';

function AppLayout() {
  return (
    <Fragment>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </Fragment>
  );
}


const router = createBrowserRouter([
  {
    path: '/',
    element: AppLayout(),
    children: [
      {
        index: true,
        element: <Home/>,
      },
      {
        path: "/product/:id",
        element: <SingleProduct/>,
      },
      {
        path: "/category/:id",
        element: <Category/>,
      },
      {
        path: "/cart",
        element: <Cart/>,
      },
    ],
  },
  {
    path: '*',
    element: <div>Not Found</div>,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
