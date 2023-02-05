import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProjectRouter from "./ProjectRouter";

import store from './Store'
import {CookiesProvider} from "react-cookie";
import {Provider} from "react-redux";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <CookiesProvider>
    //     <Provider store={store}>
    //         <ProjectRouter />
    //     </Provider>
    // </CookiesProvider>
    <React.StrictMode>
        <ProjectRouter />
        {/*<App />*/}
    </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
