import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'react-multi-carousel/lib/styles.css';
import "react-image-gallery/styles/css/image-gallery.css";
import "react-double-range-slider/dist/cjs/index.css";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

