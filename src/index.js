import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './input.css'
import MainPage from "./components/MainPage";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MainPage className="font-bold"/>
  </React.StrictMode>
);
