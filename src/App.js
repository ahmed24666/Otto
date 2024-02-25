import { Fragment, useEffect } from 'react';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SingleProduct from './pages/SingleProduct';

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
