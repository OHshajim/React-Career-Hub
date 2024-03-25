import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home';
import Root from './Components/Root/Root';
import AppliedJobs from './Components/AppliedJobs/AppliedJobs';
import JobDetails from './Components/JobDetails/JobDetails';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home> ,
      },
      {
        path: "/applied",
        element: <AppliedJobs></AppliedJobs> ,
        loader:()=>fetch('../data/jobs.json')
      },
      {
        path: "/detail/:id",
        element: <JobDetails></JobDetails> ,
        loader:()=>fetch('../data/jobs.json')
      },
    ],

  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </React.StrictMode>,
)
