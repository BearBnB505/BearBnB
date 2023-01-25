import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import HostDetail from "./hostDetail/HostDetail";
import HouseInfo from "./houseInfoUpdate/HouseInfo";
import Payment from "./payment/Payment";
import HostInfo from "./hostinfo/HostInfo";
import CommentPage from "./comment/CommentPage";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/*<App/>*/}
    <HostDetail/>
    <HouseInfo/>
    <Payment/>
    <HostInfo/>
    {/*<CommentPage/>*/}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
