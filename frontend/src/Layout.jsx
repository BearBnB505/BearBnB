import React from "react";
import Header from "./Header";
import {Outlet} from "react-router-dom";
import "./style.scss";

function Layout(props) {
    return (
        <div>
            <Header />

            <Outlet />
        </div>
    );
}

export default Layout;