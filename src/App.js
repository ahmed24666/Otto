import { Fragment, useEffect } from 'react';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SingleProduct from './pages/SingleProduct';
import Category from './pages/Category';
import Cart from './pages/Cart';
import Login from './pages/Login';
import VarifyEmail from './pages/VarifyEmail';
import ForgetPassword from './pages/ForgetPassword';
import ResetPassword from './pages/ResetPassword';

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
        element: <Category categoryPage />,
      },
      {
        path: "/sub-category/:id",
        element: <Category subCategoryPage />,
      },
      {
        path: "/products",
        element: <Category allProductsPage />,
      },
      {
        path: "/search/:id",
        element: <Category search />,
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
      {
        path: "/email-verification",
        element: <VarifyEmail/>,
      },
      {
        path: "/forget-password",
        element: <ForgetPassword/>,
      },
      {
        path: "/reset-password",
        element: <ResetPassword/>,
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
