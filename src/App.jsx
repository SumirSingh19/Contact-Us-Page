import './App.css';
import Contact from './components/Contact';
import { Outlet, createBrowserRouter } from 'react-router-dom';
import Error from './components/Error';
import Submission from './components/Submission';

const AppLayout = () => {

  return (
    <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500 flex items-center justify-evenly space-x-3 p-8">
      <Outlet />
      
    </div>
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
      path: "/contact",
      element: <Contact />,
      },
      {
        path: "/submission",
        element: <Submission />
      }
    ],
    errorElement: <Error/>
  }
]);

export {
  appRouter,
}


