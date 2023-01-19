import React from "react";
import Header from "./Header";
import {Outlet} from "react-router-dom";
import Calendar from "./Calendar";


function Layout(props) {
    return (
        <div>
            <Header />
            <Calendar />

            <Outlet />
        </div>
    );
}

export default Layout;