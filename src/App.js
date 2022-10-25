import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Courses from './Pages/Courses/Courses';
import Home from './components/Home/Home';
import Main from './layout/Main';
import Blog from './Pages/Blog/Blog';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';

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
          element: <Courses></Courses>,
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
        {
          path: '*',
          element: <h1>404 Not Found</h1>,
        }
      ]
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
