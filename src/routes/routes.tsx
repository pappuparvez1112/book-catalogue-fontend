import App from '@/App';
import Checkout from '@/pages/Checkout';
import EditBook from '@/pages/EditBook';
import Login from '@/pages/Login';
import NotFound from '@/pages/NotFound';
import ProductDetails from '@/pages/ProductDetails';
import Products from '@/pages/Products';
import Signup from '@/pages/Signup';
import { createBrowserRouter } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      // {
      //   index: true,
      //   element: <Home />,
      // },
      {
        index: true,
        path: '/books',

        element: <Products />,
      },
      {
        path: '/booksNameSearch/:text',

        element: <Products />,
      },
      {
        path: '/product-details/:id',
        element: <ProductDetails />,
      },
      {
        path: '/addBooks',
        element: (
          <PrivateRoute>
            <Checkout />
          </PrivateRoute>
        ),
      },
      {
        path: '/editBooks/:id',
        element: (
          <PrivateRoute>
            <EditBook />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

export default routes;
