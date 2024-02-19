import { Fragment } from 'react';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';

function AppLayout() {
  return (
    <Fragment>
      <Navbar/>
      <Outlet />
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
