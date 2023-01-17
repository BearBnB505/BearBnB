import React from "react";
import Header from "./Header";
import {Outlet} from "react-router-dom";

function Layout(props) {
    return (
        <div>
            <Header />
            <hr/>

            <Outlet />
        </div>
    );
}

export default Layout;