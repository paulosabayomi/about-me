import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import router from './shared/router';


function App() {
  return (
    <div className="m-0 px-0">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
