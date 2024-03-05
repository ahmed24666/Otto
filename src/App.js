import { Fragment, useEffect } from 'react';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SingleProduct from './pages/SingleProduct';
import Category from './pages/Category';
import Cart from './pages/Cart';
import Login from './pages/Login';

function AppLayout() {
  return (
    <div className='min-h-[100vh] flex flex-col justify-between'>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
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
      {
        path: "/wishlist",
        element: <Cart wish/>,
      },
      {
        path: "/login",
        element: <Login/>,
      },
      {
        path: "/signup",
        element: <Login signup/>,
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
