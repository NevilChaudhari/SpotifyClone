import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from "react-router-dom";
import { PlayerProvider } from "./context/PlayerContext.jsx";
import router from "./routes/routes.jsx";
import './index.css';
import App from './App.jsx';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PlayerProvider>
      {/* <App /> */}
      <RouterProvider router={router} />
    </PlayerProvider>
  </React.StrictMode>
);

reportWebVitals();