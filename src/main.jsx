import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// import Main from './Layout/Main.jsx';
import Home from './pages/Home/Home/Home';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home></Home>
//   },
// ]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='px-4 lg:mx-2'>
      <div className='max-w-[1400px] mx-auto'>
        {/* <RouterProvider router={router} /> */}
        <Home></Home>
      </div>
    </div>
  </React.StrictMode>,
)
