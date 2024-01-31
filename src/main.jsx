import React from 'react'
import ReactDOM from 'react-dom';
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Introduction from './pages/Introduction.jsx';
import About from './pages/About.jsx';
import Skills from './pages/Skills.jsx';
import Services from './pages/Services.jsx';
import Portfolio from './pages/Portfolio.jsx';
import Education from './pages/Education.jsx';
import Contact from './pages/Contact.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/introduction",
        element: <Introduction></Introduction>
      },
      {
        path: "/about",
        element: <About></About>
      },
      {
        path: "/skills",
        element: <Skills></Skills>
      },
      {
        path: "/services",
        element: <Services></Services>
      },
      {
        path: "/portfolio",
        element: <Portfolio></Portfolio>
      },
      {
        path: "/education",
        element: <Education></Education>
      },
      {
        path: "/contact",
        element: <Contact></Contact>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
