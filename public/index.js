/**
Purpose: The index.js file is the entry point of the React application. 
It imports the root component which is App.jsx and renders it into the div with id="root" in index.html. */

import React from "react";
// import { render } from "react-dom";
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from "./App";

import { createRoot } from 'react-dom/client';
const container = document.getElementById('app');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App></App>);

ReactDOM.root.render((
   <BrowserRouter basename={process.env.PUBLIC_URL}>
     <App />
   </BrowserRouter>
));

