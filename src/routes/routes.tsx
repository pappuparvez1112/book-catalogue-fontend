import App from '@/App';
import EditBook from '@/pages/EditBook';
import Login from '@/pages/Login';
import NotFound from '@/pages/NotFound';
import Signup from '@/pages/Signup';
import { createBrowserRouter } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';

import AddBook from '@/pages/AddBook';
import BookDetails from '@/pages/BookDetails';
import Books from '@/pages/Books';
import Home from '@/pages/Home';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        index: true,
        path: '/books',

        element: <Books />,
      },
      {
        path: '/booksNameSearch/:text',

        element: <Books />,
      },
      {
        path: '/product-details/:id',
        element: <BookDetails />,
      },
      {
        path: '/addBooks',
        element: (
          <PrivateRoute>
            <AddBook />
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
