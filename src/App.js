import { createBrowserRouter, Link, RouterProvider } from 'react-router-dom';
import './App.css';
import Courses from './Pages/Courses/Courses';
import Home from './Pages/Home/Home';
import Main from './layout/Main';
import Blog from './Pages/Blog/Blog';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Checkout from './components/Checkout/Checkout';
import PrivateRoute from './routes/PrivateRoute';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>,
        },
        {
          path: 'courses',
          loader: () => fetch(`https://pro-learning-server-side.vercel.app/courses/`),
          element: <Courses></Courses>,
        },
        {
          path: 'courses/:courseId',
          loader: ({ params }) => fetch(`https://pro-learning-server-side.vercel.app/courses/${params.courseId}`),
          element: <PrivateRoute><Checkout></Checkout></PrivateRoute>,
        },
        {
          path: 'blog',
          element: <Blog></Blog>,
        },
        {
          path: 'login',
          element: <Login></Login>,
        },
        {
          path: 'register',
          element: <Register></Register>,
        },
      ]
    },
    {
      path: '*',
      element: <h1 className="text-xl mt-16">Nohting Here. Go back to <Link className="text-blue-500" to='/'>Home</Link></h1>,
    }
  ]);

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
